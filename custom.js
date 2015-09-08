
$(function(){
	$("p.hideme").hide();

// -=-=-=-=-=Minisect Toggling -=-=-=-=-=-=-= //
	$(".minisect.description").click(function(){
		$("p.hideme").fadeToggle(500);

		var element= document.querySelector(".minisect.description").offsetHeight;
		if(element==30)
		{
			$(".minisect.description").animate({height:"300px"},500);
		}
		else{
			$(".minisect.description").animate({height:"30px"},500);
		}
	});
// -=-=-=-=-=Background Toggling -=-=-=-=-=-=-= //


// -=-=-=-=-=Powers Toggling -=-=-=-=-=-=-= //


});