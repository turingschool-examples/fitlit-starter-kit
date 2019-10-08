const chai = require('chai');
const expect = chai.expect;

const UserActivity = require('../src/UserActivity');
const userData = require('../subset_data/users-subset')
const activityData = require('../subset_data/activity-subset')

describe('UserActivity', () => {

  let userActivity;
  beforeEach( () => {
    userActivity = new UserActivity();
  });

});