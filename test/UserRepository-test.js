import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import hydrationTestData from './hydration-test-data';
import sleepTestData from './sleep-test-data';
import userTestData from './User-test-data'

describe('User Repository', () => {
  let selectedUserInt;
  let selectedUser;
  let userData
  let hydrationData;
  let sleepData;
  let fullUserData;
  beforeEach(() => {
  selectedUserInt = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  userData = userTestData
  selectedUser = new User(userTestData[selectedUserInt]);
  hydrationData = hydrationTestData;
  sleepData = sleepTestData;
  fullUserData = new UserRepository(selectedUser,userData, hydrationData, sleepData);
  });
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('should have an instance that takes the parameters for selectedUser, selectedHydrationData,selectedSleepData', function () {
    expect(fullUserData).to.be.an.instanceOf(UserRepository);
  })
  it('should have the full user-data as a parameter', function (){
    expect(fullUserData.userData).to.deep.equal(userTestData);
  })
  it('should have properties of selectedUser, hydrationData, sleepData', function () {
    expect(fullUserData.selectedUser).to.deep.equal(userTestData[selectedUserInt]);
    expect(fullUserData.userData).to.deep.equal(userTestData)
    expect(fullUserData.hydrationData).to.equal(hydrationTestData);
    expect(fullUserData.sleepData).to.equal(sleepTestData);
  })
  it('should be able to be given an id and return that user\'s data', function () {
    expect(fullUserData.findUserId()).to.equal(fullUserData.selectedUser.id)
  })
  it('should calculate average dailyStepGoals for all users', function () {
    let total = 0
    userTestData.forEach(user => 
        total += user.dailyStepGoal   
    )
    let averageStepGoal = total/userTestData.length
    expect(fullUserData.averageSteps()).to.equal(averageStepGoal)
  })
});