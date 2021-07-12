import { expect } from 'chai';
import { hydrationTestData } from '../src/data/hydration-test-data';
import { userData } from '../src/data/users';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let hydrationData;

  beforeEach(() => {
    hydrationData = hydrationTestData.map(object => new Hydration(object))
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

});
