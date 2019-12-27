const chai = require('chai');
const expect = chai.expect;

describe('User', () => {

  let user;
  beforeEach(() => {
    let userID = 0;
    user = new User(userData)
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

});