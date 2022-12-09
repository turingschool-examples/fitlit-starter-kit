const chai = require("chai");
const expect = chai.expect;

import userTestData from './User-test-data';
import User from '../src/User';
import hydrationTestData from './hydration-test-data';
import sleepTestData from './sleep-test-data';

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
  it('should be able to sort hydration and sleep data by date', function () {
    selectedUser = new User (userTestData[0]);
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;
    selectedUser.createUserArrays()
    expect(selectedUser).to.deep.equal({"id": 20,
    "name": "Ora O'Connell",
    "address": "79585 Tania Ports, North Lillie MI 38947-4029",
    "email": "Audreanne.Gulgowski6@yahoo.com",
    "strideLength": 3.4,
    "dailyStepGoal": 8000,
    "friends": [
      2,
      12,
      11,
      33
    ],
    "hydrationData": [
      { userID: 20, date: '2019/06/15', numOunces: 23 },
      { userID: 20, date: '2019/06/16', numOunces: 80 },
      { userID: 20, date: '2020/01/15', numOunces: 22 },
      { userID: 20, date: '2020/01/16', numOunces: 15 },
      { userID: 20, date: '2020/01/17', numOunces: 21 },
      { userID: 20, date: '2020/01/18', numOunces: 20 },
      { userID: 20, date: '2020/01/19', numOunces: 17 },
      { userID: 20, date: '2020/01/20', numOunces: 22 },
      { userID: 20, date: '2020/01/21', numOunces: 32 },
      { userID: 20, date: '2020/01/22', numOunces: 22 },
      { userID: 20, date: '2020/01/23', numOunces: 12 }
    ],
    "sleepData": [
      { userID: 20, date: '2019/06/10', hoursSlept: 7, sleepQuality: 2.8 },
      { userID: 20, date: '2019/06/11', hoursSlept: 6.5, sleepQuality: 2 },
      {
        userID: 20,
        date: '2019/06/12',
        hoursSlept: 8.5,
        sleepQuality: 2.5
      },
      { userID: 20, date: '2019/06/13', hoursSlept: 7.8, sleepQuality: 3 },
      {
        userID: 20,
        date: '2019/06/14',
        hoursSlept: 5.9,
        sleepQuality: 1.6
      },
      {
        userID: 20,
        date: '2019/06/15',
        hoursSlept: 5.9,
        sleepQuality: 1.6
      },
      {
        userID: 20,
        date: '2019/06/16',
        hoursSlept: 4.3,
        sleepQuality: 1.4
      }
    ]
  })
  })
  it('should find the latest date for hydration data', function () {
    selectedUser = new User (userTestData[0]);
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData
    selectedUser.createUserArrays()
    selectedUser.findLatestHydrationDate()
    expect(selectedUser.hydrationData[10].date).to.equal('2020/01/23')
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
  it('should find the latest date for sleep data', function () {
    selectedUser = new User (userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;
    selectedUser.createUserArrays()
    expect(selectedUser.findLatestSleepDate()).to.equal('2019/06/16')
  })
  it('should calculate the avg number of hours slept per night from all user data', function() {
    selectedUser = new User (userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.averageSleepHours()).to.equal(6.6)
  });

  it('should calculate the avg sleep quality per night from all user data', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.averageSleepQuality()).to.equal(2.1);
  });

  it('should find the hours slept for a given date', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findDaySleepHours("2019/06/16")).to.equal(4.3);
  });

  it('should find the sleep quality for a given date', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findDaySleepQuality("2019/06/16")).to.equal(1.4);
  });

  it('should find sleep data over any given week', function() {
    selectedUser = new User(userTestData[0]);
    const sleepData = sleepTestData.filter(data => data.userID === selectedUser.id);
    selectedUser.sleepData = sleepData;

    expect(selectedUser.findWeekSleep("2019/06/16")).to.deep.equal([
    { userID: 20, date: "2019/06/10", hoursSlept: 7, sleepQuality: 2.8 },
    { userID: 20, date: "2019/06/11", hoursSlept: 6.5, sleepQuality: 2 },
    { userID: 20, date: "2019/06/12", hoursSlept: 8.5, sleepQuality: 2.5 },
    { userID: 20, date: "2019/06/13", hoursSlept: 7.8, sleepQuality: 3 },
    { userID: 20, date: "2019/06/14", hoursSlept: 5.9, sleepQuality: 1.6 },
    { userID: 20, date: "2019/06/15", hoursSlept: 5.9, sleepQuality: 1.6 },
    { userID: 20, date: "2019/06/16", hoursSlept: 4.3, sleepQuality: 1.4 }
    ])
  });
});






 
    