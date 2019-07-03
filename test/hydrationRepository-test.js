const chai = require('chai')
const expect = chai.expect;

const HydrationRepository = require('../src/hydrationRepository');
const fakeHydration = require('../fakeData/fakeHydration');
const User = require('../src/user');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');


describe('HydrationRepository', function() {

  it('should be a function', function () { 
  
    expect(HydrationRepository).to.be.a('function')
  });

  it('should find a user by their id', function () {

    const repo1 = new HydrationRepository (fakeHydration, 1);
    const repo2 = new HydrationRepository(fakeHydration, 25);

    expect(repo1.id).to.equal(1)
    expect(repo2.id).to.equal(25)
  });

  it('should find the user hydration data by their id', function () {

    const repo1 = new HydrationRepository(fakeHydration, 1);
    const repo2 = new HydrationRepository(fakeHydration, 25);
    const array1 = repo1.getUserData();
    const array2 = repo2.getUserData();

    expect(array1.length).to.equal(9)
    expect(array2.length).to.equal(1)
  });

  it('should find the user hydration average over the lifetime of fitlit usage', function () {

    const repo1 = new HydrationRepository(fakeHydration, 1);
    const repo2 = new HydrationRepository(fakeHydration, 25);
    const array1 = repo1.getUserData();
    const array2 = repo2.getUserData();
  
    const average1 = repo1.getTotalAvg();
    const average2 = repo2.getTotalAvg();

    expect(average1).to.equal(59)
    expect(average2).to.equal(40)
  });
});