
$(function(){
	$("p.hideme").hide();
    $("p.hideme2").hide();
    $("p.hideme3").hide();
// -=-=-=-=-=Minisect Toggling: Description -=-=-=-=-=-=-= //
	$(".minisect.description").click(function(){
		
      $("p.hideme").css("background", "rgb(241, 241, 241)");
		var element= document.querySelector(".minisect.description").offsetHeight;
		
		if(element==30)
		{
			$(".minisect.description").animate({height:"300px"},500);
		}
		else{
			$(".minisect.description").animate({height:"30px"},500);
		}
		$("p.hideme").delay(600).fadeToggle(600);
	});
// -=-=-=-=-=Minisect Toggling: Background -=-=-=-=-=-=-= //
	$(".minisect.background").click(function(){
		$("p.hideme2").fadeToggle(900);

		var element= document.querySelector(".minisect.background").offsetHeight;
		$("p.hideme2").css("background", "rgb(241, 241, 241)");
		if(element==30)
		{
			$(".minisect.background").animate({height:"400px"},500);
		}
		else{
			$(".minisect.background").animate({height:"30px"},500);
		}
	});
// -=-=-=-=-=Minisect Toggling: Powers -=-=-=-=-=-=-= //
	$(".minisect.powers").click(function(){
		$("p.hideme3").fadeToggle(900);
        
		var element= document.querySelector(".minisect.powers").offsetHeight;
		$("p.hideme3").css("background", "rgb(241, 241, 241)");
		if(element==30)
		{
			$(".minisect.powers").animate({height:"500px"},500);
		}
		else{
			$(".minisect.powers").animate({height:"30px"},500);
		}
	});	
// -=-=-=-=-=Background Toggling -=-=-=-=-=-=-= //


// -=-=-=-=-=Powers Toggling -=-=-=-=-=-=-= //


});