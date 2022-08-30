import { expect } from 'chai';
import User from '../src/user';
import Hydration from '../src/Hydration';
import hydrationData from "../src/data/sample-hydration";

describe('Hydration', () => {
  let hydrate1;
  let hydrate2;
  
  beforeEach(() => {
    hydrate1 = new Hydration(hydrationData)
    // hydrate2 = new Hydration(2, sampleHydration)

  })
  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })
  it ('should take in a user\'s id', () => {
    expect(hydrate1.id).to.equal(1)
  })
  it ('should have a date', () => {
    expect(hydrate1.date).to.equal()

  })
 
})
//

