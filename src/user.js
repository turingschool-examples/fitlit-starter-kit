if(typeof module !== 'undefined') {
  userData = require('../data/sample-users');

 }


class User {
  constructor(user) {
  this.user = user;
  }

  
  returnFirstName() {
  	return this.user.name.split(' ')[0];
  }



}


if(typeof module !== 'undefined') {
module.exports = User;
}