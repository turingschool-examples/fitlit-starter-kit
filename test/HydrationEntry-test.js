const chai = require('chai');
const expect = chai.expect;

const HydrationEntry = require('../src/HydrationEntry');
const hydrationData = require('./test-data/hydration-data');


describe('HydrationEntry', function() {
  let entry1, entry2, entry3;

  beforeEach(() => {
    entry1 = new HydrationEntry(hydrationData[0]);
    entry2 = new HydrationEntry(hydrationData[4]);
    entry3 = new HydrationEntry(hydrationData[8]);
  });

  it("should be a function", function() {
    expect(HydrationEntry).to.be.a('function');
  });

  it("should be an instance of HydrationEntry", function() {
    expect(entry1).to.be.an.instanceof(HydrationEntry);
    expect(entry2).to.be.an.instanceof(HydrationEntry);
    expect(entry3).to.be.an.instanceof(HydrationEntry);

  });

  it("should store a user's id", function() {
    expect(entry1.id).to.equal(1);
    expect(entry2.id).to.equal(2);
    expect(entry3.id).to.equal(3);
  });

  it("should store an entry date", function() {
    expect(entry1.date).to.equal("2019/06/15");
    expect(entry2.date).to.equal("2019/06/16");
    expect(entry3.date).to.equal("2019/06/17");
  });

  it("should store the number of ounces drank", function() {
    expect(entry1.numOunces).to.equal(37);
    expect(entry2.numOunces).to.equal(91);
    expect(entry3.numOunces).to.equal(28);
  });
});

// NEW CODE