const chai = require('chai')
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../fakeData/fakeSleep');
const Sleep = require('../src/sleep');

describe('Sleep', function () {

  it('should be a function', function () {

    expect(Sleep).to.be.a('function')
  }),

  it('Should be able to find the hours slept for a user based on the date', function() {

    let repo1 = new SleepRepository(fakeSleep, 1)
    let repo2 = new SleepRepository(fakeSleep, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new Sleep(object1, '2019/06/15');
    let user2 = new Sleep(object2, '2019/06/15');

    expect(user1.getHoursPerDay()).to.equal(6.1);
    expect(user2.getHoursPerDay()).to.equal(4.6);
  }),
  
  it('Should be able to find the quality of sleep for a user based on the date', function () {

    let repo1 = new SleepRepository(fakeSleep, 1)
    let repo2 = new SleepRepository(fakeSleep, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new Sleep(object1, '2019/06/15');
    let user2 = new Sleep(object2, '2019/06/15');

    expect(user1.getQualityPerDay()).to.equal(2.2);
    expect(user2.getQualityPerDay()).to.equal(1.2);
  }),

  it('should be able to find a daily hours slept  by date for a given week', function () {

    let repo1 = new SleepRepository(fakeSleep, 1)
    let object = repo1.getUserData()
    let user1 = new Sleep(object, '2019/06/21');
    let user2 = new Sleep(object, '2019/06/23')

    expect(user1.getWeeklyData('hoursSlept')).to.deep.equal([7.8, 9.3, 10.7, 10.4, 8, 4.1, 6.1])
    expect(user2.getWeeklyData('hoursSlept')).to.deep.equal([7.8, 7, 7.8, 9.3, 10.7, 10.4, 8])
  }),

  it('should be able to find a daily sleep quality for a week by a given date', function () {

    let repo1 = new SleepRepository(fakeSleep, 1)
    let object = repo1.getUserData()
    let user1 = new Sleep(object, '2019/06/21');
    let user2 = new Sleep(object, '2019/06/23')

    expect(user1.getWeeklyData('sleepQuality')).to.deep.equal([4.2, 1.2, 1.2, 3.1, 2.6, 3.8, 2.2])
    expect(user2.getWeeklyData('sleepQuality')).to.deep.equal([1.5, 3, 4.2, 1.2, 1.2, 3.1, 2.6])
  })
  it('should be able to find the worst daily sleep quality or hours slept for a week by a given date', function () {

    let repo1 = new SleepRepository(fakeSleep, 1)
    let object = repo1.getUserData()
    let user1 = new Sleep(object, '2019/06/21');
    let user2 = new Sleep(object, '2019/06/23')

    expect(user1.getWorstQuality('sleepQuality')).to.deep.equal({
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    })
  })

})