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
    return this.name;
  }
  
}


var user1 = {
  "id": 3,
  "name": "Herminia Witting",
  "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
  "email": "Elwin.Tromp@yahoo.com",
  "strideLength": 4.4,
  "dailyStepGoal": 5000,
  "friends": [
    19,
    11,
    42,
    33
  ]
};
var user2 = new User(user1)
console.log(user2.returnFirstName())