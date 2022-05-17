import userData from './data/users.js'
class User{
    constructor(userData){
    this.name = userData.name;
    this.id = userData.id;
    };
}
export default User;