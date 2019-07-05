const chai = require("chai");
const expect = chai.expect;

// var userRepo = require('../src/UserRepo');
const Activity = require('../src/Activity');

describe('activity', () => {
  	let activity;
  	let user;
  	let userRepo;

	beforeEach(() => {
			activity = new Activity();
			user = new User(4); //is user doing soemthing?
			userRepo = new UserRepo();
        });
        
        it.only('should be a function', () => {
			expect(Activity).to.be.a('function');
		});

		it.only('should be an instance of Activity', () => {
			expect(activity).to.be.a.instanceOf(Activity);
        });
        
    });

