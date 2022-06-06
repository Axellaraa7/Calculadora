import loadTemplates from './modules/templates.js';
import menuHamburguer from './modules/menu.js';

const d = document, w = window;

d.addEventListener("DOMContentLoaded",()=>{
  loadTemplates();
  menuHamburguer();
});