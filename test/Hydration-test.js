import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from "../src/data/sample-hydration";

describe('Hydration', () => {
  let hydrate1;
  let hydrate2;
  beforeEach(() => {
    hydrate1 = new Hydration(1, hydrationData);
    hydrate2 = new Hydration(2, hydrationData);
  })
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })
  it ('should take in a user\'s id', () => {
    expect(hydrate1.id).to.equal(1);
  })
  it ('should calculate the daily ounces per user', () => {
    expect(hydrate1.ouncesPerDay('2019/06/15')).to.equal(37);
    expect(hydrate2.ouncesPerDay('2019/06/15')).to.equal(75);
  })
  it ('should calculate weekly ouces per user', () => {
    expect(hydrate1.getDailyOuncesByWeek(0, 2)).to.deep.equal([37, 69]);
    expect(hydrate2.getDailyOuncesByWeek(0, 2)).to.deep.equal([75, 91]);
  })
  it('should calculate the avg ounces per user', () => {
    expect(hydrate1.getAvgOunces(hydrationData)).to.deep.equal(59);
    expect(hydrate2.getAvgOunces(hydrationData)).to.deep.equal(83);
  })
})