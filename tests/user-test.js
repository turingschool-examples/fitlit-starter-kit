const chai = require('chai');
const expect = chai.expect;

const User = require('../src/users');

describe('User', function() {

  let user;

  beforeEach(function() {
    user = new User(2, 'Jarvis Considine', '30086 Kathryn Port, Ciceroland NE 07273', 'Dimitri.Bechtelar11@gmail.com', 4.5, 5000, [9,18,24,19]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  })

  it('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  })
});












//
