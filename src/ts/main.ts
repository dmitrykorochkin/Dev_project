import "./slider";
<<<<<<< HEAD
import modals from "./modules/modals";
import forms from "./modules/forms";
=======
import { modals, tabs } from "./modules";
>>>>>>> 3a7861d44fe665dc0569a849bbe86c4fd22b6cb7


window.addEventListener('DOMContentLoaded', (): void => {

    modals();
<<<<<<< HEAD
    forms();

=======

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
>>>>>>> 3a7861d44fe665dc0569a849bbe86c4fd22b6cb7
});