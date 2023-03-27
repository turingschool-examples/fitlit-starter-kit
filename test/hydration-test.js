import { expect } from 'chai';
import Hydration from '../src/classes/Hydration.js';
import hydrationTestData from './hydration-test-data.js';

describe('Hydration', () => {
  let hydration;
  
  beforeEach(() => {
    hydration = new Hydration(hydrationTestData[0]);
  });
  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it('should be instance of Hydration', function () {
    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should hold a userID', function () {
    expect(hydration.id).to.deep.equal(1);
  });

  it('should hold a date', function () {
    expect(hydration.date).to.deep.equal("2023/03/24");
  });
  
  it('should hold a ounces', function () {
    expect(hydration.ounces).to.deep.equal(28);
  });
});