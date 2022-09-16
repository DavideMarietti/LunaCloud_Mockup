import * as helpers from "../helpers.js";

// init DB manager
export function db_manager_init() {
    // global variables
    window.main_menu_status = "open";
    window.db_manager_mode = "detail";
    // DB objects grid
    let grid_el = $("#db-manager-grid");
    let db_grid = grid_el.kendoGrid({
        dataSource: {
            data: catalog,
            sort: { field: "name", dir: "asc" },
            schema: {
                model: {
                    fields: {
                        obj: { type: "string" },
                        id: { type: "string" },
                        name: { type: "string" },
                        type: { type: "string" },
                        created_on: { type: "string" },
                        created_by: { type: "string" },
                        modified_on: { type: "string" },
                        modified_by: { type: "string" },
                        cols_dims: { type: "string" },
                        cells_rows: { type: "string" },
                        disk_space: { type: "string" },
                        tags: { type: "string" }
                    }
                }
            }
        },
        sortable: true,
        resizable: true,
        selectable: true,
        toolbar: kendo.template($("#db-manager-toolbar-template").html()),
        dataBound: function() {
            for (let i = 0; i < this.columns.length; i++) {
                this.autoFitColumn(i);
            }
        },
        change: select_db_grid,
        columns: [
            { title: "Object", template: kendo.template($("#db-manager-card-template").html())},
            { field: "obj", groupHeaderTemplate: "Object: #=value#", hidden: true},
            { field: "name", title: "Name", hidden: true,
                template: "<div class='obj-image' style='background-image: url(/images/#:data.obj#.svg);'>#:name#</div>"
            },
            { field: "type", title: "Type", hidden: true},
            { field: "created_on", title: "Created on", hidden: true},
            { field: "created_by", title: "Created by", hidden: true},
            { field: "modified_on", title: "Modified on", hidden: true},
            { field: "modified_by", title: "Modified by", hidden: true},
            { field: "cols_dims", title: "Cols/Dims", hidden: true},
            { field: "cells_rows", title: "Rows/Cells", hidden: true},
            { field: "disk_space", title: "Disk usage", hidden: true},
            { field: "tags", title: "Tags", hidden: true,
                template: "#=data.tags#"}
        ]
    });
    // new object button
    $("#new-object").kendoSplitButton({
        items:[
            { text: "Table", spriteCssClass: "ico-table" },
            { text: "Cube", spriteCssClass: "ico-cube" },
            { text: "List", spriteCssClass: "ico-list" },
            { text: "View", spriteCssClass: "ico-view" },
            { text: "Chart", spriteCssClass: "ico-chart" }
        ],
        themeColor: "info"
    });
    // grid mode selector
    db_grid.find("#db-manager-display").kendoButtonGroup({
        select: function (e) {
            helpers.change_db_grid_view(db_grid, e.indices[0]);
        },
        index: 0
    });
    // grouping toggle
    $("#db-manager-group").on("click", helpers.toggle_db_manager_group);
}
// select row on DB manager
function select_db_grid(arg) {
    let grid = $("#db-manager-grid").data("kendoGrid");
    let sel = grid.dataItem(grid.select());
    let tab = $("#cube-detail-tabs");
    if (tab.data("kendoTabStrip")) {
        tab.data("kendoTabStrip").destroy();
        tab.empty();
    }
    let ds = [
        { Name: "Info", CssClass: "tab-info tab-icon", Content: "Info Div"},
        { Name: "Structure", CssClass: "tab-structure tab-icon", Content: "Structure Div" }
    ];
    if ((sel.obj==="cube")||(sel.obj==="table")) {
        ds.push({Name: "Data", CssClass: "tab-data tab-icon", Content: "Data Div"});
        ds.push({Name: "Import/Export", CssClass: "tab-import-export tab-icon", Content: "Import/Export Div"});
        ds.push({Name: "Methods", CssClass: "tab-methods tab-icon", Content: "Methods Div"});
    }
    tab.kendoTabStrip({
        dataTextField: "Name",
        dataSpriteCssClass: "CssClass",
        dataContentField: "Content",
        dataSource: ds,
        animation: false
    }).data("kendoTabStrip").select("li:first");
    // dialogs
    db_info_dialog_init(sel);
}

function db_info_dialog_init(sel) {
    let tab = $("#cube-detail-tabs");
    // info dialog init
    let info = kendo.template($("#db-manager-info-template").html());
    $(tab.data("kendoTabStrip").contentElement(0)).html(info(sel));
    // name
    $("#db-manager-name").kendoTextBox();
    // description
    $("#db-manager-description").kendoTextArea({
        rows: 3,
        maxLength:200
    });
    let dbm_tags = $("#db-manager-tags").kendoMultiSelect({
        filter: "startswith",
        dataTextField: "tag",
        dataValueField: "value",
        dataSource: [
            {value:"1", tag:"Budget"}, {value:"2", tag:"Customer"}, {value:"3", tag:"Geo"},
            {value:"4", tag:"Products"}, {value:"5", tag:"Time"}, {value:"6", tag:"What if"}],
        noDataTemplate: $("#noDataTemplate").html()
    });
    dbm_tags.data("kendoMultiSelect").value(["1", "5", "3"]);
    // save button
    $("#db-manager-save").kendoButton({
        themeColor: "primary"
    });
    // duplicate button
    $("#db-manager-duplicate").kendoButton({
        themeColor: "info"
    });
    // delete button
    $("#db-manager-delete").kendoButton({
        themeColor: "error"
    });
}
