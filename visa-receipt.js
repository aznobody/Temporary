// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /https:\/\/cgifederal\.secure\.force\.com\/confirmreceipt/
// @grant        none
// ==/UserScript==

(function() {
    // debugger;
     if(!localStorage.getItem("toggle")){
     localStorage.setItem("toggle",1);
 }
  preventAlert();
  setTimeout(()=>FillNumber(),10*1000);
 preventAlert();
 function FillNumber(){
     console.log("fill");
     if(localStorage.getItem("toggle")=="1")
     {document.getElementById("j_id0:SiteTemplate:theForm:j_id201:0:test").value="909316739500";
     localStorage.setItem("toggle",2);
     }
     else{
      document.getElementById("j_id0:SiteTemplate:theForm:j_id201:0:test").value="KYCETX898063";
         localStorage.setItem("toggle",1)
     }
 document.getElementById("j_id0:SiteTemplate:theForm:continue_btn").click();
 preventAlert();
     if($(".ui-state-error.ui-corner-all")[0]){//if error is showing
  }
 else
     window.open();
 }
 
     function preventAlert(){
     if($(".ui-dialog.ui-widget.ui-widget-content.ui-corner-all")[0].style["display"]=="block"){
         $(".ui-button-text")[0].click();
     }
 }
 
 })();