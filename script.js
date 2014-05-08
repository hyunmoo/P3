$(document).ready(function(){
	console.log("ready");	
	$("#ssound")[0].load();
	$("#ssound")[0].play();
	//document.getElementById("ssound").play();
	
	var temp_x = 0;
	var temp_y = 0;
	var count = 0;
	var count1 = 0;
	var a = 0;
	var gradient = function(number2){
		if(Number(number2) === 155){
			$('#im').css({"-webkit-transform": "rotate("+a+"deg)"});
		}else if(Number(number2) < 155){
			a--;
			if(a < -45){
				a= -45;
				$('#im').css({"-webkit-transform": "rotate("+a+"deg)"});
			}else{
				$('#im').css({"-webkit-transform": "rotate("+a+"deg)"});
			}
		}else if(Number(number2) > 155){
			a++;
			if(a > 45){
				a = 45;
				$('#im').css({"-webkit-transform": "rotate("+a+"deg)"});
			}else{
				$('#im').css({"-webkit-transform": "rotate("+a+"deg)"});
			}
		}
			
	}
	 
	
	var check = function (number1){
		if(count === 0){
			temp_x = Math.abs(Number(number1));
			count1++;
			count++;		
			$("#cVal").html("Lose!" + count1);
			
		}else if(count === 1){
			if( temp_x != Math.abs(Number(number1)) ){
				count1++
				$("#aVal").html("Win!" + count1);
				//document.getElementById("ssound").play();
				count++;
				setTimeout(function(){count = 0;},1100);
				
			}
		}

	}

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
		
		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();

		var factor = 3;

		x = Math.round(x * factor);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);
		//$("#tVal").html(Math.abs(Number(newX)));
		check(Number(newX));
		

		$("#ball").css("left", Math.round(newX));

		y = Math.round(y * factor);

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);

		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);

		$("#ball").css("top", Math.round(newY));
		
		gradient(Number(newX));
		$("#xVal").html(newX);
		$("#yVal").html(newY);
		$("#zVal").html(z);

	}

	window.addEventListener("devicemotion", handleMotionEvent, true);

	//$("#ball").css("left", 30);
	//$("#ball").css("top", 30);
});
