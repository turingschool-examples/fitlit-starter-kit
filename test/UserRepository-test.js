import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import hydrationTestData from './hydration-test-data';
import sleepTestData from './sleep-test-data';
import userTestData from './User-test-data'

describe('User Repository', () => {
  let selectedUserInt;
  let selectedUserId;
  let selectedHydrationData;
  let selectedSleepData;
  let fullUserData;
  beforeEach(() => {
  selectedUserInt = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  selectedUserId = new User(userTestData[selectedUserInt]);
  selectedHydrationData = hydrationTestData.find(data => data.userID === selectedUserId.id);
  selectedSleepData = sleepTestData.find(data => data.userID === selectedUserId.id);
  fullUserData = new UserRepository(selectedUserId, selectedHydrationData, selectedSleepData);
  });
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('should have an instance that takes the parameters for selectedUser, selectedHydrationData,selectedSleepData', function () {
    expect(fullUserData).to.be.an.instanceOf(UserRepository);
  })
  it('should have properties of userData, hydrationData, sleepData', function () {
    expect(fullUserData.selectedUserId).to.equal(userTestData[selectedUserInt].id);
    expect(fullUserData.selectedHydrationData).to.equal(hydrationTestData.find(data => data.userID === selectedUserId.id));
    expect(fullUserData.selectedSleepData).to.equal(sleepTestData.find(data => data.userID === selectedUserId.id));
  })
  it('should be able to return the number of ounces drank for a day', function () {
    const ouncesDrank = fullUserData.returnNumOunces()
    expect(ouncesDrank).to.equal(selectedHydrationData.numOunces)
  })
});