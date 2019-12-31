class User {
	constructor(data) {
    this.id = data.id,
    this.name = data.name,
    this.address = data.address,
    this.email = data.email,
    this.friends = data.friends,
    this.dailyStepGoal = data.dailyStepGoal
	}

	findName() {
		return this.name
	}

}


if (typeof module !== 'undefined') {
  module.exports = User;
}