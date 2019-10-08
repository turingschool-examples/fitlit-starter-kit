const chai = require('chai');
const expect = chai.expect;

const UserHydration = require('../src/UserHydration');
const userData = require('../subset_data/users-subset')
const hydrationData = require('../subset_data/hydration-subset')

describe('UserHydration', () => {

  let userHydration;
  beforeEach( () => {
    userHydration = new UserHydration(hydrationData);
  });

});
