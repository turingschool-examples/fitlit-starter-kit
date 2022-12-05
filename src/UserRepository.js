class UserRepository {
	constructor(userData) {
		this.data = userData;
	}
	findUser(userID) {
	    return this.data.find((user) => {
		return  user.id === userID;
		});
	}
	findAvrgStepGoal(userData) {
        const calculateAvrgGoal = this.data.reduce((accum, data) => {
            return accum += data.dailyStepGoal;
        }, 0) / userData.length
        return parseInt(calculateAvrgGoal.toFixed(0));
    }
}

export default UserRepository;
