import { expect } from 'chai';
import Hydration from '../src/data/Hydration';
import hydrationTestData from '../test/hydration-test-data';


describe('Hydration', function() {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(hydrationTestData)
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  }); 

  it('should be able to average the amount of ounces drank', function() {
    expect(hydration.getAverageOunces(1)).to.equal(51);
    expect(hydration.getAverageOunces(2)).to.equal(60);
  });

  it('should be able to return ounces drank from a specific date', function() {
    expect(hydration.getDailyOunces(1, "2023/03/24")).to.equal(28);
    expect(hydration.getDailyOunces(2, "2023/03/26")).to.equal(88);
  });

  // it('should be able to show daily ounces drank for a week', function() {
  //   expect(hydration.getWeeklyOunces(1)).to.deep.equal([
  //     {'2023/03/30': '76 ounces'},
  //     {'2023/03/29': '20 ounces'},
  //     {'2023/03/28': '97 ounces'},
  //     {'2023/03/27': '63 ounces'},
  //     {'2023/03/26': '21 ounces'},
  //     {'2023/03/25': '67 ounces'},
  //     {'2023/03/24': '87 ounces'}
  //   ]);
  // });
});