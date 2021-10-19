import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should store user data', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.id).to.equal(userData.id);
    expect(user.name).to.equal(userData.name);
    expect(user.address).to.equal(userData.address);
    expect(user.email).to.equal(userData.email);
    expect(user.strideLength).to.equal(userData.strideLength);
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
    expect(user.friends).to.equal(userData.friends);
  });

  it('should be able to show User first name', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.displayFirstName()).to.equal('Luisa');
  });
  let userData, hydrationData, user1, user2;
  beforeEach(function(){
    userData = [{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [ 16, 4, 8 ]
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    }];
    hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date":"2019/06/17",
      "numOunces":96
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    }
  ];
    user1 = new User(userData[0])
    user2 = new User(userData[1])

})
  it('should calculate the average daily ounces consumed', function () {
    expect(user1.calculateAvgOunces(hydrationData)).to.equal(67.33)
    expect(user2.calculateAvgOunces(hydrationData)).to.equal(87.33)
  })
  it('should calculate fluid ounces consumed for a specific date', function () {
    expect(user1.findOuncesByDate(hydrationData,"2019/06/15")).to.equal(37)
    expect(user2.findOuncesByDate(hydrationData,"2019/06/15")).to.equal(75)
  })

});
