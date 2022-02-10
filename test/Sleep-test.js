import { expect } from 'chai';
import UserRepository from '../src/js/UserRepository';
import userTestData from '../src/data/user-test-data';
import sleepTestData from '../src/data/sleep-test-data';
import User from '../src/js/User';
import Sleep from '../src/js/Sleep';


describe('Sleep', () => {
  let users, user, sleep;

  beforeEach('setup test',() => {
    users = new UserRepository(userTestData);
    user = new User(userTestData[0]);
    sleep = new Sleep(sleepTestData, user.id);
    console.log(sleepTestData.length)
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to store sleep data', () => {
    expect(sleep.days).to.be.an('array');
  });

  it('should store the given user\'s sleep data', () => {
    expect(sleep.days).to.be.eql(sleepTestData.slice(2))
  });
})
