// creating variables to be used in the future

var firstNumber;
var secondNumber;
var thirdNumber;
var sum;
var avg;
var product;

// function that will execute the logic
function gettingInput() {

	// getting the integers from the boxes
	firstNumber = document.getElementById("number1").value;
	secondNumber = document.getElementById("number2").value;
	thirdNumber = document.getElementById("number3").value;

	// convert the inputs from strings to integers
	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);
	thirdNumber = parseInt(thirdNumber);

	//calculating the sum, average and product of the three integers
	sum = firstNumber + secondNumber + thirdNumber;
	avg = (sum / 3)
	product = firstNumber * secondNumber * thirdNumber;

	window.alert("The sum is " + sum + "\n" + "The average is " + avg + "\n" + "The product is " + product + "\n");

	if (firstNumber > secondNumber && firstNumber > thirdNumber) {
	 	window.alert(firstNumber + " is the largest number");
	 }
 	else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
 		window.alert(secondNumber + " is the largest number");
 	}
 	else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
 		window.alert(thirdNumber + " is the largest number");
 	}
	   

}
