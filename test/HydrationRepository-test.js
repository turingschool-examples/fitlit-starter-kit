const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository.js');
const mockHydrationData = require('../mock-data/mock-hydration-data.js');

let newHydrationUserRepo;

describe('HydrationRepository', function() {
    beforeEach(function() {
        newHydrationUserRepo = new HydrationRepository(mockHydrationData, 2)
    });

    it('should be a function', function() {
        expect(HydrationRepository).to.be.a('function');
    });

    it('should be an instance of HydrationRepository', function() {
        expect(newHydrationUserRepo).to.be.an.instanceof(HydrationRepository)
    });

    it('should store a collection of users hydration data' , function() {
        expect(newHydrationUserRepo.dataset).to.equal(mockHydrationData)
    });

    it('should store the id correlated with the user trying to be accessed', function() {
        expect(newHydrationUserRepo.id).to.equal(2)
    });
      
     describe('findHydrationUser', () =>
        it('should be able to find all instances of the user based on the id it stored', function() {
            expect(newHydrationUserRepo.findHydrationUser()).to.eql(
            [ {
                "userID": 2,
                "date": "2019/06/14",
                "numOunces": 39
              },
              {
                "userID": 2,
                "date": "2019/06/15",
                "numOunces": 75
            },
            {
                "userID": 2,
                "date": "2019/06/16",
                "numOunces": 47
            },
            {
                "userID": 2,
                "date": "2019/06/17",
                "numOunces": 96
              },
              {
                "userID": 2,
                "date": "2019/06/18",
                "numOunces": 61
              },
              {
                "userID": 2,
                "date": "2019/06/19",
                "numOunces": 91
              },
               {
                "userID": 2,
                "date": "2019/06/20",
                "numOunces": 50
              },
              {
                "userID": 2,
                "date": "2019/06/21",
                "numOunces": 50
              }])
        }));

    describe('findHydrationAverage', () =>
        it('should find the average fluid ounces a user consumed per day for all time', function () {
            expect(newHydrationUserRepo.findHydrationAverage()).to.equal(63)
        }));
});
