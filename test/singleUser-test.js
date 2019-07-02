const chai = require('chai');
const expect = chai.expect;

const User = require("../src/singleUser");
const userData = require("../data/sampleUsers");
const randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1)
const randomUser = userData.filter(user => user.id === randomIndex)

describe('User', function() {

  it('should be a function', function() {
    expect(User).to.be.a('function');
  })

  it('should be an instance of User', function() {
    let user = new User(randomUser);
    expect(user).to.be.an.instanceof(User);
  })

  it('should represent a single user', function() {
    let user = new User(randomUser);
    expect(randomUser.length).to.equal(1);
  })

  it('should hold properties from sample data file', function() {
    let user = new User(randomUser);
    expect(user.name).to.equal(randomUser.name);
    expect(user.address).to.equal(randomUser.address);
    expect(user.email).to.equal(randomUser.email);
    expect(user.strideLength).to.equal(randomUser.strideLength);
    expect(user.dailyStepGoal).to.equal(randomUser.dailyStepGoal);
    expect(user.friends).to.equal(randomUser.friends);
  })
});