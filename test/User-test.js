const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserSub = require('../data/UserSub')

var user1

beforeEach(() => {
  user1 = new User({
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  });
});

describe('User', function () {
  it("should be a function", function() {
    expect(User).to.be.a("function");
  });

  it("should be an instance of UserRepository", function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it("should return user first name given a user ID", function() {
    expect(user1.returnUserFirstName(1)).to.equal('Luisa');
  });

  it("should return user name given a user ID", function() {
    expect(user1.getUserNameFromID(3)).to.equal('Herminia Witting');
  });

  it("should return user name given a user ID", function() {
    expect(user1.getUserNameFromID(1)).to.equal('Luisa Hane');
  });
});