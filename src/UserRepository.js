import userData from './data/users.js'

class UserRepository {
    constructor(data) {
        this.users = data;
    }
    getUserById(num) {
        const correctUser = userData.find(user => user.id === num)
        return correctUser;
    };
}

export default UserRepository;