class User {
	constructor(userData) {
		if (userData) {
			this.id = userData.id,
			this.name = userData.name,
			this.address = userData.address,
			this.email = userData.email,
			this.strideLength = userData.strideLength,
			this.dailyStepGoal = userData.dailyStepGoal,
			this.friends = userData.friends
}}

	findName() {
		let splitName = this.name.split(' ');

		return splitName[0];
	}
}


if (typeof module !== 'undefined') {
  module.exports = User;
}