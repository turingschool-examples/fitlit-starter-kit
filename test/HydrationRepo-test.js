const chai = require("chai");
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');

describe('hydrationRepo', () => {
  	let hydrationRepo;

  	beforeEach(() => {
			hydrationRepo = new HydrationRepo();
		});

  		it.only('should be a function', () => {
			expect(HydrationRepo).to.be.a('function');
		});

		it.only('should be an instance of Hydration', () => {
			expect(hydrationRepo).to.be.a.instanceOf(HydrationRepo);
		});

		it.only('should be able to access the user\'s data', () => {
			expect(hydrationRepo.data.length).to.equal(40)
		});

		it.only('should be able to access a specific user', () => {
			hydrationRepo.findHydrationData(4)
			expect(hydrationRepo.specificUser.length).to.deep.equal(8)
		})

		it.only('should return the amount consumed by the user on a date', () => {
			hydrationRepo.findHydrationData(4);
			hydrationRepo.findDailyConsumption('2019/06/18');
			expect(hydrationRepo.specificUser[3].date).to.equal('2019/06/18')
		});

  });