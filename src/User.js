class User {
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.address = obj.address;
    this.email = obj.email;
    this.strideLength = obj.strideLength;
    this.dailyStepGoal = obj.dailyStepGoal;
    this.friends = obj.friends
  }

  giveName() {
    return this.name.split(' ')[0];
  }

}


module.exports = User;