// ==UserScript==
// @name        visa
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       /https:\/\/cgifederal\.secure\.force\.com\/applicanthome/
// @grant        none
// ==/UserScript==

(function() {
    if(localStorage.getItem("date")==null||localStorage.getItem("date")=="undefined"){
        localStorage.setItem("date",$(".leftPanelText")[0].innerText);
        setTimeout(()=>window.location.reload(),1000);
    }
    else{
        if($(".leftPanelText")[0].innerText!=localStorage.getItem("date")){
        window.open();
             localStorage.setItem("date",$(".leftPanelText")[0].innerText);
             setTimeout(()=>window.location.reload(),1000);
        }
        else{
            setTimeout(()=>window.location.reload(),10*1000);
        }
    }


    // Your code here...
})();