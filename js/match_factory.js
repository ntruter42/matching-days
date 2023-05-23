function MatchingDays() {
	let day1 = '';
	let day2 = '';
	let message = {};

	const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function setDayOne(date) {
		day1 = dayOfWeek[date.getDay()];
	}

	function setDayTwo(date) {
		day2 = dayOfWeek[date.getDay()];
	}

	function checkDays() {
		if (day1 === '' && day2 === '') {
			setMessage('Select 2 dates', 'default-color');
		} else if (day1 === '') {
			setMessage('Select second date', 'default-color');
		} else if (day2 === '') {
			setMessage('Select first date', 'default-color');
		}
	}

	function daysMatch() {
		if (day1 === day2) {
			return true;
		}
	}

	function colorName(day) {
		if (day === day1 === day2) {
			return 'green';
		} else if (day === day1) {
			return 'blue';
		} else if (day === day2) {
			return 'red';
		}
		return '';
	}

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
		daysMatch,
		colorName,
		checkDays,
		setMessage,
		getMessage
	}
}