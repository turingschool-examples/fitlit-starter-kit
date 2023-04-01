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
  
  it('should take in a user ID', function() {
    expect(hydration.hydrationData[0].userID).to.equal(1);
  });

  it('should take in a date', function() {
    expect(hydration.hydrationData[0].date).to.equal("2023/03/24");
  });

  it('should take in a users number of ounces consumed', function() {
    expect(hydration.hydrationData[0].numOunces).to.equal(28);
  });

  it('should be able to average the amount of ounces drank', function() {
    expect(hydration.getAverageOunces(1)).to.equal(51);
    expect(hydration.getAverageOunces(2)).to.equal(60);
  });

  it('should be able to return ounces drank from a specific date', function() {
    expect(hydration.getDailyOunces(1, "2023/03/24")).to.equal(28);
    expect(hydration.getDailyOunces(2, "2023/03/26")).to.equal(88);
  });

  it('should be able to show daily ounces drank for a week', function() {
    expect(hydration.getWeeklyOunces(1, '2023/03/30')).to.deep.equal([
      {'date': '2023/03/30', 'numOunces': '76 ounces drank'},
      {'date': '2023/03/29', 'numOunces': '20 ounces drank'},
      {'date': '2023/03/28', 'numOunces': '97 ounces drank'},
      {'date': '2023/03/27', 'numOunces': '63 ounces drank'},
      {'date': '2023/03/26', 'numOunces': '21 ounces drank'},
      {'date': '2023/03/25', 'numOunces': '50 ounces drank'},
      {'date': '2023/03/24', 'numOunces': '28 ounces drank'}
    ]);
  });
});