const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User.js');
const UserRepository = require('../src/UserRepository');
const Hydration = require('../src/Hydration.js');


describe('Hydration', function () {
  let hydrationDataSample;
  beforeEach(function() {
    hydrationDataSample = {
          "userID": 1,
          "hydrationData": [
            {
              "date": "06/05/2019",
              "numOunces": 64
            },
            {
              "date": "07/05/2019",
              "numOunces": 80
            },
            {
              "date": "08/05/2019",
              "numOunces": 39
            },
            {
              "date": "09/05/2019",
              "numOunces": 40
            },
            {
              "date": "10/05/2019",
              "numOunces": 65
            },
            {
              "date": "11/05/2019",
              "numOunces": 84
            }
          ]}
  });
  it('should be an instance of Hydration', function() {
    const hydration = new Hydration();
    expect(hydration).to.be.an.instanceOf(Hydration);
  });
  it('should store ID passed through', function () {
    const hydration = new Hydration(2);
    expect(hydration.id).to.equal(2);
  });
  it('');
})

