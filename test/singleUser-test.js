const chai = require('chai');
const expect = chai.expect;

const User = require("../src/singleUser");
const userData = require("../data/sampleUsers");

describe('User', function(){
  it('should be a function', function() {
    expect(User).to.be.a('function');
  })
  it('should be an instance of User', function() {
    let user = new User();
    expect(user).to.be.an.instanceof(User);
  })
  it('should represent a single user', function() {
    let user = new User(userData);
    expect(user.length).to.equal(1);
  })
  it('should hold properties from sample data file', function() {
    let user = new User();
    expect(user.name).to.equal();
  })

});