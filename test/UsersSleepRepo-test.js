const chai = require('chai');
const expect = chai.expect;

const UsersSleepRepo = require('../src/UsersSleepRepo');
const userData = require('../subset_data/users-subset')
const sleepData = require('../subset_data/sleep-subset')

describe('UsersSleepRepo', () => {

  let usersSleepRepo;
  beforeEach( () => {
    usersSleepRepo = new UsersSleepRepo();
  });

});