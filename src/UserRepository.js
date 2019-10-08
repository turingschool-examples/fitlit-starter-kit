class UserRepository{
    constructor(userData) {
        this.userData = userData;
        this.currentUser;
    }

    returnCurrentUser(id) {
    this.currentUser = this.userData.find(user => {
            return user.id === id
        })
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  };