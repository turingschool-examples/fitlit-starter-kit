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

		it.only('should be an instance of Hydration', () => {
			expect(activityRepo).to.be.a.instanceOf(ActivityRepo);
        });
        
    });