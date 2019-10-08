const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository.js')
const data = require('../data/users.js');


describe('UserRepo', function() {
  it('Should be a function', function() {
    let userRepository = new UserRepository(data)
  });

  it('Should find a user', function() {
    let userRepository = new UserRepository(data)
    expect(userRepository.users.length).to.equal(50)
    console.log(userRepository.currentUser)
    expect(userRepository.findUser(4)).to.eql({
      id: 4,
      name: 'Mae Connelly',
      address: '28926 Schinner Islands, Turnermouth NE 23720-3230',
      email: 'Marcos_Pollich@hotmail.com',
      strideLength: 3.1,
      dailyStepGoal: 4000,
      friends: [ 48, 7, 44, 8 ]
    });
  });

  it('Should find average step goal of all users', function() {
    let userRepository = new UserRepository(data)
    expect(userRepository.calculateAverageStepGoal()).to.equal(6700);
    // console.log(userRepository.calculateAverageStepGoal());
  });
});