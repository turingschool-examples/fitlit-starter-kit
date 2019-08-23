class Sleep {
		constructor(data) {
			this.data = data
	}
		findAvgSleep() {
			var sum = 0
			this.data.forEach(user => {
				sum += user["hoursSlept"]
			});
			sum = sum / this.data.length
			return sum		
	}
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}