
  usersFilePath = require("../data/hydroSub");


  class Hydration {
    constructor(userID) {
      this.userID = userID,
      this.data = usersFilePath
    }
  
    returnUserData(userID) {
      return this.data.find(element => element.id === userID);
    }
  
  }  
  
  if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }