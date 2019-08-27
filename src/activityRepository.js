class ActivityRepository {
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
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}