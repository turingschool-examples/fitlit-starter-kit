const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep');
const userData = require('../subset_data/users-subset')
const sleepData = require('../subset_data/sleep-subset')

describe('UserSleep', () => {

  let userSleep;
  beforeEach( () => {
    userSleep = new UserSleep();
  });

});