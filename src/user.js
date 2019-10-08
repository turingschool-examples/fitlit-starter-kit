class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.email = data.email;
    this.strideLength = data.strideLength;
    this.dailyStepGoal = data.dailyStepGoal;
    this.friends = data.friends;
  }

  returnFirstName() {
    this.name = this.name.split(' ')
		return this.name[0]
  }
}
if (typeof module !== 'undefined'){
  module.exports = User;
}
