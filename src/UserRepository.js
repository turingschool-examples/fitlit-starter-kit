class UserRepository {
    constructor(users) {
        this.users = users;    
    }

getUser(id) { 
 return this.users.find(user => user.id === id)
}


};

module.exports = UserRepository;