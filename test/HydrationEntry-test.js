const chai = require('chai');
const expect = chai.expect;

const HydrationEntry = require('../src/HydrationEntry');
const hydrationData = require('./test-data/hydration-data');


describe('HydrationEntry', function() {
  let entry1, entry2, entry3;

  beforeEach(() => {
    entry1 = new HydrationEntry(hydrationData[0]);
    entry2 = new HydrationEntry(hydrationData[1]);
    entry3 = new HydrationEntry(hydrationData[2]);
  });

  it("should be a function", function() {
    expect(HydrationEntry).to.be.a('function');
  });

  it("should be an instance of User", function() {
    expect(entry1).to.be.an.instanceof(HydrationEntry);
  });

});