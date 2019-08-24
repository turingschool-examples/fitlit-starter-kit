const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const mockActivityData = require('../mock-data/mock-activity');
const mockUsers = require('../mock-data/mock-users');
const mockActivityUser2Data = require('../mock-data/mock-activity-user2');

let activity;

describe('Activity', () => {

  beforeEach( () => {
    activity = new Activity(mockActivityData, 2, mockUsers); 
    activity.findCurrentUserData();
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should have a parameter to take in all of the activity data', () => {
    expect(activity.allActivityData).to.eql(mockActivityData);
  });

  it('should have a parameter to take in an id for the current user', () => {
    expect(activity.currentUserId).to.eql(2);
  });

  describe('findCurrentUserData', () => {
    it('should return a list of the current user/s activity information', () => {
      expect(activity.currentUserData).to.eql(mockActivityUser2Data);
    });
  });

  describe('findMilesWalkedForSpecificDayOfUser', () => {
    it('should return the miles walked for a specific day', () => {
      expect(activity.findMilesWalkedForSpecificDayOfUser("2019/06/17")).to.equal(1.73);
    });
  });

  describe('findTotalMinutesActiveOnSpecificDayForUser', () => {
      it('should return the total minutes active on a specific day for a user', () => {
          expect(activity.findTotalMinutesActiveOnSpecificDayForUser("2019/06/17")).to.equal(65);
      });
  });


});