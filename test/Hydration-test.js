import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  it('should be a function', () => {
    let hydration = new Hydration(user)
    expect(Hydration).to.be.a('function')
  });

  it.skip('should have an id', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should have a date', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should keep track of number of ounces
    consumed', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should have a date', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should return ounces water consumed
    on a specific day by user', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should average the ounces of water consumed
    forever by a user', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });

  it.skip('should return a list containing the ounces
    water consumed each day over a seven day period by a
    user', () => {
    let hydration = new Hydration(user)
    expect().to.equal()
  });
});
