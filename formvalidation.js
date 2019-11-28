const checkName = () => {
	let name = document.getElementById('firstname').value;
	if(name.length===0) {
		document.getElementById('firstnameErr').innerHTML = "*Please Enter your Name*";
	} else {
		document.getElementById('firstnameErr').innerHTML = "";
	}
}

const checkQuantity = () => {
	let number = document.getElementById('quantity').value;
	number = number.trim();
	if (isNaN(number)) {
		document.getElementById('quantityErr').innerHTML = "*Please Enter a Valid Number*";
	} else if (number.length < 1) {
			document.getElementById('quantityErr').innerHTML = "*Please Enter a Number*";
	} else {
			document.getElementById('quantityErr').innerHTML = "";
	}
}

const checkPassword = () => {
	let passwdl = document.getElementById('password').value.length;
	if (passwdl < 8 || passwdl > 25) {
		document.getElementById('passwordErr').innerHTML = "*Password must be between 8 and 25 characters long*";
	} else {
		document.getElementById('passwordErr').innerHTML = "";
	}
}

	// createMenu Function
const createMenu = (startNum, endNum, menuMsg, targetId) => {

	let strMsg = `<option value="none">${menuMsg}</option>`;

	let counter = startNum;
	while ( counter <= endNum)
	{
		strMsg += '<option value="' + counter + '">' + counter + '</option>';
		counter++;
	}

	document.getElementById(targetId).innerHTML = strMsg;
}

	// Checks to make sure an Age is selected
const checkAge = () => {
  let age = document.getElementById('selectage').value;
  if (age === "none") {
      document.getElementById('selectageErr').innerHTML = "*Please select your age*";
  } else {
      document.getElementById('selectageErr').innerHTML = "";
  }
}

const checkLifeStyle = () => {
	let lifeStyle = document.getElementsByName('life-style');
	let strMsg = `You Must Select the Life Style Closest to Yours.`;
	for (var i = 0; i <lifeStyle.length; i++) {
		if (lifeStyle[i].checked === true) {
			strMsg = ``;
			break;
		}
	}
	document.getElementById('life-styleErr').innerHTML = strMsg;
}

const checkWorkout = () => {
	let workout = document.getElementsByName('workout');
	let strMsg = `You Must Select the Workout Routine You Want.`;
	for (var i = 0; i <workout.length; i++) {
		if (workout[i].checked === true) {
			strMsg = ``;
			break;
		}
	}
	document.getElementById('workoutErr').innerHTML = strMsg;
}

const checkBoxes = () => {
	let boxOneChecked = document.getElementById('motivated').checked;
	let boxTwoChecked = document.getElementById('hard-work').checked;
	if (boxOneChecked && boxTwoChecked) {
		strMsg = `Perfect! Lets Get Started!`
	} else if (boxOneChecked || boxTwoChecked) {
			strMsg = `You have to be ready. Please return when you're ready to check both boxes.`
	} else {
			strMsg = `These two boxes need to be checked but only if you're ready!`
	}
	document.getElementById('checkBox').innerHTML = strMsg;
}

const checkTextBox = () => {
	let maxChar = 500;
	let charsLeft = maxChar - document.getElementById('extra-info').value.length;
	if (charsLeft <= maxChar && charsLeft >= 0) {
		let strMsg = `${charsLeft} characters remaining!`
		document.getElementById('extra-infoErr').innerHTML = strMsg;
	} else {
		let strMsg = `You have reached the character limit!`
		document.getElementById('extra-infoErr').innerHTML = strMsg;
		document.getElementById('extra-info').value = document.getElementById('extra-info').value.substr(0, maxChar);
	}
}


const checkAll = () => {
	checkAge()
	checkName()
	checkQuantity()
	checkPassword()
	checkLifeStyle()
	checkWorkout()
	checkTextBox()
	checkBoxes()
}

const setupEvents = () => {
  //document.getElementsById("").onkeyup = check

	createMenu(1,100,'how old are you?','selectage');
	document.getElementById('selectage').onchange = checkAge;
	document.getElementById('firstname').onkeyup = checkName;
	document.getElementById('quantity').onkeyup = checkQuantity;
	document.getElementById('password').onkeyup = checkPassword;
	document.getElementById('life-style').onmouseover = checkLifeStyle;
	document.getElementById('workout').onmouseover = checkWorkout;
	document.getElementById('extra-info').onkeyup = checkTextBox;
	document.getElementById('motivated').onclick = checkBoxes;
	document.getElementById('hard-work').onclick = checkBoxes;
	document.forms[0].onsubmit = checkAll;
}
