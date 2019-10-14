const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');


describe('User', function() {
    let user;
    beforeEach(() => {
      user = new User({
        'id': 1,
        'name': 'Luisa Hane',
        'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
        'email': 'Diana.Hayes1@hotmail.com',
        'strideLength': 4.3,
        'dailyStepGoal': 10000,
        'friends': [
          16,
          4,
          8
        ]
      })
    })
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
  it('should be an instance of user', function() {
    expect(user).to.be.an.instanceof(User);
  });
  it('should have an id', function() {
    expect(user.id).to.equal(1);
  });
  it('should have a name', function() {
    expect(user.name).to.equal('Luisa Hane');
  });
  it('should have an address', function() {
    expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });
  it('should have an email address', function() {
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
  });
  it('should have a stride length', function() {
    expect(user.strideLength).to.equal(4.3);
  });
  it('should have a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(10000);
  });
  it('should have friends', function() {
    expect(user.friends).to.deep.equal([16, 4, 8])
  });
  it('should have a default ouncesAverage of 0', function() {
    expect(user.ouncesAverage).to.equal(0);
  });
  it('should have a default ouncesRecord of []', function() {
    expect(user.ouncesRecord).to.deep.equal([]);
  });
  it('should have a default hoursSleptAverage of 0', function() {
    expect(user.hoursSleptAverage).to.equal(0);
  });
  it('should have a default sleepQualityAverage of 0', function() {
    expect(user.sleepQualityAverage).to.equal(0);
  });
  it('should have a default sleepHoursRecord', function() {
    expect(user.sleepHoursRecord).to.deep.equal([]);
  });
  it('should have a default sleepQualityRecord of []', function() {
    expect(user.sleepQualityRecord).to.deep.equal([]);
  });
  it('should have a default activityRecord of []', function() {
    expect(user.activityRecord).to.deep.equal([]);
  });
  it('should have a default value of [] for accomplishedDays', function() {
    expect(user.accomplishedDays).to.deep.equal([]);;
  });
  it('getFirstName should return the first name of the user', function () {
    expect(user.getFirstName()).to.equal('LUISA');
  });
  it('should have a method that shows the last week of water', function() {
    user.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 4}
    ]
    expect(user.addDailyOunces("2019/06/15")).to.equal(2);
  });
  describe('updateSleep', function() {
    beforeEach(() => {
      user.updateSleep("2019/06/15", 7, 4.7);
      user.updateSleep("2019/07/14", 6, 4);
      user.updateSleep("2019/08/04", 8, 5.4);
    })
    it('should update user\'s quality of sleep record', function() {
      expect(user.sleepQualityRecord.length).to.equal(3);
    });
    it('should update user\'s average hours of sleep', function() {
      expect(user.hoursSleptAverage).to.equal('7.0');
    });
    it('should update user\'s average quality of sleep', function() {
      expect(user.sleepQualityAverage).to.equal('4.7');
    });
  })
  it('calculateAverageHoursThisWeek should calculate average sleep hours for week before given date', function() {
    user.sleepHoursRecord = [{date: "2019/09/22", hours: 9.6}, {date: "2019/09/21", hours: 8.2}, {date: "2019/09/20", hours: 9.9}, {date: "2019/09/19", hours: 4.2}, {date: "2019/09/18", hours: 9.5}, {date: "2019/09/17", hours: 7.8}, {date: "2019/09/16", hours: 10.2}, {date: "2019/09/15", hours: 5.7}, {date: "2019/09/14", hours: 8.8}, {date: "2019/09/13", hours: 4.6}, {date: "2019/09/12", hours: 5.3}];
    expect(user.calculateAverageHoursThisWeek('2019/09/21')).to.equal('7.9');
  });
  it('should have a method that return the highest climbing record', function() {
    user.activityRecord = [{flightsOfStairs: 10}, {flightsOfStairs: 15}, {flightsOfStairs: 17}]
    expect(user.findClimbingRecord()).to.equal(17)
  });
  it('should have a method that calculates daily calories burned', function() {
    user.activityRecord = [{date: "2019/09/16", activityRecord: 78}, {date: "2019/09/17", minutesActive: 100}, {date: "2019/09/17", minutesActive: 20}];
    expect(user.calculateDailyCalories("2019/09/17")).to.equal(912)
  });
  it('calculateAverageMinutesActiveThisWeek should calculate the average minutes active', function() {
    user.activityRecord = [{date: "2019/09/18", minutesActive: 78}, {date: "2019/09/17", minutesActive: 100}, {date: "2019/09/16", minutesActive: 20}, {date: "2019/09/15", minutesActive: 21}, {date: "2019/09/14", minutesActive: 35}, {date: "2019/09/13", minutesActive: 37}, {date: "2019/06/12", minutesActive: 42}, {date: "2019/09/11", minutesActive: 18}, {date: "2019/09/10", minutesActive: 16}, {date: "2019/09/09", minutesActive: 81}];
    expect(user.calculateAverageMinutesActiveThisWeek("2019/09/17")).to.equal('39')
  });
  it('updateAccomplishedDays should create an array of good days', function() {
    user.updateActivities({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
    user.updateActivities({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 14684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
    expect(user.accomplishedDays.length).to.equal(1);
  })
  it('findTrendingDays should find 3+ days with positive trend', function() {
    user.activityRecord = [{
      "date": "2019/06/20",
      "steps": 3}, {"date": "2019/06/29",
      "steps": 2}, {"date": "2019/06/28",
      "steps": 1}, {"date": "2019/06/27",
      "steps": 4}, {"date": "2019/06/26",
      "steps": 3}, {"date": "2019/06/25",
      "steps": 1}, {"date": "2019/06/24",
      "steps": 2}, {"date": "2019/06/23",
      "steps": 11}, {"date": "2019/06/22",
      "steps": 10}, {"date": "2019/06/21",
      "steps": 9}, {"date": "2019/06/20",
      "steps": 8}, {"date": "2019/06/19",
      "steps": 11}, {"date": "2019/06/18",
      "steps": 10}];
    expect(user.findTrendingDays()).to.deep.equal(['You had a 4 day streak from 2019/06/19 - 2019/06/22!', 'You had a 3 day streak from 2019/06/24 - 2019/06/26!', 'You had a 3 day streak from 2019/06/27 - 2019/06/29!']);;
  });
});
