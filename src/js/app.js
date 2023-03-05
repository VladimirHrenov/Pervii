import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
 
const swiper = new Swiper();

const iconMenu = document.querySelector('.menu_icon');    // добавление класса для бургер
if (iconMenu){
    const menuBody = document.querySelector('nav.menu_body');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
        })};