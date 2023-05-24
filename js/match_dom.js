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
setInputs();
eventSequence();

/* ==================== INPUT ==================== */

function saveInputs() {
	if (matchDayOne.value === '') {
		localStorage.removeItem('date1');
	} else {
		localStorage.setItem('date1', matchDayOne.value);
	}

	if (matchDayTwo.value === '') {
		localStorage.removeItem('date2');
	} else {
		localStorage.setItem('date2', matchDayTwo.value);
	}
}

function setInputs() {
	matchDayOne.value = localStorage.getItem('date1');
	matchDayTwo.value = localStorage.getItem('date2');
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

	// const dayElements = document.querySelectorAll('.day-box');
	// dayElements.forEach(dayBox => {
	// 	dayBox.addEventListener('click', function () {
	// 		TODO:
	// 		search nearest date that matches day of input boxes
	// 		set both input boxes to their nearest dates, respectively
	// 		checkDays()
	// 		updateDisplay()
	// 		displayMessage()
	// 	});
	// });
}

/* ==================== EXTRA FUNCTIONALITY ==================== */

function scrollEvent(event, day) {
	let offset = 0;

	if (day === 1 || day === 3) {
		if (matchDayOne.value === '') {
			matchDayOne.valueAsDate = new Date();
			offset = 1;
		}

		let currentDate = new Date(matchDayOne.value);
		let newDate = new Date(currentDate);
		let scrollAmount = event.deltaY;

		if (scrollAmount < 0) {
			newDate.setDate(currentDate.getDate() + 1);
		} else if (scrollAmount > 0) {
			newDate.setDate(currentDate.getDate() - 1);
		}

		var formattedDate = newDate.toISOString().split('T')[0];
		matchDayOne.value = formattedDate;
	}

	if (day === 2 || day === 3) {
		if (matchDayTwo.value === '') {
			matchDayTwo.valueAsDate = new Date();
		}

		let currentDate = new Date(matchDayTwo.value);
		let newDate = new Date(currentDate);
		let scrollAmount = event.deltaY;

		if (scrollAmount < 0) {
			newDate.setDate(currentDate.getDate() + 1);
		} else if (scrollAmount > 0) {
			newDate.setDate(currentDate.getDate() - 1);
		}

		let formattedDate = newDate.toISOString().split('T')[0];
		matchDayTwo.value = formattedDate;
	}
}

function eventSequence() {
	match.setDayOne(matchDayOne.value);
	match.setDayTwo(matchDayTwo.value);
	match.checkDays();
	updateDisplay();
	displayMessage(match.getMessage());
	saveInputs();
}

/* ==================== EVENT LISTENERS ==================== */

matchDayOne.addEventListener('change', function () {
	eventSequence();
});

matchDayTwo.addEventListener('change', function () {
	eventSequence();
});

matchDayOne.parentNode.addEventListener('wheel', function (event) {
	scrollEvent(event, 1);
	eventSequence();
});

matchDayTwo.parentNode.addEventListener('wheel', function (event) {
	scrollEvent(event, 2);
	eventSequence();
});

matchDisplay.addEventListener('wheel', function (event) {
	scrollEvent(event, 1 + 2);
	eventSequence();
});

matchDayOne.parentNode.addEventListener('auxclick', function () {
	matchDayOne.value = '';
	eventSequence();
});

matchDayTwo.parentNode.addEventListener('auxclick', function () {
	matchDayTwo.value = '';
	eventSequence();
});

matchDisplay.addEventListener('auxclick', function () {
	matchDayOne.value = '';
	matchDayTwo.value = '';
	eventSequence();
});
