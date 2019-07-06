const chai = require("chai");
const expect = chai.expect;

// var userRepo = require('../src/UserRepo');
const Hydration = require('../src/Hydration');

describe('hydration', () => {
  	let hydration;
  	let user;
  	let userRepo;

	beforeEach(() => {
			hydration = new Hydration();
			user = new User(4); //is user doing soemthing?
			userRepo = new UserRepo();
		});

		it.skip('should be a function', () => {
			expect(Hydration).to.be.a('function');
		});

		it.skip('should be an instance of Hydration', () => {
			expect(hydration).to.be.a.instanceOf(Hydration);
		});


		it.skip('should calculate the fluid ounces consumed by a user on a date', () => {
			hydration.calculateOuncesOnDate();
			expect(hydration.hydrationData[3]).to.equal(85)
		});

		it.skip('should calculate the average fluid ounces consumed by a user over 7 days', () => {
			expect(hydration.calulateAverageOunces(4)).to.equal(80.28)				//maybe math round
		});














  });