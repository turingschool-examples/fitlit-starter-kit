class SleepRepository {
	constructor(data) {
		this.data = data
		this.currentUser = []
	}

	findUserID(index) {
		this.data.forEach(user => {
			if(user.userID === index) {
				this.currentUser.push(user)
			}
		});
		return this.currentUser
	}
	findAverageQuality() {
		var sum = 0
		this.data.forEach(user => {
			sum += user["sleepQuality"]
		})
		sum = sum / this.data.length
		return sum
	}
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}