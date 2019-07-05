const chai = require("chai")
const expect = chai.expect;
const Sleep = require("../src/sleep");
const sleepData = require("../data/sleep");
const sleepTestData = sleepData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weekSleepTestData = sleepTestData.filter(user => user.userID === 1).slice(-7);
const testUserData = sleepTestData.filter(user => user.userID === 1);
// console.log('test user data', testUserData)
const avgHours = testUserData.reduce((acc, day) => {
    return acc += day.hoursSlept;
}, 0) / testUserData.length;
const parsedAvgHours = avgHours.toFixed(1)
// console.log(parsedAvgHours)

const avgQual = testUserData.reduce((acc, day) => {
    return acc += day.sleepQuality;
}, 0) / testUserData.length;
const parsedAvgQual = avgQual.toFixed(1);

// const uniqueIds = new Set(testUserDaya)



describe('Sleep', function() {

beforeEach(function() {
    sleep = new Sleep(testUserData, 1);
    });

    it('should be a function', function() {
    expect(Sleep).to.be.a('function');
    });

    it('should retun given user data', function() {
    
    expect(sleep.data).to.deep.equal(testUserData);
    });

    it('should return all time average hours', function() {
        expect(sleep.returnAllTimeAvgHours()).to.equal(parsedAvgHours);
    });

    it('should return all time average quality', function() {
        expect(sleep.returnAllTimeAvgQual()).to.equal(parsedAvgQual);
    });

    it('should return hours for given day', function() {
        expect(sleep.returnDayHours('2019/06/20')).to.equal(9.3);
    });

    it('should return quality for given day', function() {
        expect(sleep.returnDayQual('2019/06/20')).to.equal(1.2);
    });

    it('should return week\'s data given a date', function() {
        expect(sleep.returnWeekHours('2019/06/23')).to.deep.equal(weekSleepTestData);
    });

    it('should return most recent day with lowest quality sleep in past week', function() {
        expect(sleep.returnWorstDay('2019/06/23')).to.deep.equal({ userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 });
    });
});