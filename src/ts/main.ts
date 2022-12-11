import "./slider";
import forms from "./modules/forms";
import { modals, tabs } from "./modules";
import changeModalState from './modules/changeModalState'


window.addEventListener('DOMContentLoaded', (): void => {

    const modalState = {}
    changeModalState(modalState)
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
    tabs({        
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeClass: 'do_img_more',
        display: 'inline-block'
    })
    forms()
});