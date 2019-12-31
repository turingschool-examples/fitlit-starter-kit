const chai = require('chai');
const expect = chai.expect;

const User = require("../src/User")

describe('User', () => {

  it('should return a name', () => {
  	let user = new User({name: "Hunter"})
    expect(user.findName()).to.equal('Hunter')
  });

});