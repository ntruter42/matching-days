//  TEMPLATE SETUP
let templateSource = document.querySelector('.day-template').innerHTML;
let dayTemplate = Handlebars.compile(templateSource);

// INPUT ELEMENTS
const matchDayOne = document.querySelector('#match-date1');
const matchDayTwo = document.querySelector('#match-date2');

// OUTPUT ELEMENTS
const matchDisplay = document.querySelector('#match-display');

const messageBox = document.querySelector('#match-message-box');
const messageContent = messageBox.querySelector('#match-message');

// FUNTIONALITY
let messageTimeout = null;

// INITIALIZATION
const match = MatchingDays();
displayMessage();
updateDisplay();

/* ==================== MESSAGES ==================== */

function displayMessage(msgObj) {
	clearTimeout(messageTimeout);

	if (msgObj) {
		for (const message in msgObj) {
			const color = msgObj[message];

			messageBox.className = '';
			messageText.innerHTML = message;
			messageBox.classList.add(color);

			messageTimeout = setTimeout(function () {
				messageBox.classList.add('hidden');
			}, message.length * 100);
		}
	} else {
		console.log("displayMessage() received a n empty message");
	}
}

/* ==================== DISPLAY ==================== */

function updateDisplay() {
	let dayTa = {
		days: [
			{ day: "Monday", color: match.colorName("Monday") },
			{ day: "Tuesday", color: match.colorName("Tuesday") },
			{ day: "Wednesday", color: match.colorName("Wednesday") },
			{ day: "Thursday", color: match.colorName("Thursday") },
			{ day: "Friday", color: match.colorName("Friday") },
			{ day: "Saturday", color: match.colorName("Saturday") },
			{ day: "Sunday", color: match.colorName("Sunday") }
		]
	};

	matchDisplay.innerHTML = dayTemplate(dayTa);
}

/* ==================== EVENT LISTENERS ==================== */