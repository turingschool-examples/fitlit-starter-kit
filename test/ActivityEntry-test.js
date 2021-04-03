const chai = require('chai');
const expect = chai.expect;

const ActivityEntry = require('../src/ActivityEntry');
const activityData = require('./test-data/activity-data');


describe('ActivityEntry', function() {
  let entry1, entry2, entry3;

  beforeEach(() => {
    entry1 = new ActivityEntry(activityData[0]);
    entry2 = new ActivityEntry(activityData[4]);
    entry3 = new ActivityEntry(activityData[8]);
  });

  it("should be a function", function() {
    expect(ActivityEntry).to.be.a('function');
  });

  it("should be an instance of ActivityEntry", function() {
    expect(entry1).to.be.an.instanceof(ActivityEntry);
    expect(entry2).to.be.an.instanceof(ActivityEntry);
    expect(entry3).to.be.an.instanceof(ActivityEntry);
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

  it("should store the user's number of steps", function() {
    expect(entry1.numSteps).to.equal(3577);
    expect(entry2.numSteps).to.equal(4112);
    expect(entry3.numSteps).to.equal(4547);
  });

  it("should store the user's minutes of activity", function() {    
    expect(entry1.minutesActive).to.equal(140);
    expect(entry2.minutesActive).to.equal(220);
    expect(entry3.minutesActive).to.equal(97);
  });

  it("should store the user's flights of stairs climbed", function() {
    expect(entry1.flightsOfStairs).to.equal(16);
    expect(entry2.flightsOfStairs).to.equal(37);
    expect(entry3.flightsOfStairs).to.equal(5);
  });
});

// NEW CODE