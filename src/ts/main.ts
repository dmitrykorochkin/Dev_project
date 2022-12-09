import "./slider";
import forms from "./modules/forms";
import { modals, tabs } from "./modules";


window.addEventListener('DOMContentLoaded', (): void => {

    modals();

    tabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active'
    });

    tabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click'
    });
    forms()
});