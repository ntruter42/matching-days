function MatchingDays() {
	let day1 = [];
	let day2 = [];
	let message = '';

	function setDayOne(date) {
		day1 = date;
	}

	function setDayTwo(date) {
		day2 = date;
	}

	function checkDays(){
		if (day1 === '' && day2 === '') {
			setMessage('Select 2 dates');
		} else if (day1 === '') {
			setMessage('Select second date');
		} else if (day2 === '') {
			setMessage('Select first date');
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
		return 'transparent';
	}

	function setMessage(messageContent) {
		message = messageContent;
	}

	function getMessage() {
		return message;
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