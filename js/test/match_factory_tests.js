describe('MatchingDays', function () {
	let match;

	beforeEach(function () {
		match = MatchingDays();
	});

	describe('setDayOne, getDayOne', function () {
		it('should set first day to "Saturday" from input date "2023-02-04"', function () {
			match.setDayOne('2023-02-04');

			assert.equal(match.getDayOne(), 'Saturday');
		});

		it('should set first day to "Wednesday" from input date "1995-03-15"', function () {
			match.setDayOne('1995-03-15');

			assert.equal(match.getDayOne(), 'Wednesday');
		});
	});

	describe('setDayTwo, getDayTwo', function () {
		it('should set second day to "Tuesday" from input date "2077-01-01"', function () {
			match.setDayTwo('2077-01-01');

			assert.equal(match.getDayTwo(), 'Friday');
		});

		it('should set second day to "Friday" from input date "1960-06-30"', function () {
			match.setDayTwo('1960-06-30');

			assert.equal(match.getDayTwo(), 'Thursday');
		});
	});

	describe('checkDays, setMessage, getMessage', function () {
		it('should be able to check if no day is selected', function () {
			match.checkDays();

			assert.deepEqual(match.getMessage(), { "Select <b>Date One</b> and <b>Date Two</b>": '' });
		});

		it('should be able to check if only first day is selected and set message to "Select Day Two"', function () {
			match.setDayOne('2023-02-07');
			match.checkDays();

			assert.deepEqual(match.getMessage(), { "Select <b>Date Two</b>": '' });
		});

		it('should be able to check if only second day is selected and set message to "Select Day One"', function () {
			match.setDayTwo('1960-06-30');
			match.checkDays();

			assert.deepEqual(match.getMessage(), { "Select <b>Date One</b>": '' });
		});

		it('should be able to check if days are selected and set message to "It\'s a match" if they match', function () {
			match.setDayOne('2000-05-11');
			match.setDayTwo('2022-10-20');
			match.checkDays();

			assert.deepEqual(match.getMessage(), { "It's a match!": 'green-text' });
		});

		it('should be able to check if days are selected and set message to "No match :(" if they don\'t match', function () {
			match.setDayOne('2000-05-15');
			match.setDayTwo('2022-10-20');
			match.checkDays();

			assert.deepEqual(match.getMessage(), { "No match :(": 'grey-text' });
		});
	});

	describe('daysMatch', function () {
		it('should return true if days match', function () {
			match.setDayOne('1999-08-18');
			match.setDayTwo('2019-09-18');

			assert.equal(match.daysMatch(), true);
		});

		it('should return false if days don\'t match', function () {
			match.setDayOne('1999-08-18');
			match.setDayTwo('2019-09-19');

			assert.equal(match.daysMatch(), false);
		});
	});

	describe('colorName', function () {
		it('should return "green" for both days if they match', function () {
			match.setDayOne('1999-08-18');
			match.setDayTwo('2019-09-18');

			assert.equal(match.colorName(match.getDayOne()), 'green');
			assert.equal(match.colorName(match.getDayTwo()), 'green');
		});

		it('should return "blue" for first day it doesn\'t match second day', function () {
			match.setDayOne('2000-05-15');
			match.setDayTwo('2022-10-20');

			assert.equal(match.colorName(match.getDayOne()), 'blue');
		});

		it('should return "red" for second day it doesn\'t match first day', function () {
			match.setDayOne('1922-02-20');
			match.setDayTwo('2022-02-20');

			assert.equal(match.colorName(match.getDayTwo()), 'red');
		});
	});
});