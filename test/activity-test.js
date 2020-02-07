const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const UsersRepository = require('../src/UsersRepository');

describe('Activity', function() {
  let userRepository;
  let activity;

  beforeEach(function() {
    userRepository = new UsersRepository(1);
    activity = new Activity(userRepository);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

});
