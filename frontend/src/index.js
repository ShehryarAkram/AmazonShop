import Error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/homeScreen.js";
import productScreen from "./screens/productScreen.js";
import { parseRequestUrl } from "./utils.js";
const path = require('path');
const webpack = require('webpack');
const routes = {
    "/":homeScreen,
    "/product/:id":productScreen,
}
const router = async ()=>{
    const request = parseRequestUrl();
    // if else statements here
    // ? means if it exists then use `/:name`(otherwise use): ''............ + means concatinate conditions
    const parseUrl = (request.resource? `/${request.resource}`:'/') + 
    (request.id? `/:id`:'')+
    (request.verb? `/${request.verb }`:'');
    const screen = routes[parseUrl]? routes[parseUrl]:Error404Screen;

    const main=document.getElementById("main-container");
    main.innerHTML=await screen.render();
}
window.addEventListener("load",router);
window.addEventListener('hashchange',router);