class User {
  constructor(userData){
  this.userData = userData;
  }

  returnFirstName() {
  	return this.userData.name.split(' ')[0];
  }

}



if(typeof module !== 'undefined') {
module.exports = User;
}