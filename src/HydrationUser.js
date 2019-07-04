class HydrationUser {
	constructor(array) {
		this.array = array;
	}

	flOzOneDay(dateString) {
		let day = this.array.find(day => day.date === dateString);
    return day.numOunces; 
	}

	flOzOneWeek() {
		let week = this.array.slice(this.array.length - 7, this.array.length);
		return week.map(day => `On ${day.date} you drank ${day.numOunces} ounces of water!`)
	}

}

if (typeof module !== 'undefined') {
  module.exports = HydrationUser;
}