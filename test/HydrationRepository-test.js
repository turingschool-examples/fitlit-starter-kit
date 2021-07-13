import { expect } from 'chai';
import { hydrationTestData } from '../src/data/hydration-test-data';
import HydrationRepo from '../src/HydrationRepository';
import Hydration from '../src/Hydration';

describe('Hydration Repo', () => {
  let hydrationRepo, hydrationData;

  beforeEach(() => {
    hydrationData = hydrationTestData.map(object => new Hydration(object));
    hydrationRepo = new HydrationRepo(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  });


});
