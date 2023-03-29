import { expect } from 'chai';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
import userTestData from '../src/data/user-test-data.js';
import activityTestData from '../src/data/activity-test-data.js';
import hydrationTestData  from '../src/data/hydration-test-data';
import sleepTestData from '../src/data/sleep-test-data';

describe('User', () => {
  let testUser;
  let hydration;
  let sleep;
  let activity;
  let testUser2
  beforeEach(() => {
    testUser = new User(userTestData.userTestData[0]);

    hydration = new Hydration(1, hydrationTestData.hydrationTestData);
    sleep = new Sleep(1, sleepTestData.sleepTestData);
    activity = new Activity(1, activityTestData.activityTestData);

    testUser.hydrationData = hydration;
    testUser.sleepData = sleep;
    testUser.activityData = activity;

    testUser2 = new User();
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should set all the properties using setData()', () => {
    expect(testUser.id).to.equal(1);
    expect(testUser.name).to.equal("Trystan Gorczany");
    expect(testUser.address).to.equal("9484 Lucas Flat, West Kittymouth WA 67504");
    expect(testUser.email).to.equal("Taurean_Pollich31@gmail.com");
    expect(testUser.strideLength).to.equal(4);
    expect(testUser.dailyStepGoal).to.equal(7000);
    expect(testUser.friends).to.deep.equal([ 5, 43, 46, 11 ]);
  });

  it.skip('should store hydration data', () => {
    // let hydration = new Hydration(hydrationTestData.hydrationTestData)
    expect(testUser.hydrationData).to.deep.equal(hydration);
    expect(testUser.hydrationData.data.length).to.equal(8);
  });

  it.skip('should store sleep data', () => {
    // let sleepy = new Sleep(sleepTestData.sleepTestData)
    expect(testUser.sleepData).to.deep.equal(sleep);
    expect(testUser.sleepData.data.length).to.equal(8);
  });

  it.skip('should store activity data', () => {
    // let activity = new Activity(activityTestData.activityTestData)
    expect(testUser.activityData).to.deep.equal(activity);
    expect(testUser.activityData.data.length).to.equal(8);
  });
  
  it.skip('should be able to retun friends friends names', () => {
    expect(testUser.getFriends()).to.deep.equal(["Brycen"]);
    expect(testUser2.getFriends()).to.equal("Embrace the Solitude");
  });

  it.skip('should get the average step goals of all users', () => {
    expect(testUser.getAverage()).to.equal(6570);
  });

  it.skip('should get the users first name', () => {
    expect(testUser.getName()).to.equal('Trystan');
    expect(testUser2.getName()).to.equal('User');
  });

});