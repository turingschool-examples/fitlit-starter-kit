class UserRepository {
	constructor(data) {
		this.data = data
	}
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}