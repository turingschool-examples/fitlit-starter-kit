const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User');
const userData = require('../data-subsets/users-subset');

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User(userData);
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should be able store single user data', () => {
    const user = new User(userData[0]);
    expect(user.userData).to.deep.equal(userData[0]);
  })  

  it('should be able to return user\'s first name only', () => {
    const user = new User(userData[0]);
    console.log();
    expect(user.getFirstName()).to.be.equal('Luisa')
  })
});    
