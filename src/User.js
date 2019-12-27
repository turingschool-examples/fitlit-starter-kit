console.log('user class')

class User {
	constructor(data) {
		console.log(data)
    this.id = data.id,
    this.name = data.name,
    this.address = data.address,
    this.email = data.email,
    this.friends = data.friends,
    this.dailyStepGoal = data.dailyStepGoal
	}

}

if (typeof module !== 'undefined') {
  module.exports = User;
}