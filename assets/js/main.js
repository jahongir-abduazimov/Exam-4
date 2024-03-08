"use strict";

$(document).on("pagecreate","#pageone",function(){
    $("p").on("swipe",function(){
      $("span").text("Swipe detected!");
    });                       
  });