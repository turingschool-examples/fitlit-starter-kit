const chai = require('chai');
const expect = chai.expect;

const UsersActivityRepo = require('../src/UsersActivityRepo');
const userData = require('../subset_data/users-subset')
const activityData = require('../subset_data/activity-subset')

describe('UsersActivityRepo', () => {

  let usersActivityRepo;
  beforeEach( () => {
    usersActivityRepo = new UsersActivityRepo();
  });

});