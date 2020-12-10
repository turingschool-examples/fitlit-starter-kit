const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/UserRepo');

describe('UserRepo', () => {
  let dataset, userRepo;

  beforeEach(() => {
    dataset = [
      {
        "id": 1,
        "name": "Brian Forbes",
        "address": "123 Blah St, Denver CO, 66666",
        "email": "stuffandthings@gmail.com",
        "strideLength": 2.4,
        "dailyStepGoal": 10000,
        "friends": [
          2,
          3,
          4
        ]
      },
      {
        "id": 2,
        "name": "Eric Campbell",
        "address": "123 SomeOther St, Denver CO, 66666",
        "email": "mainlyetcetera@gmail.com",
        "strideLength": 2.3,
        "dailyStepGoal": 5,
        "friends": [
          1,
          3
        ]
      },
      {
        "id": 3,
        "name": "David Whitaker",
        "address": "124 Random Lane, Denver CO, 66666",
        "email": "damwhitmaybeidontknow@gmail.com",
        "strideLength": 2.6,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          4
        ]
      },
      {
        "id": 4,
        "name": "Travis Rollins",
        "address": "234 Very Random Street, Denver CO, 66666",
        "email": "laskdjfaslkdj@gmail.com",
        "strideLength": 2.1,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          3
        ]
      }
    ]

    userRepo = new UserRepo(dataset);
  });

  it.skip('should store instances of User in a data prop', () => {
    expect(userRepo.data).to.be.an('array');
    expect(userRepo.data.length).to.equal(4);
    expect(userRepo.data[0]).to.be.an.instanceof(User);
    expect(userRepo.data[3]).to.be.an.instanceof(User);
  });

  it.skip('should have a way to return a users data when given a user id', () => {
    expect(userRepo.returnUserData(1)).to.deep.equal(userRepo.data[0]);
    //if this does not work, add a funtion call on this line
    expect(userRepo.data[0].name).to.equal('Brian Forbes');
  });

  it.skip('')
});
