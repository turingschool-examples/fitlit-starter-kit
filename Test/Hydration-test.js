const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const User = require ('../src/User');
const hydrationTestData = require ('../Test/Hydration-TestingData');

describe('Hydration', () => {
  let hydrate1, hydrate2, hydrate3, hydrate4, hydrate5, hydrate6,
      hydrate7, hydrate8, hydrate9, hydrate10, hydrate11, hydrate12,
      hydrate13, hydrate14;
  
  beforeEach( () => {
    hydrate1 = new Hydration(hydrationTestData[0]);
    hydrate2 = new Hydration(hydrationTestData[1][1]);
    // hydrate3 = new Hydration(hydrationTestData[2]);
    // hydrate4 = new Hydration(hydrationTestData[3]);
    // hydrate5 = new Hydration(hydrationTestData[4]);
    // hydrate6 = new Hydration(hydrationTestData[5]);
    // hydrate7 = new Hydration(hydrationTestData[6]);
    // hydrate8 = new Hydration(hydrationTestData[7]);
    // hydrate9 = new Hydration(hydrationTestData[8]);
    // hydrate10 = new Hydration(hydrationTestData[9]);
    // hydrate11 = new Hydration(hydrationTestData[10]);
    // hydrate12 = new Hydration(hydrationTestData[11]);
    // hydrate13 = new Hydration(hydrationTestData[12]);
    // hydrate14 = new Hydration(hydrationTestData[13]);
    console.log(hydrate2)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydrate', function() {
    expect(hydrate1).to.be.an.instanceof(Hydration);
  });

});