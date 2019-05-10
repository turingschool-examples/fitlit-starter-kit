class UserRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }
 
  returnUserData(userID) {
    return this.data.find(el => el.id === userID); 
  }

  averageStepGoal() {
    return this.data.reduce((total, crr) =>
    total + crr.dailyStepGoal ,0)/this.data.length
  }
  mostCommonState(){
    var  states = this.data.map(el => el.address.split(" ").splice(-2,1)[0]);
    var x = 1; var y = 0;  var state;
    states.forEach((el,i) => {
      states.forEach(s =>{
        if (states[i] == s)y++;
        if (x<y){x=y; state = states[i]}
      })
      y=0;
    })
    return state
  }

  returnNamesFromIds(ids) {
    var names = [];
    ids.forEach(i => {
      this.data.forEach(user => {
        if(user.id === i) {names.push(user.name)}
      })
    })
    return names
  }
}


if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = UserRepository;
}