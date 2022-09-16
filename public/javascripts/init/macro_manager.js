export function macro_manager_init() {
    // new macro button
    $("#new-macro").kendoSplitButton({
        items:[
            { text: "From chronology", spriteCssClass: "ico-chronology" },
            { text: "Empty", spriteCssClass: "ico-empty" }
        ],
        themeColor: "info"
    });
    // tree
    $("#macro-tree").kendoTreeView({
        dataSource: macros_tree,
        animation: false,
        dataSpriteCssClassField: "class"
    });
    // macro tabs create
    let macro_tabs = $("#macro-tabs").kendoTabStrip({
        animation: false,
        dataTextField: "text",
        dataContentField: "content",
        dataSource: macros
    });
    let macro_tabs_data= macro_tabs.data("kendoTabStrip");
    macro_tabs_data.select(0);
    // macro tabs sort
    $("#macro-tabs ul.k-tabstrip-items").kendoSortable({
        filter: "li.k-item",
        axis: "x",
        container: "ul.k-tabstrip-items",
        hint: function (element) {
            return $("<div id='hint' class='k-widget k-tabstrip'><ul class='k-tabstrip-items k-reset'><li class='k-item k-active k-tab-on-top'>" + element.html() + "</li></ul></div>");
        },
        start: function (e) {
            macro_tabs_data.activateTab(e.item);
        },
        change: function (e) {
            let tab = $("#macro-tabs").data("kendoTabStrip"),
                reference = tab.tabGroup.children().eq(e.newIndex);

            if (e.oldIndex < e.newIndex) {
                tab.insertAfter(e.item, reference);
            } else {
                tab.insertBefore(e.item, reference);
            }
        }
    });
    // macro tabs close
    let tabs = $('#macro-tabs li[role="tab"]');
    tabs.append('<span data-type="remove" class="k-link"><span class="k-icon k-i-x"></span></span>');
    macro_tabs_data.tabGroup.on("click", "[data-type='remove']", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let item = $(e.target).closest(".k-item");
        macro_tabs_data.remove(item.index());
        if (macro_tabs_data.items().length > 0 && item.hasClass('k-active')) {
            macro_tabs_data.select(0);
        }
    });
    // monaco
    require.config({ paths: { vs: '/libs/monaco-editor/min/vs' } });
    // simulate open tabs
    $(macro_tabs_data.contentElement(0)).html("<div id='monaco0' style='height: 100%'></div>");
    $(macro_tabs_data.contentElement(1)).html("<div id='monaco1' style='height: 100%'></div>");
    $(macro_tabs_data.contentElement(2)).html("<div id='monaco2' style='height: 100%'></div>");
    $(macro_tabs_data.contentElement(3)).html("<div id='monaco3' style='height: 100%'></div>");
    require(['vs/editor/editor.main'], function () {
        monaco.editor.create(document.getElementById('monaco0'), {
            value: macros[0].content,
            language: 'java',
            automaticLayout: true
        });
        monaco.editor.create(document.getElementById('monaco1'), {
            value: macros[1].content,
            language: 'java',
            automaticLayout: true
        });
        monaco.editor.create(document.getElementById('monaco2'), {
            value: macros[2].content,
            language: 'java',
            automaticLayout: true
        });
        monaco.editor.create(document.getElementById('monaco3'), {
            value: macros[3].content,
            language: 'java',
            automaticLayout: true
        });
        if (document.querySelector(".theme-switcher input").checked) {
            monaco.editor.setTheme('vs-dark');
        } else {
            monaco.editor.setTheme('vs');
        }
    });

    /*
    // monaco
    require.config({ paths: { vs: '/libs/monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        Window.monaco1 = monaco.editor.create(document.getElementById('monaco-container'), {
            value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
            language: 'javascript'
        });
    });
    */
}


