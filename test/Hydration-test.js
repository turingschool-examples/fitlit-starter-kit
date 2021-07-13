import { expect } from 'chai';
import { hydrationTestData } from '../src/data/hydration-test-data';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let hydrationData;

  beforeEach(() => {
    hydrationData = hydrationTestData.map(object => new Hydration(object))
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydration', () => {
    expect(hydrationData[0]).to.be.an('object');
    expect(hydrationData[0]).to.be.an.instanceof(Hydration);
  });

  it('should have a user ID', () => {
    expect(hydrationData[1].userID).to.be.a('number');
    expect(hydrationData[1].userID).to.equal(2);
  });

  it('should have a date', () => {
    expect(hydrationData[5].date).to.be.a('string');
    expect(hydrationData[5].date).to.equal('2019/06/15');
  });

  it('should have a number of ounces', () => {
    expect(hydrationData[10].numOunces).to.be.a('number');
    expect(hydrationData[10].numOunces).to.equal(51);
  });
});
