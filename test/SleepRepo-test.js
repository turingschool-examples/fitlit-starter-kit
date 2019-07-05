const chai = require("chai");
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');

describe('sleepRepo', () => {
  	let sleepRepo;

  	beforeEach(() => {
			sleepRepo = new SleepRepo();
        });

        it.only('should be a function', () => {
			expect(SleepRepo).to.be.a('function');
		});

		it.only('should be an instance of a SleepRepo', () => {
			expect(sleepRepo).to.be.a.instanceOf(SleepRepo);
        });

        it.only('should have access to all the users sleep information', () => {
            expect(sleepRepo.sleepData.length).to.equal(55);
        });

        it.only('should calculate the quality of sleep for all users', () => {
            expect(sleepRepo.findAverageSleep()).to.equal(3);
        });

        it.only('')


        
    });
        