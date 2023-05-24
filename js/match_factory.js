function MatchingDays() {
	let day1 = '';
	let day2 = '';
	let message = {};

	const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	/* ==================== SETTERS ==================== */

	function setDayOne(dateString) {
		if (dateString === '') {
			day1 = '';
		} else {
			let date = new Date(dateString);
			day1 = dayOfWeek[date.getDay()];
		}
	}

	function setDayTwo(dateString) {
		if (dateString === '') {
			day2 = '';
		} else {
			let date = new Date(dateString);
			day2 = dayOfWeek[date.getDay()];
		}
	}

	/* ==================== GETTERS ==================== */

	function getDayOne() {
		return day1;
	}

	function getDayTwo() {
		return day2;
	}

	/* ==================== COMPARISONS ==================== */

	function checkDays() {
		if (day1 === '' && day2 === '') {
			setMessage('Select <b>Date One</b> and <b>Date Two</b>', 'white-text');
		} else if (day1 === '') {
			setMessage('Select <b>Date One</b>', 'white-text');
		} else if (day2 === '') {
			setMessage('Select <b>Date Two</b>', 'white-text');
		} else if (day1 === day2) {
			setMessage("It's a match!", 'green-text');
		} else if (day1 !== day2) {
			setMessage("No match :(", 'red-text');
		}
	}

	function daysMatch() {
		if (day1 === day2) {
			return true;
		}
		return false;
	}

	function colorName(day) {
		if (day === day1 && day === day2) {
			return 'green';
		} else if (day === day1) {
			return 'blue';
		} else if (day === day2) {
			return 'red';
		}
		return 'transparent';
	}

	/* ==================== MESSAGES ==================== */

	function setMessage(messageContent, color) {
		if (messageContent !== '') {
			message[messageContent] = color;
		}
	}

	function getMessage() {
		let displayMessage = message;
		message = {};

		return displayMessage;
	}

	return {
		setDayOne,
		setDayTwo,
		getDayOne,
		getDayTwo,
		daysMatch,
		colorName,
		checkDays,
		setMessage,
		getMessage
	}
}