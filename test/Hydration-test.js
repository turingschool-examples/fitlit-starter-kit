
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
  });

  it('should return a user with ID', () => {
    const userWithID = [{
      userID: 1,
      date: "2019/06/15",
      numOunces: 37
    },
    {
      userID: 1,
      date: "2019/06/15",
      numOunces: 47
    }];
    const hydration = new Hydration(userWithID);
    expect(hydration.findAUser(1)).to.deep.equal(userWithID)
  });

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
});

it('should return 7 days', () => {
    const week =
      [{
        userID: 1,
        date: "2019/06/14",
        numOunces: 75
        },
        {
        userID: 1,
        date: "2019/06/15",
        numOunces: 47
        },
        {
        userID: 1,
        date: "2019/06/16",
        numOunces: 37
        },
        {
        userID: 1,
        date: "2019/06/17",
        numOunces: 75
        },
        {
        userID: 1,
        date: "2019/06/18",
        numOunces: 47
        },
        {
        userID: 1,
        date: "2019/06/19",
        numOunces: 37
        },
        {
        userID: 1,
        date: "2019/06/20",
        numOunces: 75
      }]
    const hydration = new Hydration(week);
    expect(hydration.selectWeek(1)).to.deep.equal(week)
  });

  it('should return how many fluid ounces a user consumed in a specific day', () => {
    const data =  [{
        userID: 3,
        date: "2019/06/15",
        numOunces: 47
      }];
    const hydration = new Hydration(data);
    expect(hydration.findByDate('2019/06/15')).to.equal(47);
  });

  it('should return seven days worth of fluid ounces consumed', () => {
    const data = [{
      userID: 1,
      date: "2019/06/14",
      numOunces: 75
      },
      {
      userID: 1,
      date: "2019/06/15",
      numOunces: 47
      },
      {
      userID: 1,
      date: "2019/06/16",
      numOunces: 37
      },
      {
      userID: 1,
      date: "2019/06/17",
      numOunces: 75
      },
      {
      userID: 1,
      date: "2019/06/18",
      numOunces: 47
      },
      {
      userID: 1,
      date: "2019/06/19",
      numOunces: 37
      },
      {
      userID: 1,
      date: "2019/06/20",
      numOunces: 75
    }]
    const hydration = new Hydration(data);
    expect(hydration.findWeeklyOunces()).to.deep.equal([75, 47, 37, 75, 47,37, 75]);
  })

});
