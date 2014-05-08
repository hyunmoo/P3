$(document).ready(function(){
	console.log("ready");	
	
	var temp_x = 0; //
	var temp_y = 0;
	var count = 0;

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
		


		$("#xVal").html(x);
		$("#yVal").html(y);
		$("#zVal").html(z);

		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();

		var factor = 3;

		x = Math.round(x * factor);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);

		$("#ball").css("left", Math.round(newX));
		
		if(count === 0){
			temp_x = abs(newX);
			count++;
		}
		
		if(count === 1){
			if(temp_x < abs(newX)){
				$('#video')[0].play();
				count = 0;
			}
		}
		y = Math.round(y * factor);

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);

		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);

		$("#ball").css("top", Math.round(newY));
	}

	window.addEventListener("devicemotion", handleMotionEvent, true);
	
	function check(){
		
	}
	
	

	//$("#ball").css("left", 30);
	//$("#ball").css("top", 30);
});
