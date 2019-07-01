// const data = require('../test-data/users-fixtures');


class UserRepository{
  constructor(data){
    this.data = data || {}
  }
  getUserData(specificId) {
    let userData = this.data.find(function(object){
      return object.id === specificId
    })
    console.log(userData)
    return userData
  }
}


module.exports = UserRepository;