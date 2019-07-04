const chai = require('chai')
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const fakeUsers = require('../fakeData/fakeUsers');
const fakeActivity = require('../fakeData/fakeActivity');
const ActivityRepository = require('../src/activityRepository');

describe('Activity Repository', function() {

    it('should be a function', function() {
        
        expect(ActivityRepository).to.be.a('function');
    });

    it('should find a user by their id', function() {
        const repo1 = new ActivityRepository(fakeActivity, 1);
        const repo2 = new ActivityRepository(fakeActivity, 25);

        expect(repo1.id).to.equal(1)
        expect(repo2.id).to.equal(25)
    });

  
})