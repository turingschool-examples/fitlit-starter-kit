if(typeof module !== 'undefined') {
  userData = require('../data/sample-users');

 }


class User {
  constructor(userId) {
  this.user = (this.findUserData(userId));
  
  }

  findUserData(userId) {
    let currentUser = this.userData.find(function(element){
    return element.id === userId 
    })
    return currentUser; 
    }

  // findFilepath(dataFilePath) {
  //   if(typeof module !== 'undefined') {
  //     return require(dataFilePath)
  //   } else {
  //     return userData;
  //   }
  // }

  returnFirstName() {
  	return this.user.name.split(' ')[0];
  }

}


if(typeof module !== 'undefined') {
module.exports = User;
}