
$(document).ready(function(){

	//append new element
	for (i = 0; i < 100; i++){
	  $("body").append( "<div class='element' style='background-color: hsl(" + i * 3.6 + ", 100%, 50%);'></div>" );
	  console.log("element " + i + " added");
}
	
	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','black');
	})
		$('.element').mouseout(function(){
		$(this).css('background-color','#000000');
	})
})