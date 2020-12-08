const chai = require('chai');
const expect = chai.expect;
const hydrationTestDataFile = require('../data/hydration-test-data');
const hydrationTestDataArray = hydrationTestDataFile.testHydration;
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  // let users;

  beforeEach(() => {
    // users = userTestData.map(userObject => {
    //   const user = new User(userObject);
    //   return user;
    // });
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  // it('should be an instance of Hydration', () => {
  //   expect(users[0]).to.be.an.instanceof(User);
  // })
  //
  // it('should return a users first name', () => {
  //   expect(users[1].returnFirstName()).to.equal('Tashia');
  // })

})
