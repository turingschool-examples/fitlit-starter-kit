import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import hydrationTestData from './hydration-test-data';
import sleepTestData from './sleep-test-data';
import userTestData from './User-test-data'

describe('User Repository', () => {
  let fullUserData;
  beforeEach(() => {
  fullUserData = new UserRepository(userTestData, hydrationTestData, sleepTestData);
  });
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('should have an instance that takes the parameters for selectedUser,userData, hydrationData,sleepData', function () {
    expect(fullUserData).to.be.an.instanceOf(UserRepository);
  })
  it('should be an array of all user data', function (){
    expect(fullUserData.userData).to.have.lengthOf(3);
    expect(fullUserData.userData).to.deep.equal(userTestData);
  })
  it('should have properties of selectedUser, userData, hydrationData, sleepData', function () {
    expect(fullUserData.userData).to.deep.equal(userTestData);
    expect(fullUserData.hydrationData).to.equal(hydrationTestData);
    expect(fullUserData.sleepData).to.equal(sleepTestData);
  })
  it('should be able to be given an id and return that user\'s data', function () {
    fullUserData.initialize();
    expect(fullUserData.findUser(21)).to.deep.equal({
      "id": 21,
      "name": "Alexandrea Wehner",
      "address": "314 Richmond Islands, Brekkefort WI 71702-6994",
      "email": "Americo_Hammes31@gmail.com",
      "strideLength": 3,
      "dailyStepGoal": 9000,
      "friends": [
        29,
        19
      ],
      "hydrationData": [
        { userID: 21, date: '2019/06/15', numOunces: 23 },
        { userID: 21, date: '2019/06/16', numOunces: 36 }
      ],
      "sleepData": [
        { userID: 21, date: '2019/06/15', hoursSlept: 9.6, sleepQuality: 1 },
        {
          userID: 21,
          date: '2019/06/16',
          hoursSlept: 4.8,
          sleepQuality: 1.3
        }
      ]
    });
  })
  it('should randomly find an id and use that id to select a user',function () {
    const indexNumber = fullUserData.randomizeUser()
    expect(fullUserData.selectedUser).to.deep.equal(userTestData[indexNumber])
  })
  it('should calculate average dailyStepGoals for all users', function () {
    fullUserData.initialize();
    expect(fullUserData.averageSteps()).to.equal(6333);
  })
  it('should have a method to average all users sleep hours data available', function() {
    fullUserData.initialize();
    expect(fullUserData.calculateAllUserAvgSleep('hoursSlept')).to.equal(6.9);
  })
  it('should have a method to average all users sleep quality data available', function() {
    fullUserData.initialize();
    expect(fullUserData.calculateAllUserAvgSleep('sleepQuality')).to.equal(2.1)
  })
});