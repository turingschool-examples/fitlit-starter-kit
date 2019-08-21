class UserHydro {
	constructor(data) {
		this.data = data
		this.day = null
		this.dates = []
		this.week = []

	}
	findAvgOunce() {
	var sum = 0
	this.data.forEach(user => {
		sum += user["numOunces"]
		});
	sum = sum / this.data.length
	return sum		
	}
	findOunceDay(date) {
		this.data.forEach(user => {
			if(user.date === date) {
			this.day = user.numOunces
			return this.day
			}
		});
	}
	findOunceWeek() {
	for(var i = 0; i === 7; i++){
		this.week.push(this.data[i])
		}
	}
	findDates() {
		this.data.forEach(user => {
			this.dates.push(user["date"])
		})
	}
	populateDates(){
		this.dates.forEach(date => {
			console.log(typeof date)
			return date
		})
	}
}

if (typeof module !== 'undefined') {
  module.exports = UserHydro;
}