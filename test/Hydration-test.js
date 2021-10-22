import { expect } from 'chai';
import Hydration from '../src/Hydration'


describe('Hydration', () => {
  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  })
  it('should store data', function () {
    const hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    }, ];
    const hydration = new Hydration(hydrationData);
    expect(hydration.hydrationData).to.deep.equal(hydrationData);
  });
});
