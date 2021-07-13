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

  it('should be an instance of HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo);
  });

  it('should hold all hydration objects', () => {
    expect(hydrationRepo.hydrationData[0]).to.be.a('object');
    expect(hydrationRepo.hydrationData[0]).to.deep.equal({"userID":1,"date":"2019/06/15","numOunces":37});
    expect(hydrationRepo.hydrationData[2].userID).to.equal(3);
  });

  it('should be able to find stats for a specific user', () => {
    let userHydrationStats = hydrationRepo.getHydrationById(5);

    expect(userHydrationStats).to.be.a('array');
    expect(userHydrationStats[0]).to.deep.equal({ userID: 5, date: '2019/06/15', numOunces: 42 });
  })

  it('should be able to find average ounces consumed per day for any user', () => {
    let avgOunces = hydrationRepo.calculateAvgOuncesPerDay(5);

    expect(avgOunces).to.be.a('number');
    expect(avgOunces).to.equal(65);
  });

  it('should be able to find how many ounces a user consumed on a specific date', () => {
    let dailyOunces = hydrationRepo.getOuncesByDate(10,'2019/06/15');

    expect(dailyOunces).to.be.a('number');
    expect(dailyOunces).to.equal(75);

  });
});
