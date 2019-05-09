
class User {
  constructor(userData) {
  this.userData = userData;
  
  }

  // findFilepath(dataFilePath) {
  //   if(typeof module !== 'undefined') {
  //     return require(dataFilePath)
  //   } else {
  //     return userData;
  //   }
  // }

  returnFirstName() {
  	return this.userData.name.split(' ')[0];
  }

}


if(typeof module !== 'undefined') {
module.exports = User;
}