const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');


describe('User', function() {
    let user;
    let user2;
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
});
