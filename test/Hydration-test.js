
import { expect } from 'chai';
import Hydration from '../src/Hydration';
import User from '../src/User';
import UserRepository from '../src/UserRepository';


describe('Hydration', () => {
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  it('should be an instance of Hydration', () => {
    const data = [{
    userID: 1,
    date: "2019/06/15",
    numOunces: 37
  },
  {
    userID: 2,
    date: "2019/06/15",
    numOunces: 75
  },
  {
    userID: 3,
    date: "2019/06/15",
    numOunces: 47
  }];
    const hydration = new Hydration(data);
    expect(hydration).to.be.an.instanceOf(Hydration);
  })
  it('should return a user\'s average daily fluid consumption', () => {
    const data = [{
    userID: 1,
    date: "2019/06/15",
    numOunces: 37
  },
  {
    userID: 2,
    date: "2019/06/15",
    numOunces: 75
  },
  {
    userID: 3,
    date: "2019/06/15",
    numOunces: 47
  },
  {
  userID: 1,
  date: "2019/06/16",
  numOunces: 37
},
  {
    userID: 2,
    date: "2019/06/16",
    numOunces: 75
  },
  {
    userID: 3,
    date: "2019/06/16",
    numOunces: 47
  },
  {
    userID: 1,
    date: "2019/06/17",
    numOunces: 37
    },
  {
  userID: 2,
  date: "2019/06/17",
  numOunces: 75
  },
  {
  userID: 3,
  date: "2019/06/17",
  numOunces: 47
  }];
  const hydration = new Hydration(data);
  expect(hydration.calcAverageOunces(1)).to.equal(37);
  })
})
