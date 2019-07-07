const chai = require('chai')
const expect = chai.expect;

const HydrationRepository = require('../src/hydrationRepository');
const fakeHydration = require('../fakeData/fakeHydration');
const Hydration = require('../src/hydration');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');

describe('Hydration', function() {

  it('should be a function', function () {

    expect(HydrationRepository).to.be.a('function')
  });

  it('should be able to find a daily water intake by date', function() {

    let repo1 = new HydrationRepository(fakeHydration, 1)
    let repo2 = new HydrationRepository(fakeHydration, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new Hydration (object1, "2019/06/21")
    let user2 = new Hydration (object2, "2019/06/15")

    expect(user1.getDailyOunces()).to.equal(50)
    expect(user2.getDailyOunces()).to.equal(40) 
  });

  it('should be able to get the average of a users weekly water intake', function() {
    let repo1 = new HydrationRepository(fakeHydration, 1)
    let repo2 = new HydrationRepository(fakeHydration, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new Hydration(object1, )
    let user2 = new Hydration(object2, )

    expect(user1.getWeeklyOunces()).to.eql(
          [96, 61, 91, 50, 50, 43, 39])
    expect(user2.getWeeklyOunces()).to.eql([40]) 
  })
})