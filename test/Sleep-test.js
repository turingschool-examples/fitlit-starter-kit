import { expect } from "chai";
import Sleep from "../src/Sleep";
import sleepRepo from "../src/data/sleep";


describe("Sleep", function () {
    let sleepRepository;
    let userSleep;
    
    beforeEach(() => {
        sleepRepository = sleepRepo
        userSleep = new Sleep(sleepRepository)
    })

    it("it should be a function", function(){
        expect(Sleep).to.be.a("function")
    })

    it("should be an instance of Sleep", function() {
        expect(userSleep).to.be.an.instanceOf(Sleep)
    })

    it("should have property that holds the sleep data", function() {
        expect(userSleep.sleepData).to.deep.equal(sleepRepository)
    })

    it("should calculate average sleep per day", function() {
        expect(userSleep.calcAvgSleepPerDay(1)).to.equal(6.9)
    })

    it("should calculate average sleep quality per day over all time", function() {
        expect(userSleep.calcAvgSleepQualityPerDay(1)).to.equal(3.4)
    })

    it("should return how many hours the user slept for specific day", function() {
        expect(userSleep.returnHoursSleptByDate(1, '2019/06/15')).to.equal(6.1)
    })

    it("should return sleep quality for the user for specific day", function() {
        expect(userSleep.returnSleepQualityByDate(1, '2019/06/15')).to.equal(2.2)
    })

    it("should return hours slept over a given week", function() {
        expect(userSleep.returnHoursSleptByWeek(1, '2019/06/15')).to.deep.equal([ 6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1 ])
        expect(userSleep.returnHoursSleptByWeek(1, '2019/06/21')).to.deep.equal([ 6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1 ])
    })
    it("should return sleep quality each day over given week", function() {
        expect(userSleep.returnSleepQualityByWeek(1, '2019/06/15')).to.deep.equal([ 2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6 ])
        expect(userSleep.returnSleepQualityByWeek(1, '2019/06/21')).to.deep.equal([ 2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6 ])
    })
    it("should return avg sleep quality for all users", function() {
        expect(userSleep.returnAvgSleepForAllUsers()).to.equal(3.1)
    })
})