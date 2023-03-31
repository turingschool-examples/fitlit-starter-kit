import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import mock from '../src/data/mock';

describe('Sleep', function() {
  let user1, user2, user3;
  beforeEach(function() {
      user1 = new User(mock.users[0])
      user2 = new User(mock.users[1])
      user3 = new User(mock.users[2])
  })  
  it('should be a function', function() {
      expect(Sleep).to.be.a('function')
  });
  it('should be able to calculate average hours slept', function() {
    const sleep = new Sleep(user1.id)
    sleep.findAvgHours()

    expect(sleep.findAvgHours()).to.deep.equal("7.95");

    // it needs to accept a current user
    // find the user id of current user
    // then iterate through sleep data to find all instances of that user id
    // then add the number of hours slept divided by the total instances to get average 
})
})