const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
// need to input or link testing data that we're going to create
describe('UserRepository', () => {
  let allData;

  beforeEach(() => {
    allData = new UserRepository(data);
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(allData).to.be.an.instanceof(UserRepository);
  })

  it('should return a users data given their user ID', () => {
    expect(allData.returnUserData(id)).to.equal();
  })

  it('should calculate the average step goal amongst all users', () => {
    expect(allData.calculateAverageStepGoal()).to.equal();
  })

})
