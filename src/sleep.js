class Sleep {
	constructor(data) {
		this.data = data
		this.dates = []
		this.day = null
		this.quality = null
		this.week = []
	}

	findAvg(key) {
		var sum = 0
		this.data.forEach(user => {
			sum += user[key]
		});
		sum = sum / this.data.length
		return sum		
	}

	findSleepDates() {
		this.data.forEach(user => {
			this.dates.push(user["date"])
			})
		return this.dates
	}

	findSleepDay(date) {
		this.data.forEach(user => {
		if(user.date === date) {
			this.day = user.hoursSlept
			return this.day 
			}
		});
	}

	findSleepQuality(date) {
		this.data.forEach(user => {
		if(user.date === date) {
			this.quality = user.sleepQuality
			return this.quality 
			}
		});
	}

	findSleepWeek(index) {
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
		weekDays.push(this.week[i].hoursSlept) 
		}
		return weekDays
	}

	findSleepWeekQuality(index) {
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
		weekDays.push(this.week[i].sleepQuality) 
			}
		return weekDays
	}
  
	compareQualityAverage(index) {
				this.week = []
				let weekDays = []
				if (index + 7 < this.data.length) {
					for (let i = index; i < index + 7; i++){
						// console.log(this.data[i])
						this.week.push(this.data[i])
					}
				} else {
						for (let i = index; i < this.data.length; i++){
							this.week.push(this.data[i])
					}
				}
				for (let i = 0; i < this.week.length; i++) {
				// weekDays.push(this.week[i].date)
				weekDays.push(this.week[i].date) 
				}
				return weekDays
			}		
}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}