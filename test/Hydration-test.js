import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  it('should be a function', () => {
    let hydration = new Hydration(users)
    expect(Hydration).to.be.a('function')
  });

  it.skip('should have an id', () => {
    let hydration = new Hydration(users)
    expect(hydration.id).to.equal(1)
  });

  it.skip('should have a date', () => {
    let hydration = new Hydration(users)
    expect(hydration.date).to.equal(/*mm/dd/yy*/)
  });

  it.skip('should keep track of number of ounces
    water consumed', () => {
    let hydration = new Hydration(users)
    expect(hydration.numOunces).to.equal()
  });

  it.skip('should return ounces water consumed
    on a specific day by user', () => {
    let hydration = new Hydration(users)

    hydration.calculateOuncesWaterConsumedSpecificDay(1)
    hydration.calculateOuncesWaterConsumedSpecificDay(2)

    expect(hydration.numOunces).to.equal(/*ounces consumed by id 1*/)
    expect(hydration.numOunces).to.equal(/*ounces consumed by id 2*/)
  });

  it.skip('should average the ounces of water consumed
    forever by a user', () => {
    let hydration = new Hydration(users)
    hydration.averageOuncesWaterConsumedForever(1)
    hydration.averageOuncesWaterConsumedForever(2)

    expect(hydration.numOunces).to.equal()
    expect(hydration.numOunces).to.equal()
  });

  it.skip('should return a list containing the ounces
    water consumed each day over a seven day period by a
    user', () => {
    let hydration = new Hydration(users)
    hydration.calculateOuncesWaterConsumedWeek(1)
    hydration.calculateOuncesWaterConsumedWeek(1)

    expect(hydration.numOunces).to.equal()
    expect(hydration.numOunces).to.equal()
  });
});
