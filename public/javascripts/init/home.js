import * as helpers from "../helpers.js"
import * as db_manager from "./db_manager.js"
import * as macro_manager from "./macro_manager.js"
import * as source_manager from "./source.js"
import * as scheduler from "./scheduler.js"
import * as publishing_preview from "./publishing_preview.js"
import * as help from "./help.js"
import * as config from "./config.js"

export function home_init() {
    // initialize theme
    const th = document.querySelector(".theme-switcher input");
    document.body.setAttribute("data-theme", "light");
    th.addEventListener("change", (e) => {
        if (e.target.checked) {
            document.body.setAttribute("data-theme", "dark");
            helpers.change_theme("luna_dark", false);
            monaco.editor.setTheme('vs-dark');
        } else {
            document.body.setAttribute("data-theme", "light");
            helpers.change_theme("luna", false);
            monaco.editor.setTheme('vs');
        }
    });
    // fullscreen
    $( "#tool-fullscreen" ).on( "click", helpers.toggle_fullscreen)
    // top toolbar
    /* global variables from login */
    Window.user_email = "guest@luna.com"
    Window.user_name = "Luna Guest";
    Window.user_img = "guest";
    Window.user_user = "1";
    /* --------------------------- */
    let usr = $("#tool-user"), img = $("#tool-img");
    usr.html("<span>" + Window.user_name + "</span>");
    img.attr("title", Window.user_email).css("background-image", "url(/images/users/" + Window.user_img + ".jpg)");
    usr.html("<span>" + Window.user_name + "</span>");
    img.attr("title", Window.user_email).css("background-image", "url(/images/users/" + Window.user_img + ".jpg)");
    // left (vertical) toolbar click
    $("#left-button-db").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-db").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["db-manager-left-template","db-manager-right-template"],
                db_manager.db_manager_init)
        }
    });
    $("#left-button-macro").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-macro").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["macro-manager-left-template","macro-manager-right-template"],
                macro_manager.macro_manager_init)
        }
    });
    $("#left-button-source").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-source").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["source-manager-left-template","source-manager-right-template"],
                source_manager.macro_manager_init)
        }
    });
    $("#left-button-scheduler").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-scheduler").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["scheduler-left-template","scheduler-right-template"],
                scheduler.scheduler_init)
        }
    });
    $("#left-button-preview").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-preview").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["publishing-preview-left-template","publishing-preview-right-template"],
                publishing_preview.publishing_preview_init);
        }
    });
    $("#left-button-help").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-help").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["help-left-template","help-right-template"],
               help.help_init);
        }
    });
    $("#left-button-config").on("click", function () {
        if ($(this).hasClass("left-button-on")) {
            helpers.toggle_left_menu();
        } else
        {
            $(".left-button").removeClass("left-button-on");
            $("#left-button-config").addClass("left-button-on");
            helpers.load_page(
                ["left-container","right-container"],
                ["config-left-template","config-right-template"],
                config.config_init);
        }
    });

    // start with db manager
    helpers.load_page(
        ["left-container","right-container"],
        ["db-manager-left-template","db-manager-right-template"],
        db_manager.db_manager_init)
}
