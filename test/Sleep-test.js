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
        expect(userSleep.calcAvgSleepPerDay(1)).to.equal(7.0)
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

    it("should calculate hours slept over a given week", function() {
        expect(userSleep.returnHoursSleptByWeek(1, '2019/06/15')).to.deep.equal([5.9, 4.6, 9.2, 8.1, 10.7, 7.2, 6.5])
        expect(userSleep.returnHoursSleptByWeek(1, '2019/06/21')).to.deep.equal([5.9, 4.6, 9.2, 8.1, 10.7, 7.2, 6.5])
    })
})