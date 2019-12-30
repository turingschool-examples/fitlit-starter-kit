class UserRepository {
	constructor(dataUser, dataActivity) {
    this.dataUser = dataUser,
    this.dataActivity = dataActivity
	}

	locateUserById(userId) {
	  let currentUser = this.dataUser.filter(player => player.id === userId)
		console.log(currentUser)
	}

	averageStepGoal() {
		return this.dataActivity.reduce((acc, step) => {
			acc += step.numSteps
			return acc
		}, 0) / this.dataActivity.length
	}


}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}