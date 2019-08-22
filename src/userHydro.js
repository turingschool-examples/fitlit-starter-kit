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
	findOunceWeek(index) {
		this.week = []
		let weekDays = []
		if (index + 7 < this.data.length) {
			for (let i = index; i < index + 7; i++){
				this.week.push(this.data[i])
			}
		} else {
				for (let i = index; i < this.data.length; i++){
					this.week.push(this.data[i])
			}
		}
		for (let i = 0; i < this.week.length; i++) {
			// weekDays.push(this.week[i].date)
			weekDays.push(this.week[i].numOunces) 
		}
		return weekDays
	}
	findDates() {
		this.data.forEach(user => {
			this.dates.push(user["date"])
		})
		return this.dates
	}
}

if (typeof module !== 'undefined') {
  module.exports = UserHydro;
}