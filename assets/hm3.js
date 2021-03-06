// *****************************************************
// logic for the hw3 - part 1
// *****************************************************



function grades() {
	var n1, n2, n3, n4, favg, letter;

	n1 = document.getElementById('number1').value;
	n2 = document.getElementById('number2').value;
	n3 = document.getElementById('number3').value;
	n4 = document.getElementById('number4').value;

	if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || n1 > 100 || n2 > 100 || n3 > 100 || n4 > 100) {
		text = "The inputs should be between 0 and 100";
	} else {
		favg = (.5 * n1) + (.2 * n2) + (.2 * n3) + (.1 * n4);

		if (favg >= 0 && favg < 60) {
			letter = "F";
			result = "Student must retake the course"
		} else if (favg >= 60 && favg < 70) {
			letter = "D";
			result = "Student must retake the course"
		} else if (favg >= 70 && favg < 80) {
			letter = "C";
			result = "Congratulations!"
		} else if (favg >= 80 && favg < 90) {
			letter = "B";
			result = "Congratulations!"
		} else {
			letter = "A";
			result = "Congratulations!"
		}

		document.getElementById("favg").value = favg;
		document.getElementById("grade").innerHTML = letter;

	}

	document.getElementById("msg").innerHTML = text;
	
}


// JQUERY //

$(document).ready(function(){
  $("#showhide").click(function(){
    $("#instructions").slideToggle("slow");
  });
});




// *****************************************************
// logic for the hw3 - part 2
// *****************************************************


function sales() {
	var total1, total2, total3, total4, me1, me2, me3, me4, name, item1, item2, item3, item4, value1, value2, value3, value4, toe;

	item1 = parseInt(document.getElementById("item1").value);
	item2 = parseInt(document.getElementById("item2").value);
	item3 = parseInt(document.getElementById("item3").value);
	item4 = parseInt(document.getElementById("item4").value);


	if (isNaN(item1) || isNaN(item2) || isNaN(item3) || isNaN(item4) || item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {

		text = "The inputs should be a positive number";
	} else {


	value1 = 239.99;
	value2 = 129.75;
	value3 = 99.95;
	value4 = 350.89;

	total1 = (item1 * value1).toFixed(2);
	total2 = (item2 * value2).toFixed(2);
	total3 = (item3 * value3).toFixed(2);
	total4 = (item4 * value4).toFixed(2);

	me1 = (total1*0.09).toFixed(2);
	me2 = (total2*0.09).toFixed(2);
	me3 = (total3*0.09).toFixed(2);
	me4 = (total4*0.09).toFixed(2);

	toe = (200 + +me1 + +me2 + +me3 + +me4).toFixed(2);

	document.getElementById("total1").innerHTML = total1;
	document.getElementById("total2").innerHTML = total2;
	document.getElementById("total3").innerHTML = total3;
	document.getElementById("total4").innerHTML = total4;

	document.getElementById("me1").innerHTML = me1;
	document.getElementById("me2").innerHTML = me2;
	document.getElementById("me3").innerHTML = me3;
	document.getElementById("me4").innerHTML = me4;


	document.getElementById("toe").innerHTML = toe;

	}

	document.getElementById("msg").innerHTML = text;
}




// *****************************************************
// logic for the hw3 - part 3
// *****************************************************






function celsius() {

			var celsius, fahrenheit;

			fahrenheit = parseInt(document.getElementById("fahrenheit").value);
				
			celsius = 5/9 * (fahrenheit - 32);

			document.getElementById("result2").innerHTML = celsius;

		}

		function fahrenheit() {

			var celsius, fahrenheit;

			celsius = parseInt(document.getElementById("celsius").value);

			fahrenheit = (9/5 * celsius) + 32;

			document.getElementById("result1").innerHTML = fahrenheit;

		}



// *****************************************************
// logic for the hw3 - part 3
// *****************************************************




var number1, number2;

function equations() {


	number1 = Math.floor(Math.random() * 10);
	number2 = Math.floor(Math.random() * 10);


	document.getElementById("number1").innerHTML = number1;

	document.getElementById("number2").innerHTML = number2;



}

function studentAnswer() {


answer = document.getElementById("answer").value;

answer = parseInt(answer);

	if (answer == number1 * number2) {
		document.getElementById("returnanswer").innerHTML = "You got it right! congratulations!";
		equations();
	} else {
		document.getElementById("returnanswer").innerHTML = "That's not the right answer. Please try again" ;
	}

}





// *****************************************************
// logic for the hw4 - part 1
// *****************************************************






window.onload = function partOne() {
	var sum = 0;
	var product = 1;

	for (x = 5; x<= 20; x+=3) {
		sum += x;
		product *= x;

		document.getElementById("p1a").innerHTML = "5 + 8 + 11 + 14 + 17 + 20 = " + sum;
		document.getElementById("p1b").innerHTML = "5 * 8 * 11 * 14 * 17 * 20 = "  + product;

	}

	var sum2 = 0;
	var product2 = 1;
	var y = 3;

	while (y <= 31) {
		sum2 += y;
		product2 *= y;
		y = y + 4;

		document.getElementById("p2a").innerHTML = "3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = " + sum2;
		document.getElementById("p2b").innerHTML = "3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = "  + product2;
	
}


};

$(function() {
	$("draggable").draggable();
});

