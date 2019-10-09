const expect = require('chai').expect;
const UserRepo = require('../src/UserRepo');
const userData = require('../subData.js/usersSubData');

describe('UserRepo', () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepo(userData);
  });
  
  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should return user object with provided id', () => {
    const user5 = {
      id: 5,
      name: 'Erick Schaden',
      address: '514 Mayert Walk, Jordaneside SC 55023-6523',
      email: 'Vanessa_Gerhold@gmail.com',
      strideLength: 3.1,
      dailyStepGoal: 8000,
      friends: [13, 44, 49, 33, 10]
    }
    const user = userRepo.getSingleUserData(5)
    expect(user).to.deep.equal(user5)
  });

  it('should return the average step goal amongst all users', () => {
    const average = userRepo.findAverageStepGoal()
    expect(average).to.equal(6400)
  });

});