const chai = require("chai");
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');

describe('hydrationRepo', () => {
  	let hydrationRepo;

  	beforeEach(() => {
			hydrationRepo = new HydrationRepo();
		});

  		it.skip('should be a function', () => {
			expect(HydrationRepo).to.be.a('function');
		});

		it.skip('should be an instance of Hydration', () => {
			expect(hydrationRepo).to.be.a.instanceOf(HydrationRepo);
		});

		it.skip('should be able to access the user\'s data', () => {
			expect(hydrationRepo.data.length).to.equal(40)
		});

		it.skip('should be able to access a specific user', () => {
			hydrationRepo.findHydrationData(4)
			expect(hydrationRepo.specificUser.length).to.deep.equal(8)
		})

		it.skip('should return the amount consumed by the user on a date', () => {
			hydrationRepo.findHydrationData(4);
			hydrationRepo.findDailyConsumption('2019/06/18');
			expect(hydrationRepo.specificUser[3].numOunces).to.equal(93)
		});

		it.skip('should return a users weekly average value', () => {
			hydrationRepo.findHydrationData(5)
			expect(hydrationRepo.weeklyConsumptionAverage('2019/06/22')).to.equal(77)
		});

  });