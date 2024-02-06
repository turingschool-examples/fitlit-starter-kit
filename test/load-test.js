import { expect } from 'chai';

const { loadPage } = require('../src/data/users')
// import usersData from '../src/data/users'
const { default: users } = require('../src/data/users')
import { generateUser, getAverageStepGoal } from '../src/data/load';
let userList

beforeEach(function () {
  userList = users.users
})


describe('check users', () => {
    it('should confirm users exist', function () {
      expect(userList.length).to.be.above(0);
    });
  });

  describe('Page load', () => {
    it('should generate a random user on page load', function () {
      const currentUser = generateUser(Math.floor(Math.random() * 50) + 1)
      expect(currentUser).to.be.an('object')
    });
  });

  describe('get average step goal', () => {
    it('should get the average step goal', function () {
      const averageStepGoal = getAverageStepGoal()
      expect(averageStepGoal).to.be.ok;
    });
  });
