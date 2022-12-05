import "./slider";
import { modals, tabs } from "./modules/index";


window.addEventListener('DOMContentLoaded', () :void => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});