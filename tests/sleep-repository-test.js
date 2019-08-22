const chai = require("chai");
const expect = chai.expect;

const SleepRepository = require('../src/sleep-repository');
const sleepData = require('../data/test-data-sleep');

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
    console.log('sleepRepo', sleepRepo)
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

});
