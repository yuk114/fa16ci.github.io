
$(document).ready(function() { //always do this first. A special event 

  //append new element
  for (i = 0; i < 100; i++){
    $("body").append( "<div class='element' style='background-color: hsl(" + i * 3.6 + ", 100%, 50%); transform:rotate(" + i*3.6 + "deg);'></div>" );
    console.log("element " + i + " added");
}
  
  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#000000');
  });
  
  
  //call the function
  drawGridObjects();
  drawRandomObject();
  drawGridObjects();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  
  //custom functions
  function drawRandomObject(){
    //store random value between 0 to 100 to rw and rh
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var color = "#000";
    if (ry < 50) {
      color = "yellow";
    }
    else if (rx < 50){
      color = "purple";
    }
    else {
      color = "blue"; 
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );
  }

  function drawGridObjects(){
    //append new element 20 times, and repeat that 100 times
    for (j = 0; j < 100; j++) {
      for (i = 0; i < 20; i++) { 
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }
  
 
 function rotateGridObjects(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    $('.element').css('transform','rotate(' + second*6 + 'deg)');
  }
});