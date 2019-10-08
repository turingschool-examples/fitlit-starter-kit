class UserRepository{
    constructor(userData) {
        this.userData = userData;
        this.currentUser;
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  };