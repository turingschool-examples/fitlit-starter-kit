const chai = require("chai");
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  	let activityRepo;

  	beforeEach(() => {
			activityRepo = new ActivityRepo();
        });
        
    it.only('should be a function', () => {
			expect(ActivityRepo).to.be.a('function');
		});

		it.only('should be an instance of ActivityRepo', () => {
			expect(activityRepo).to.be.a.instanceOf(ActivityRepo);
        });

    it.only('should have access to all the users activity information', () => {
            expect(activityRepo.activityData.length).to.equal(60);
        });

    it.only('should calculate the average numbers of stairs climbed by users on a specific date', () => {
            expect(activityRepo.findAverageAmtStairsClimbed("2019/06/23")).to.equal(11);
        });

    it.only('should calculate the average numbers of sterps taken by users on a specific date', () => {
            expect(activityRepo.findAverageAmtStepsTaken("2019/06/23")).to.equal(8555);
        });

    it.only('should calculate the average numbers of sterps taken by users on a specific date', () => {
            expect(activityRepo.findAverageMinActive("2019/06/23")).to.equal(174);
        });

        
    });