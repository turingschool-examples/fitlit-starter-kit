const chai = require('chai');
const expect = chai.expect;

const mockData = require('../data/mock-activity');
const PhysicalActivity = require('../src/PhysicalActivity');

describe('PhysicalActivity', function() {
   
  let physicalActivity;
  beforeEach(function() {
    physicalActivity = new PhysicalActivity(mockData);
  });

  it('should be a function', function() {

    expect(PhysicalActivity).to.be.a('function');
  });

  it('should make an instance of PhysicalActivity', function() {
    
    expect(physicalActivity).to.be.an.instanceOf(PhysicalActivity);
  });

});