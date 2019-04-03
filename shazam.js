// ==UserScript==
// @name         BookMyshow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /https:\/\/in\.bookmyshow\.com\/buytickets\/shazam-hyderabad\/movie-hyd-ET00072971-MT\/20190406/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     if($("#venuelist li").length>8){
        window.open();
        }
        else{
            setTimeout(()=>window.location.reload(),50*1000);
        }

    // Your code here...
})();