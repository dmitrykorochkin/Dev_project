import "./slider";
import forms from "./modules/forms";
import { modals, tabs } from "./modules";
import changeModalState from './modules/changeModalState';
import timer from './modules/timer'


window.addEventListener('DOMContentLoaded', (): void => {

    const modalState = {};
    let deadline = '2022-12-31'
    changeModalState(modalState);
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
    forms(modalState);
    timer('.container1', deadline)
});