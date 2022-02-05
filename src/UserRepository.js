
class UserRepository {
    constructor(userData) {
        this.userData = userData;
    }

    findID(id) {
        return this.currentUser = (this.userData.find(user => user.id === id));
    }

}

export default UserRepository;