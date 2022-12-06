class UserRepository {
	constructor(data) {
		this.data = data;
	}
	findUser(userID) {
		return this.data.find((user) => {
			return user.id === userID;
		});
	}
	findAvrgStepGoal(data) {
		const calculateAvrgGoal =
			this.data.reduce((accum, data) => {
				return (accum += data.dailyStepGoal);
			}, 0) / data.length;
		return parseInt(calculateAvrgGoal.toFixed(0));
	}
	getRandomIndex(data) {
		return Math.floor(Math.random() * data.length);
	}
	generateRandomUser(data) {
		const id = this.getRandomIndex(data);
       return this.findUser(id)
    }
}

export default UserRepository;

