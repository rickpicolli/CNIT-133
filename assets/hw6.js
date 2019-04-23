// *****************************************************
// logic for the hw6 - part 1
// *****************************************************



function roundNumberFunc() {
	var textResult = "";
	var outputResult = document.getElementById('roundResult');
	var numInput = document.getElementById('decimalInput').value;
	numInput = parseFloat(numInput);

	textResult = "<p>The number that you chose was " + numInput + "</p>";
	textResult += "<p>Your rounded number is " + Math.round(numInput) + "</p>";

	outputResult.innerHTML = textResult; 

}


function sqrtRootFunc() {
		var textResult2 = "";
		var sqrtInput = document.getElementById("sqrtInput").value;
		sqrtInput = parseFloat(sqrtInput);
		var outputResult2 = document.getElementById("sqrtResult");
		var sqrt = Math.sqrt(sqrtInput);
		var sqrtResult = Math.round(sqrt);

		textResult2 = "<p>The number that you chose was " + sqrtInput + "</p>";
		textResult2 += "<p>Your the square root of the number is " + sqrt + "</p>";
		textResult2 += "<p>Your rounded square root number is " + sqrtResult + "</p>";

		outputResult2.innerHTML = textResult2; 
	}


	function thtFunc() {
			var textResult3 = "";
			var thtInput = document.getElementById("thtInput").value;
			thtInput = parseFloat(thtInput);
			var outputResult3 = document.getElementById("thtResult");
			var tenths = Math.floor(thtInput * 10 + .5) / 10;
			var hundredths = Math.floor(thtInput * 100 + .5) / 100;
			var thousandths = Math.floor(thtInput * 1000 + .5) / 1000;

			console.log("hi");

			textResult3 = "<p>The number that you chose was " + thtInput + "</p>";
			textResult3 += "<p>Your number rounded to the nearest tenth is " + tenths + "</p>";
			textResult3 += "<p>Your number rounded to the nearest hundredth is " + hundredths + "</p>";
			textResult3 += "<p>Your number rounded to the nearest thousandth is " + thousandths + "</p>";

			outputResult3.innerHTML = textResult3; 
		}



// *****************************************************
// logic for the hw6 - part 2
// *****************************************************
			


function charSearch() {
    var character=document.getElementById('character').value;
    character=character.toLowerCase();
    var stringToSearch=
    document.getElementById('textInput').value;
    stringToSearch=stringToSearch.toLowerCase();
    var count=0;

    for (var i=0, len=stringToSearch.length; i<len; i++) {
      if (stringToSearch.charAt(i) == character) {
        count++;
      }
    }
    

    if (count == 0) {
      var noChar='<html>\n';
      noChar += '<head>\n';
      noChar += '<title>ERROR! There was no match for this letter</title>\n';
      noChar += '</head>\n';
      noChar += '<body>\n';
      noChar += '<div><p>'
      noChar += 'There was no match! Letter <strong><span style="color: red">'+ 
      document.getElementById('character').value +
      '</span></strong> not found in text string!</p>';
      noChar += '<input type="button" '+
      'onclick="window.close()" value="Close"></div>';
      noChar += '</body>\n</html>';
  
      var noCharWindow = window.open('', 'hit_result', 
      'left=400,width=300,height=100');
  
      noCharWindow.focus();
      noCharWindow.document.write(noChar);
      noCharWindow.document.close();
    } else {
      document.getElementById('displaySearchCount').value=count;
    }
  }




// *****************************************************
// logic for the hw6 - part 3
// *****************************************************



var myDate = new Date();
var dateToString = myDate.toString();
var dateToLocale = myDate.toLocaleString();
var dateToUTC = myDate.toUTCString();
var diffESTvsUTC = (myDate.getTimezoneOffset()/60)-3;

var dateOutputType;
dateOutputType = '<p class="leading-150">Current DATE using '+
'<span class="mono-type fnt-bold fnt-plusQrtEm">toString()'+
'</span> method: <br>'+'<span class="fnt-bold fnt-clr-navy">'+
dateToString+'</span>';

var dateOutputType;
dateOutputType += '<p class="leading-150">Current DATE '+
'using <span class="mono-type fnt-bold fnt-plusQrtEm">'+
'dateToLocale()</span> method:<br><span '+
'class="fnt-bold fnt-clr-navy">'+dateToLocale+'</span>';

var dateOutputType;
dateOutputType += '<p class="leading-150">Current DATE '+
'using <span class="mono-type fnt-bold fnt-plusQrtEm">'+
'dateToUTC()</span> method:<br>'+'<span '+
'class="fnt-bold fnt-clr-navy">'+dateToUTC+'</span>';

var dateOutputType;
dateOutputType += '<p class="leading-150">The difference '+
'between Eastern Standard Time and UTC is:<br><span '+
'class="fnt-bold fnt-clr-navy">'+diffESTvsUTC+' hours</span>';

document.getElementById('dateOutput').innerHTML=
dateOutputType;
              
          

function splitDigits() {
var userPhoneNum=
  document.getElementById('userPhoneNum').value;
if (userPhoneNum.length != 14) {
  alert('Please input your full phone number.\n'+
  'There should be a total of 10 digits.');
  return;
} else {
  var numSplit=userPhoneNum.split(') ');
  var phoneOnly = numSplit[1];
  var phoneOnlyArray = phoneOnly.split('-');
  var prefix=phoneOnlyArray[0];
  var lineNum=phoneOnlyArray[1];
  var roughAreaCode = numSplit[0];
  var areaCodeArray = roughAreaCode.split('(');
  var areaCode=areaCodeArray.pop();

  var phoneNumText=
  '<br><p>The area code extracted from your phone number '+
  'is: <span class="fnt-bold fnt-clr-navy leading-150">'+
  '<br>'+areaCode+'</span></p>';

  phoneNumText +=
  '<p>The prefix extracted from your phone number is: '+
  '<span class="fnt-bold fnt-clr-navy leading-150"><br>'+
  prefix+'</span></p>';

  phoneNumText +=
  '<p>The line number extracted from your phone number '+
  'is: <span class="fnt-bold fnt-clr-navy leading-150">'+
  '<br>'+lineNum+'</span></p>';
}

	document.getElementById('phoneNumTextOutput').innerHTML=
	phoneNumText;
}