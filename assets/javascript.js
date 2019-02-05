// *****************************************************
// logic for the hw2 - part 2
// *****************************************************


// function that will execute the logic
function gettingInput() {

	// creating variables to be used in the future

	var firstNumber;
	var secondNumber;
	var thirdNumber;
	var sum;
	var avg;
	var product;

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

 	if (firstNumber < secondNumber && firstNumber < thirdNumber) {
	 	window.alert(firstNumber + " is the lowest number");
	 }
 	else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
 		window.alert(secondNumber + " is the lowest number");
 	}
 	else if (thirdNumber < firstNumber && thirdNumber < secondNumber) {
 		window.alert(thirdNumber + " is the lowest number");
 	}
	   

}


// *****************************************************
// logic for the hw2 - part 3
// *****************************************************

 
    function numbers() {

      // defining variables
      var number1;
      var number2;
      var number3;
      var number4;
      var number5;
      var positive;
      var negative;
      var zeros;

   


      // getting the integers from the boxes
      firstNumber = document.getElementById("number1").value;
      secondNumber = document.getElementById("number2").value;
      thirdNumber = document.getElementById("number3").value;
      forthNumber = document.getElementById("number4").value;
      fifthNumber = document.getElementById("number5").value;

      // convert the inputs from strings to integers
      firstNumber = parseInt(firstNumber);
      secondNumber = parseInt(secondNumber);
      thirdNumber = parseInt(thirdNumber);
      forthNumber = parseInt(forthNumber);
      fifthNumber = parseInt(fifthNumber);

      // setting initial values to zero
      positive = 0;
      negative = 0;
      zeros = 0;

      if (firstNumber > 0) {
        positive++;
      }
      else if (firstNumber == 0) {
        zeros++;
      }
      else if (firstNumber < 0) {
        negative++
      }
      if (secondNumber > 0) {
        positive++;
      }
      else if (secondNumber == 0) {
        zeros++;
      }
      else if (secondNumber < 0) {
        negative++
      }
      if (thirdNumber > 0) {
        positive++;
      }
      else if (thirdNumber == 0) {
        zeros++;
      }
      else if (thirdNumber < 0) {
        negative++
      }
      if (forthNumber > 0) {
        positive++;
      }
      else if (forthNumber == 0) {
        zeros++;
      }
      else if (forthNumber < 0) {
        negative++
      }
      if (fifthNumber > 0) {
        positive++;
      }
      else if (fifthNumber == 0) {
        zeros++;
      }
      else if (fifthNumber < 0) {
        negative++
      }

      console.log(positive);
      console.log(negative);
      console.log(zeros);

      // window.alert("The number of positive numbers is: " + positive + "\n" + "The number of negative numbers is: " + negative + "\n" + "The number of zeros is: " + zeros + "\n");

      document.getElementById("result").value = "The number of positive numbers is: " + positive + "\n" + "The number of negative numbers is: " + negative + "\n" + "The number of zeros is: " + zeros + "\n"


    }

    // using jquery to fade the textarea

    $(document).ready(function() {
      $("#fade").click(function() {
        $("textarea").fadeTo("slow", 0.15);
      });
    });





// *****************************************************
// logic for the hw2 - extra credit - exchange rates
// *****************************************************



    function exchange(){

		// variables
		var usd;
		var bp;
		var cd;
		var eu;
		var jy;
		var mp;

		// get the value of the input from the user
		usd = document.getElementById("usd").value;

		// convert the value from String to Integeres
		usd = parseInt(usd);

		// get value of the monetary exchange, using max of 2 decimals.

		bp = (usd * 0.77).toFixed(2);
		cd = (usd * 1.31).toFixed(2);
		eu = (usd * 0.88).toFixed(2);
		jy = (usd * 109.97).toFixed(2);
		mp = (usd * 19.04).toFixed(2);

		// get the values in the variables and show in the table

		document.getElementById("bp").value = bp;
		document.getElementById("cd").value = cd;
		document.getElementById("eu").value = eu;
		document.getElementById("jy").value = jy;
		document.getElementById("mp").value = mp;


}



