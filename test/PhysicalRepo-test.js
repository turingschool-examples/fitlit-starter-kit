const chai = require('chai');
const expect = chai.expect;

const mockData = require('../data/mock-activity');
const PhysicalRepo = require('../src/PhysicalRepo')

describe('PhysicalRepo', function() {

  let physicalRepo;
  beforeEach(function() {
    physicalRepo = new PhysicalRepo(mockData);
  });

  it('should be a function', function() {
    
    expect(PhysicalRepo).to.be.a('function');
  });

  it('should be an instance of PhysicalRepo', function() {

    expect(physicalRepo).to.be.an.instanceOf(PhysicalRepo);
  });

  it('should return index based off a given date', function() {

    expect(physicalRepo.getDateIndex('06/05/2019')).to.equal(0);
  });

  it('should return the average of all users steps', function() {

    expect(physicalRepo.getAverageSteps('06/05/2019')).to.equal(11208);
  });

  it('should return the average of all users stairs climbed', function () {

    expect(physicalRepo.averageStairsClimbed('06/05/2019')).to.equal(54);
  });

  it('should return the average of all users time active', function () {

    expect(physicalRepo.averageTimeActive('06/05/2019')).to.equal(312);
  });
});