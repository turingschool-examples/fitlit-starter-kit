import userData from './data/users.js'
class User{
    constructor(userData){
    this.name = userData.name;
    this.id = userData.id;
    this.address = userData.address;
    this.email = userData.email;
    };
}
export default User;