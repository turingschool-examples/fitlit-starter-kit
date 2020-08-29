class User {
  constructor(userData) {
    this.userData = userData;
    // console.log("USER", userData)
    //gives back the first user object
  }

  returnFristName(){
    return this.userData.name.split(" ")[0];
  }

  
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
