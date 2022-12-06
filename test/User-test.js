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
  it('should accept hydration data and store it in a key-value pair', function(){
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData

    expect(selectedUser.hydrationData).to.equal(hydrationData)
  })
  it('should have a method that returns a single users hydration on a given day', function(){
    const hydrationData = hydrationTestData.filter( data => data.userID === selectedUser.id)
    selectedUser.hydrationData = hydrationData
  
     expect(selectedUser.findDaysHydration("2019/06/15")).to.equal({
      userID: 20,
      date: "2019/06/15",
      numOunces: 23
      })
  })
  it('')
});

