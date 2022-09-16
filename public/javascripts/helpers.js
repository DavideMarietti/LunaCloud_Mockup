export function server_error(xhr, ajaxOptions, thrownError) {
    if (xhr.status === 500) alert(xhr.responseJSON.serverError.sqlMessage);
}

// load elements array and launch init function
export function load_page(target, source, init) {
    if (!Array.isArray(target)) {
        target = [target];
        source = [source];
    }
    target.forEach((tg, index) => {
        empty_container(tg);
        $("#"+tg).html($("#"+source[index]).html());
    });
    init();
}

// open/close the left menu
export function toggle_left_menu() {
    let menu = document.getElementById("main-menu");
    let cont = document.getElementById("right-container");
    let logo = document.getElementById("logo");
    if (window.main_menu_status==="open") {
        menu.style.width="3.2vw";
        cont.style.left="3.2vw";
        cont.style.width="96.8vw";
        logo.style.width="3.2vw";
        logo.style.backgroundImage="var(--logo-mini)";
        logo.style.backgroundSize="1.8vw";
        window.main_menu_status = "closed";
    } else {
        menu.style.width="18vw";
        cont.style.left="18vw";
        cont.style.width="82vw";
        logo.style.width="18vw";
        logo.style.backgroundImage="var(--logo)"
        logo.style.backgroundSize="6vw"
        window.main_menu_status = "open";
    }
    set_db_grid_width();
}

// db manager grid display mode (card+detail, full list, full detail)
export function change_db_grid_view(grid, mode) {
    if (mode===0) {
        grid.data("kendoGrid").showColumn(0)
        for (let i=2;i<=12;i++) grid.data("kendoGrid").hideColumn(i);
        $(".to-hide").show();
        window.db_manager_mode="detail";
    } else if (mode===1) {
        grid.data("kendoGrid").hideColumn(0);
        for (let i=2;i<=12;i++) {
            grid.data("kendoGrid").showColumn(i);
            grid.data("kendoGrid").autoFitColumn(i);
        }
        $(".to-hide").show();
        window.db_manager_mode="list";
    } else {
        grid.data("kendoGrid").hideColumn(0)
        grid.data("kendoGrid").showColumn(2);
        for (let i=3;i<=12;i++) {
            grid.data("kendoGrid").hideColumn(i);
            grid.data("kendoGrid").autoFitColumn(i);
        }
        $(".to-hide").hide();
        window.db_manager_mode="full";
    }
    set_db_grid_width();
}

// change db grid mode preserving selection
function set_db_grid_width() {
    let grid = $("#db-manager-grid");
    let detail = $("#db-manager-detail");
    if (window.db_manager_mode==="list") {
        grid[0].style.width = (window.main_menu_status==="open")?"80vw":"95vw";
    } else if (window.db_manager_mode==="detail") {
        grid[0].style.width = "30vw";
        detail[0].style.width = (window.main_menu_status==="open")?"48.5vw":"63.5vw";
    } else {
        grid[0].style.width = "9vw";
        detail[0].style.width = (window.main_menu_status==="open")?"69.5vw":"84.5vw";
    }
    let gd = grid.data("kendoGrid");
    let sel = save_selection(gd);
    gd.refresh();
    restore_selection(gd, sel)
}
function save_selection(gd) {
    if (gd.select().length) return gd.dataItem(gd.select()).id;
}
function restore_selection(gd, sel) {
    if (sel) {
        let items = gd.items();
        items.each(function (idx, row) {
            if (gd.dataItem(row).id === sel) gd.select(row);
        });
        // make selected row visible
        let scroll_offset = gd.element.find("tbody").offset().top;
        let select_offset = gd.select().offset().top;
        let dist = select_offset - scroll_offset;
        let content =  gd.element.find(".k-grid-content");
        // to do !!!
        if (Math.abs(dist)>content.height()) {
            content.animate({
                scrollTop: dist
            }, 400);
        }
    }
}

// switch grouped view
export function toggle_db_manager_group() {
    let grid = $("#db-manager-grid");
    let gd = grid.data("kendoGrid");
    let sel = save_selection(gd);
    let ds = gd.dataSource;
    if (document.getElementById('db-manager-group').checked) {
        ds.group({ field: "obj" })
    } else {
        ds.group(null);
    }
    restore_selection(gd, sel)
}

// dispose widgets in element
export function empty_container(el) {
    kendo.destroy(document.getElementById(el));
    $("#"+el).empty();
}

// theme management
export function change_theme(skinName, animate) {
    let doc = document,
        kendoLinks = $("link[href*='kendo.']", doc.getElementsByTagName("head")[0]),
        commonLink = kendoLinks.filter("[href*='kendo.common']"),
        skinLink = kendoLinks.filter(":not([href*='kendo.common'])"),
        href = location.href,
        skinRegex = /kendo\.\w+(\.min)?\.css/i,
        extension = skinLink.attr("rel") === "stylesheet" ? ".css" : ".less",
        url = commonLink.attr("href").replace(skinRegex, "kendo." + skinName + "$1" + extension),
        exampleElement = $("#example");

    function preload_stylesheet(file, callback) {
        let element = $("<link rel='stylesheet' media='print' href='" + file + "'").appendTo("head");

        setTimeout(function () {
            callback();
            element.remove();
        }, 100);
    }
    function replace_theme() {
        let oldSkinName = $(doc).data("kendoSkin"),
            newLink;

        newLink = skinLink.eq(0).clone().attr("href", url);

        newLink.insertBefore(skinLink[0]);
        skinLink.remove();

        $(doc.documentElement).removeClass("k-" + oldSkinName).addClass("k-" + skinName);
    }

    if (animate) {
        preload_stylesheet(url, replace_theme);
    } else {
        replace_theme();
    }
}

// toggle full screen
function  full_screen_on() {
    if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

function  full_screen_off() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

export function toggle_fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) full_screen_on();
    else full_screen_off();
}

export function is_dark_theme() {
    return document.getElementById("switcher").checked===true
}


