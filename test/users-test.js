const chai = require('chai');
const expect = chai.expect;

const userData = data.testData;
const User = require('./test/users.js');

describe('User', function() {
  beforeEach(function() {
    const user = new User(userData[0]);
  });

  it('should be a function', function() {
    expect(user).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an id', function() {
    expect(user.id).to.equal(1)
  })

  it('should have a name', function() {
    expect(user.name).to.equal('Hanna Hudson')
  })

  it('should have an address', function() {
    expect(user.address).to.equal('1234 Fake Street, Townsville PR 00000-0000')
  })

  it('should have a stride length' function() {
    expect(user.strideLength).to.equal(3.7)
  })

  it('should have a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(2000)
  })

  it('should have some friends', function(){
    expect(user.friends).to.equal([1, 111])
  })
})