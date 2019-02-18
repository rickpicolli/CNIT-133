



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