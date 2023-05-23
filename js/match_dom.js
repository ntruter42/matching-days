//  TEMPLATE SETUP
let daySource = document.querySelector('.day-template').innerHTML;
let dayTemplate = Handlebars.compile(daySource);

// INPUT ELEMENTS
const matchDayOne = document.querySelector('#match-date1');
const matchDayTwo = document.querySelector('#match-date2');

// OUTPUT ELEMENTS
const matchDisplay = document.querySelector('#match-display');
const messageBox = document.querySelector('#match-message-box');
const messageText = messageBox.querySelector('#match-message');

// FUNTIONALITY
let messageTimeout = null;

// INITIALIZATION
const match = MatchingDays();
match.checkDays();
clearInputs();
updateDisplay();
displayMessage(match.getMessage());

/* ==================== INPUT ==================== */

function clearInputs() {
	matchDayOne.value = '';
	matchDayTwo.value = '';
}


/* ==================== MESSAGES ==================== */

function displayMessage(msgObj) {
	clearTimeout(messageTimeout);

	if (msgObj) {
		for (const message in msgObj) {
			const color = msgObj[message];

			messageText.innerHTML = message;
			messageBox.className = '';
			if (color !== '') {
				messageBox.classList.add(color);
			}
		}
	} else {
		messageBox.classList.add('hidden');
	}
}

/* ==================== DISPLAY ==================== */

function updateDisplay() {
	let dayTa = {
		days: [
			{ day: "Monday", color: match.colorName('Monday') },
			{ day: "Tuesday", color: match.colorName('Tuesday') },
			{ day: "Wednesday", color: match.colorName('Wednesday') },
			{ day: "Thursday", color: match.colorName('Thursday') },
			{ day: "Friday", color: match.colorName('Friday') },
			{ day: "Saturday", color: match.colorName('Saturday') },
			{ day: "Sunday", color: match.colorName('Sunday') }
		]
	};

	matchDisplay.innerHTML = dayTemplate(dayTa);
}

/* ==================== EVENT LISTENERS ==================== */

matchDayOne.addEventListener('change', function () {
	match.setDayOne(matchDayOne.value);
	match.checkDays();
	updateDisplay();
	displayMessage(match.getMessage());
});

matchDayTwo.addEventListener('change', function () {
	match.setDayTwo(matchDayTwo.value);
	match.checkDays();
	updateDisplay();
	displayMessage(match.getMessage());
});

matchDayOne.parentNode.addEventListener('wheel', function (event) {
	event.preventDefault();

	var currentDate = new Date(matchDayOne.value);
	var newDate = new Date(currentDate);
	var scrollAmount = event.deltaY;

	if (scrollAmount > 0) {
		newDate.setDate(currentDate.getDate() + 1);
	} else if (scrollAmount < 0) {
		newDate.setDate(currentDate.getDate() - 1);
	}

	var formattedDate = newDate.toISOString().split('T')[0];
	matchDayOne.value = formattedDate;

	match.setDayOne(matchDayOne.value);
	match.checkDays();
	updateDisplay();
	displayMessage(match.getMessage());
});

matchDayTwo.parentNode.addEventListener('wheel', function (event) {
	event.preventDefault();

	var currentDate = new Date(matchDayTwo.value);
	var newDate = new Date(currentDate);
	var scrollAmount = event.deltaY;

	if (scrollAmount > 0) {
		newDate.setDate(currentDate.getDate() + 1);
	} else if (scrollAmount < 0) {
		newDate.setDate(currentDate.getDate() - 1);
	}

	var formattedDate = newDate.toISOString().split('T')[0];
	matchDayTwo.value = formattedDate;

	match.setDayTwo(matchDayTwo.value);
	match.checkDays();
	updateDisplay();
	displayMessage(match.getMessage());
});