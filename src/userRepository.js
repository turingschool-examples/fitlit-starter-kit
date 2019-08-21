class UserRepository {
	constructor(data) {
		this.data = data
		this.currentUser = null
	}
	findUser(index) {
		this.data.forEach(user => {
			if(user.id === index) {
				this.currentUser = user 
			}
		});
		return this.currentUser
	}

	findAverageStep() {
		var sum = 0
		this.data.forEach(user => {
			sum += user["dailyStepGoal"]
		});
		sum = sum / 50
		return sum
	}
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}