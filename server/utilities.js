const beautify = require("json-beautify");

exports.serverError = function(err, info="") {
    console.log("\x1b[31mERROR "+err.statusCode+" - "+err.message);
    console.log(info);
};

exports.sendTable = function(req, res, coll, values)
{
    if (req.query.grid) {
        if (req.query.nested) {
            let flatToNested = new FlatToNested({
                id: '_key',
                parent: 'parentId',
                children: 'Items',
                detail: req.query.detail
            });
            let nested = flatToNested.convert(values);
            if (nested.hasOwnProperty('_key')) nested = {Items: [nested]};
            res.status(200).send({Body: [nested]});
        } else {
            res.status(200).send({Body: [values]});
        }
    } else if (req.query.json) {
        res.setHeader('Content-disposition', 'attachment; filename=' + coll + '.json');
        res.status(200).send(beautify(values, null, 2, 100));
    } else {
        res.status(200).send(values);
    }
};

function FlatToNested(config) {
    this.config = config = config || {};
    this.config.id = config.id || 'id';
    this.config.parent = config.parent || 'parent';
    this.config.children = config.children || 'children';
    this.config.detail = config.detail;
    this.config.options = config.options || { deleteParent: true };
}

/**
 * Convert a hierarchy from flat to nested representation.
 *
 * @param {array} flat The array with the hierachy flat representation.
 */
FlatToNested.prototype.convert = function (flat) {
    let i, len, temp, roots, id, parent, nested, pendingChildOf, flatEl;
    i = 0;
    roots = [];
    temp = {};
    pendingChildOf = {};

    for (i, len = flat.length; i < len; i++) {
        flatEl = flat[i];
        id = flatEl[this.config.id];
        parent = flatEl[this.config.parent];
        temp[id] = flatEl;
        if (parent === undefined || parent === null) {
            // Current object has no parent, so it's a root element.
            roots.push(flatEl);
        } else {
            if (temp[parent] !== undefined) {
                // Parent is already in temp, adding the current object to its children array.
                initPush(this.config.children, temp[parent], flatEl, this.config.detail);
            } else {
                // Parent for this object is not yet in temp, adding it to pendingChildOf.
                initPush(parent, pendingChildOf, flatEl, this.config.detail);
            }
            if(this.config.options.deleteParent){
                delete flatEl[this.config.parent];
            }
        }
        if (pendingChildOf[id] !== undefined) {
            // Current object has children pending for it. Adding these to the object.
            multiInitPush(this.config.children, flatEl, pendingChildOf[id], this.config.detail);
        }
    }

    if (roots.length === 1) {
        nested = roots[0];
    } else if (roots.length > 1) {
        nested = {};
        nested[this.config.children] = roots;
    } else {
        nested = {};
    }
    return nested;
};

function initPush(arrayName, obj, toPush, detail) {
    if (detail) {
        if (obj[arrayName] === undefined) {
            obj[arrayName] = [{[arrayName]: []}];
        }
        if (obj[arrayName][arrayName] === undefined) {
            obj[arrayName][arrayName] = [];
        }
        toPush['id'] = obj['id'] + '-' + toPush['id']; // makes id unique in grid
        obj[arrayName][0][arrayName].push(toPush);
    } else {
        if (obj[arrayName] === undefined) {
            obj[arrayName] = [];
        }
        obj[arrayName].push(toPush);
    }
}

function multiInitPush(arrayName, obj, toPushArray, detail) {
    let len;
    len = toPushArray.length;
    if (detail) {
        if (obj[arrayName] === undefined) {
            obj[arrayName] = [{[arrayName]: []}];
        }
        if (obj[arrayName][arrayName] === undefined) {
            obj[arrayName][arrayName] = [];
        }
    } else {
        if (obj[arrayName] === undefined) {
            obj[arrayName] = [];
        }
    }
    while (len-- > 0) {
        if (detail) {
            let toPush = toPushArray.shift();
            toPush['id'] = obj['id'] + '-' + toPush['id']; // makes id unique in grid
            obj[arrayName][0][arrayName].push(toPush);
        } else {
            obj[arrayName].push(toPushArray.shift());
        }
    }
}

exports.parseGML = function parseGML(gml) {
    let json = ('{\n' + gml + '\n}')
        .replace(/^(\s*)(\w+)\s*\[/gm, '$1"$2": {')
        .replace(/^(\s*)\]/gm, '$1},')
        .replace(/^(\s*)(\w+)\s+(.+)$/gm, '$1"$2": $3,')
        .replace(/,(\s*)\}/g, '$1}');

    let graph = {};
    let nodes = [];
    let links = [];
    let i = 0;
    let parsed;

    json = json.replace(/^(\s*)"node"/gm, function (all, indent) {
        return (indent + '"node[' + (i++) + ']"');
    });

    i = 0;

    json = json.replace(/^(\s*)"edge"/gm, function (all, indent) {
        return (indent + '"edge[' + (i++) + ']"');
    });

    try {
        parsed = JSON.parse(json);
    }
    catch (err) {
        throw new SyntaxError('bad format');
    }

    if (!isObject(parsed.graph)) {
        throw new SyntaxError('no graph tag');
    }

    forIn(parsed.graph, function (key, value) {

        let matches = key.match(/^(\w+)\[(\d+)\]$/);
        let name;
        let i;

        if (matches) {
            name = matches[1];
            i = parseInt(matches[2], 10);

            if (name === 'node') {
                nodes[i] = value;
            }
            else if (name === 'edge') {
                links[i] = value;
            }
            else {
                graph[key] = value;
            }
        }
        else {
            graph[key] = value;
        }
    });

    graph.nodes = nodes;
    graph.links = links;

    return graph;
};

function isObject(value) {

    return (value && Object.prototype.toString.call(value) === '[object Object]');
}

function forIn(object, callback) {

    Object.keys(object).forEach(function (key) {

        callback(key, object[key]);
    });
}

/** @namespace req.query.nested **/
