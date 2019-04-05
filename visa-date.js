// ==UserScript==
// @name        visa date
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       /https:\/\/cgifederal\.secure\.force\.com\/ApplicantHome/
// @grant        none
// ==/UserScript==

(function() {
    if(localStorage.getItem("date")==null||localStorage.getItem("date")=="undefined"){
        localStorage.setItem("date",$(".leftPanelText")[0].innerText);
        setTimeout(()=>window.location.reload(),1000);
    }
    else{

        var currentDateOnPage=$(".leftPanelText")[0].innerText;
        if(currentDateOnPage!=localStorage.getItem("date")){
            var month=currentDateOnPage.split(" ")[5];
            var date=parseInt(currentDateOnPage.split(" ")[6].split(',')[0]);
            if(month=="May"&&date<22)
               {window.open();}//my target
             localStorage.setItem("date",currentDateOnPage);
             setTimeout(()=>window.location.reload(),4000);
        }
        else{
            setTimeout(()=>window.location.reload(),20*1000);
        }
    }


    // Your code here...
})();
