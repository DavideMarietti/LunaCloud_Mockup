const express = require('express');
const router = express.Router();
let server = require('../server/utilities');

// get collection
router.get('/:collection*?/', async function (req, res) {
    let qry, flt="", ord="";
    let coll = req.params["collection"];
    if (req.query._key) {
//        if (req.query.filter) flt = req.query.filter + " AND c.parentId=='" + req.query._key + "'";
//        else flt = "FILTER c.parentId=='" + req.query._key + "'";
        flt = "FILTER c.parentId=='" + req.query._key + "'";
    } else if (req.query.filter) {
        flt = req.query.filter;
    }
    if (req.query.ord) { ord = req.query.ord;}
    qry = "FOR c IN " + coll + " " + flt + " " + ord + " RETURN c";

    await _db.query(qry)
        .then(async function (result) {
            let values = await result.all();
            values.forEach(val => { val.id = val._key});
            server.sendTable(req, res, coll, values);
        })
        .catch(function (err) {
            server.serverError(err,"Read: "+qry+"\n");
            res.status(err.statusCode).send({serverError: err.message+"\nRead: "+qry});
        });
});

module.exports = router;
