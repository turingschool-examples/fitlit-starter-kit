import { expect } from 'chai';
import User from '../src/data/User';
import Hydration from '../src/data/Hydration';
import hydrationTestData from '../test/hydration-test-data';


describe('Hydration', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new Hydration(hydrationTestData[0]);
    user2 = new Hydration(hydrationTestData[1]);
    user3 = new Hydration(hydrationTestData[2]);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydration', function() {
    expect(user1).to.be.an.instanceof(Hydration);
  }); 

  it('should be able to take in a user ID', function() {
    expect(user1.userID).to.equal(1);
  });

  it('should be able to take in a date', function() {
    expect(user1.date).to.equal('2023/03/24');
  });

  it('should be able to take in number of ounces of water', function() {
    expect(user1.numOunces).to.equal(28);
  });

  it('should be able to average the amount of ounces drank', function() {
    expect(user1.getAverageOunces(1)).to.equal(51);
    expect(user2.getAverageOunces(2)).to.equal(60);
  });

  


});