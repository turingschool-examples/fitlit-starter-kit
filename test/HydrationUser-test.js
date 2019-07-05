const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository.js');
const mockHydrationData = require('../mock-data/mock-hydration-data.js')
const HydrationUser = require('../src/HydrationUser.js')

let newHydrationUserInfo, newHydrationUserRepo, newHydrationUser

describe ('HydrationUser', function() {
    beforeEach(function () {
        newHydrationUserRepo = new HydrationRepository(mockHydrationData, 2)
        newHydrationUserInfo = newHydrationUserRepo.findHydrationUser()
        newHydrationUser = new HydrationUser(newHydrationUserInfo) 
    })

    it('should be a function', function() {
        expect(HydrationUser).to.be.a('function');
    });

    it('should be an instance of HdrationUser', function () {
        expect(newHydrationUser).to.be.an.instanceof(HydrationUser)
    });

    it('should store the list of of dates related to the user/s info', function() {
        expect(newHydrationUser.array).to.eql(newHydrationUserInfo)
    });

    describe('flOzOneDay', function() {
        it('should return the number of ounces drank on one specific date', function() {
            expect(newHydrationUser.flOzOneDay('2019/06/16')).to.equal(47)
        })
    })

    describe('flOzOneWeek', function() {
        it('should return the number of ounces consumed over the course of a week', function() {
            expect(newHydrationUser.flOzOneWeek()).to.eql([
                'On 2019/06/15 you drank 75 ounces of water!',
                'On 2019/06/16 you drank 47 ounces of water!',
                'On 2019/06/17 you drank 96 ounces of water!',
                'On 2019/06/18 you drank 61 ounces of water!',
                'On 2019/06/19 you drank 91 ounces of water!',
                'On 2019/06/20 you drank 50 ounces of water!',
                'On 2019/06/21 you drank 50 ounces of water!'
              ])      
        })
    })

})