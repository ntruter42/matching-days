function MatchingDays() {
	let day1 = [];
	let day2 = [];
	let message = '';

	function setDays(dayOne, dayTwo) {
		day1 = dayOne;
		day2 = dayTwo;
	}

	function checkDays(){
		if (day1 === '' && day2 === '') {
			setMessage();
		}
	}

	function isMatch() {
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

	return {
		setDays,
		isMatch,
		colorName,
		checkDays,
		setMessage
	}
}