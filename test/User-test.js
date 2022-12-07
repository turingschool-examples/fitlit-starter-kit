const chai = require("chai");
const expect = chai.expect;

import userTestData from './User-test-data';
import User from '../src/User';
import hydrationTestData from './hydration-test-data';


describe('User', function() {

  let selectedUserInt;
  let selectedUser;

  this.beforeEach(() => {
    selectedUserInt = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    selectedUser = new User (userTestData[selectedUserInt]);
  });

  it('should represent a single user', function() {
    expect([selectedUser].length).to.equal(1);
  });

  it('should have a parameter to take in a userData object and instantiate a new User', function() {
    expect(selectedUser).to.be.an.instanceOf(User);
  });

  it('should hold on to the user properties from the data file', function() {
    expect(selectedUser.id).to.equal(userTestData[selectedUserInt].id);
    expect(selectedUser.name).to.equal(userTestData[selectedUserInt].name);
    expect(selectedUser.address).to.equal(userTestData[selectedUserInt].address);
    expect(selectedUser.email).to.equal(userTestData[selectedUserInt].email);
    expect(selectedUser.strideLength).to.equal(userTestData[selectedUserInt].strideLength);
    expect(selectedUser.dailyStepGoal).to.equal(userTestData[selectedUserInt].dailyStepGoal);
    expect(selectedUser.friends).to.deep.equal(userTestData[selectedUserInt].friends);
  });

  it('should have a method to return a user first name', function() {
    const userNameSplitArray = userTestData[selectedUserInt].name.split(' ');
    expect(selectedUser.returnFirstName()).to.equal(userNameSplitArray[0]);
  });
  it('should accept hydration data and store it in an attribute', function(){
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData

    expect(selectedUser.hydrationData).to.deep.equal(hydrationData)
  })
  it('should have a method that returns a single users hydration on a given day', function(){
    selectedUser = new User (userTestData[0]);
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData
    expect(selectedUser.findDaysHydration("2019/06/15")).to.deep.equal({
      userID: 20,
      date: "2019/06/15",
      numOunces: 23
      })
  })
  it('should have a method for returning fluid ounces drank per day for a whole week', function(){
    selectedUser = new User (userTestData[0]);
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData
    expect(selectedUser.findWeekHydration("2020/01/22")).to.deep.equal([
    { userID: 20, date: '2020/01/16', numOunces: 15 },
    { userID: 20, date: '2020/01/17', numOunces: 21 },
    { userID: 20, date: '2020/01/18', numOunces: 20 },
    { userID: 20, date: '2020/01/19', numOunces: 17 },
    { userID: 20, date: '2020/01/20', numOunces: 22 },
    { userID: 20, date: '2020/01/21', numOunces: 32 },
    { userID: 20, date: '2020/01/22', numOunces: 22 }])
  })

  it('should calculate the avg number of hours slept per night from all user data', function() {
    selectedUser = new User (userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.averageSleepHours()).to.equal(6.2)
  });

  it.skip('should calculate the avg sleep quality per night from all user data', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.averageSleepQuality()).to.equal(2.1);
  });

  it.skip('should find the hours slept for a given date', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findDaySleep("2019/06/16")).to.equal(4.3);
  });

  it.skip('should find the sleep quality for a given date', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findDaySleep("2019/06/16")).to.equal(1.4);
  });

  it.skip('should find sleep hours data over any given week', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findWeekSleepHours()).to.deep.equal()
  });
  it.skip('should find sleep quality data for any given week', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findWeekSleepQuality()).to.deep.equal()
  });
});
