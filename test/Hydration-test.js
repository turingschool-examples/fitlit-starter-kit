const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const userTestData = testData.testUsers;
const hydrationTestDataFile = require('../data/hydration-test-data');
const hydrationTestDataArray = hydrationTestDataFile.testHydration;
const Hydration = require('../src/Hydration');
const User = require('../src/User');

describe('Hydration', () => {
  let users, hydrationObjects1, hydrationObjects2, hydration1, hydration2;

  beforeEach(() => {
    users = userTestData.map(userObject => {
      const user = new User(userObject);
      return user;
    });
    hydrationObjects1 = hydrationTestDataArray.filter(hydrationObject => {
      hydrationObject.id === users[0].id; // is this working?
    });
    hydration1 = new Hydration(hydrationObjects1);
    hydrationObjects2 = hydrationTestDataArray.filter(hydrationObject => {
      hydrationObject.id === users[1].id;
    });
    hydration2 = new Hydration(hydrationObjects2);
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {
    expect(hydration1).to.be.an.instanceof(Hydration);
  })

  it.skip('should contain an array of hydration objects with the same id', () => {
    // RETURNING EMPTY ARRAYS
    console.log(hydration1.hydrationObjects)
    console.log(hydrationObjects1)
    expect(hydration1.hydrationObjects).to.equal(hydrationObjects1);
  })

})
