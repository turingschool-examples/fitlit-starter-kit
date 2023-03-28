import { expect } from 'chai';
import User from '../src/data/User';
import Hydration from '../src/data/Hydration';
import hydrationTestData from '../test/hydration-test-data';


describe('Hydration', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new Hydration(hydrationTestData[0]);
    user2 = new Hydration(hydrationTestData[1]);
    user3 = new Hydration(hydrationTestData[2]);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydration', function() {
    expect(user1).to.be.an.instanceof(Hydration);
  }); 

  it('should be able to take in a user ID', function() {
    expect(user1.userID).to.equal(1);
  });

  it('should be able to take in a date', function() {
    expect(user1.date).to.equal('2023/03/24');
  });

  it('should be able to take in number of ounces of water', function() {
    expect(user1.numOunces).to.equal(28);
  });

  it('should be able to average the amount of ounces drank', function() {
    expect(user1.getAverageOunces(1)).to.equal(51);
    expect(user2.getAverageOunces(2)).to.equal(60);
  });

  it('should be able to return ounces drank from a specific date', function() {
    expect(user1.getDailyOunces(1, "2023/03/24")).to.equal(28);
    expect(user2.getDailyOunces(2, "2023/03/26")).to.equal(88);
  });

  it('should be able to show daily ounces drank for a week', function() {
    expect(user1.getWeeklyOunces(1)).to.deep.equal([
      {'Date': '2023/03/30', 'Number of Ounces Drank': 76},
      {'Date': '2023/03/29', 'Number of Ounces Drank': 20},
      {'Date': '2023/03/28', 'Number of Ounces Drank': 97},
      {'Date': '2023/03/27', 'Number of Ounces Drank': 63},
      {'Date': '2023/03/26', 'Number of Ounces Drank': 21},
      {'Date': '2023/03/25', 'Number of Ounces Drank': 50},
      {'Date': '2023/03/24', 'Number of Ounces Drank': 28},
    ]);
  });
});