const chai = require('chai');
const expect = chai.expect;

const User = require("../src/User")
const userData = require("../data/users")

describe('User', () => {

  it('should be a function', () => {
  	let user = new User(userData)
    expect(user.findName('Hunter')).to.equal('Hunter')
  });

});