const chai = require('chai');
const expect = chai.expect;

const UserHydration = require("../src/Hydration");
const mockData = require("../data/mock-hydration");

describe("UserHydration", function() {

  let userHydration;
  beforeEach(function() {
    userHydration = new UserHydration(mockData);
  });

  it('should be a function', function() {
    
    expect(UserHydration).to.be.a('function');
  });

  it('should an instance of UserHydration', function() {
    
    expect(userHydration).to.be.an.instanceOf(UserHydration);
  });

  it('should return the average amount drank over several days', function() {
    
    expect(userHydration.getHydrationData(1)).to.be.an('array');
    expect(userHydration.averageDrank(1)).to.be.equal(118);
  });

  it('should return ounces drank based on date', function() {
    
    expect(userHydration.getOuncesByDay(1, "18/05/2019")).to.equal(40);
  });

  it('should return a weeks worth of ounces drank', function() {

    expect(userHydration.getWeeklyOunces(1, "09/05/2019")).to.be.an('array')
  });
});