const chai = require('chai');
const expect = chai.expect;

const UserHydration = require("../src/Sleep");
const mocksleepData = require("../data/mock-sleep");
const mockuserData = require('../data/mock-users');
const mockUser = mockuserData[0]
const sleepInfo = mocksleepData.filter(user => {
  return user.userID === mockUser.id
})[0]

describe("Sleep", function() {

  let sleep;
  beforeEach(function() {
    sleep = new Sleep(mockUser, sleepInfo);
  });

  it('should be a function', function() {
    
    expect(Sleep).to.be.a('function');
  });

  it('should an instance of UserHydration', function() {
    
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  // it('should return the average amount drank over several days', function() {
    
  //   expect(userHydration.getHydrationData(1)).to.be.an('array');
  //   expect(userHydration.averageDrank(1)).to.be.equal(118);
  // });

  // it('should return ounces drank based on date', function() {
    
  //   expect(userHydration.getOuncesByDay(1, "18/05/2019")).to.equal(40);
  // });

  // it('should return a weeks worth of ounces drank', function() {

  //   expect(userHydration.getWeeklyOunces(1, "18/05/2019")).to.be.an('array')
  // });
});