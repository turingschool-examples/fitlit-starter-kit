const chai = require("chai");
const expect = chai.expect;

const SleepRepository = require('../src/sleep-repository');
const sleepData = require('../data/test-data-sleep');
const sleepData2 = require('../data/test-data-sleep-two');

describe('SleepRepository', function() {
  let sleepRepo;

  beforeEach(() => {
    sleepRepo = new SleepRepository(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it('should store all users sleep data', () => {
    expect(sleepData.length).to.deep.equal(33);
  });

  it('should find a specific user based on id', () => {
    expect(sleepRepo.getUserSleepInfo(1)).to.deep.equal([
  { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
  { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
  { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
  {
    userID: 1,
    date: '2019/06/18',
    hoursSlept: 10.4,
    sleepQuality: 3.1
  },
  {
    userID: 1,
    date: '2019/06/19',
    hoursSlept: 10.7,
    sleepQuality: 1.2
  },
  { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
  { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
  { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
  { userID: 1, date: '2019/06/23', hoursSlept: 7.8, sleepQuality: 1.5 },
  { userID: 1, date: '2019/06/24', hoursSlept: 8, sleepQuality: 1.3 },
  { userID: 1, date: '2019/06/25', hoursSlept: 5.1, sleepQuality: 3.7 }
]
);
  })

  it('should return average sleep quality of all users', () => {
    sleepRepo = new SleepRepository(sleepData);

    expect(sleepRepo.getUsersAvgSleepQual()).to.equal(3);
  })

  it('should return all users within one week', () => {
    sleepRepo2 = new SleepRepository(sleepData2);

    expect(sleepRepo2.getUsersForAWeek("2019/06/21")).to.deep.equal([
  { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
  { userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7 },
  {
    userID: 3,
    date: '2019/06/15',
    hoursSlept: 10.8,
    sleepQuality: 4.7
  },
  { userID: 4, date: '2019/06/15', hoursSlept: 5.4, sleepQuality: 3 },
  { userID: 5, date: '2019/06/15', hoursSlept: 4.1, sleepQuality: 3.6 },
  { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
  { userID: 2, date: '2019/06/16', hoursSlept: 7.5, sleepQuality: 3.8 },
  {
    userID: 3,
    date: '2019/06/16',
    hoursSlept: 10.7,
    sleepQuality: 3.4
  },
  { userID: 4, date: '2019/06/16', hoursSlept: 8.3, sleepQuality: 4.5 },
  { userID: 5, date: '2019/06/16', hoursSlept: 7.4, sleepQuality: 2.4 },
  { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
  { userID: 2, date: '2019/06/17', hoursSlept: 5.7, sleepQuality: 3 },
  { userID: 3, date: '2019/06/17', hoursSlept: 5.3, sleepQuality: 4.9 },
  { userID: 4, date: '2019/06/17', hoursSlept: 5.7, sleepQuality: 1.1 },
  {
    userID: 5,
    date: '2019/06/17',
    hoursSlept: 10.5,
    sleepQuality: 3.7
  },
  {
    userID: 1,
    date: '2019/06/18',
    hoursSlept: 10.4,
    sleepQuality: 3.1
  },
  {
    userID: 2,
    date: '2019/06/18',
    hoursSlept: 10.8,
    sleepQuality: 3.2
  },
  { userID: 3, date: '2019/06/18', hoursSlept: 9.8, sleepQuality: 2.6 },
  { userID: 4, date: '2019/06/18', hoursSlept: 5.9, sleepQuality: 2.5 },
  { userID: 5, date: '2019/06/18', hoursSlept: 5.2, sleepQuality: 4.1 },
  {
    userID: 1,
    date: '2019/06/19',
    hoursSlept: 10.7,
    sleepQuality: 1.2
  },
  { userID: 2, date: '2019/06/19', hoursSlept: 9.6, sleepQuality: 2.5 },
  { userID: 3, date: '2019/06/19', hoursSlept: 7.2, sleepQuality: 3.4 },
  { userID: 4, date: '2019/06/19', hoursSlept: 5.2, sleepQuality: 2.3 },
  { userID: 5, date: '2019/06/19', hoursSlept: 4.8, sleepQuality: 3.4 },
  { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
  {
    userID: 2,
    date: '2019/06/20',
    hoursSlept: 10.1,
    sleepQuality: 2.4
  },
  { userID: 3, date: '2019/06/20', hoursSlept: 9.4, sleepQuality: 1.2 },
  { userID: 4, date: '2019/06/20', hoursSlept: 8.3, sleepQuality: 1.9 },
  {
    userID: 5,
    date: '2019/06/20',
    hoursSlept: 10.1,
    sleepQuality: 3.5
  },
  { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
  { userID: 2, date: '2019/06/21', hoursSlept: 4.3, sleepQuality: 4.8 },
  { userID: 3, date: '2019/06/21', hoursSlept: 8.9, sleepQuality: 3.7 },
  {
    userID: 4,
    date: '2019/06/21',
    hoursSlept: 10.6,
    sleepQuality: 2.7
  },
  { userID: 5, date: '2019/06/21', hoursSlept: 9.6, sleepQuality: 4.1 }
  ]);
  })

  it('should return a new array with key value pairs of userIDs keys and sleepQuality values', () => {
    sleepRepo2 = new SleepRepository(sleepData2);

    sleepRepo2.getUsersForAWeek("2019/06/21");

    expect(sleepRepo2.getUserAndSleepQualArray("2019/06/21")).to.deep.equal({
  '1': [
    2.2, 3.8, 2.6,
    3.1, 1.2, 1.2,
    4.2
  ],
  '2': [
    4.7, 3.8,   3,
    3.2, 2.5, 2.4,
    4.8
  ],
  '3': [
    4.7, 3.4, 4.9,
    2.6, 3.4, 1.2,
    3.7
  ],
  '4': [
      3, 4.5, 1.1,
    2.5, 2.3, 1.9,
    2.7
  ],
  '5': [
    3.6, 2.4, 3.7,
    4.1, 3.4, 3.5,
    4.1
  ]
  })
  })

  it('should return an array of users with avg sleep qualities for a week over 3', () => {
    sleepRepo2 = new SleepRepository(sleepData2);

    sleepRepo2.getUsersForAWeek("2019/06/21");

    sleepRepo2.getUserAndSleepQualArray("2019/06/21");

    expect(sleepRepo2.getUsersWithSleepQualAvgAboveThree("2019/06/21")).to.deep.equal([ '2', '3', '5' ]);

  })

});
