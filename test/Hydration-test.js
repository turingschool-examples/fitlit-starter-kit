import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/sample-hydrationData';
import User from '../src/User'

describe('Hydration', () => {
  let user1;
  let user2;
  let hydrate1;
  let hydrate2;

  beforeEach( () => {
    user1 = new User({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]});
    user2 = new User({id: 2, name: 'Jarvis Considine', address: '30086 Kathryn Port, Ciceroland NE 07273', email: 'Dimitri.Bechtelar11@gmail.com', strideLength: 4.5, dailyStepGoal: 5000, friends: [9, 18, 24, 19]});

    hydrate1 = new Hydration(user1.id, hydrationData);
    hydrate2 = new Hydration(user2.id, hydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydrate1).to.be.an.instanceOf(Hydration);
    expect(hydrate2).to.be.an.instanceOf(Hydration);
  });

  it('should take in a user\'s id', () => {
    expect(hydrate1.id).to.equal(1);
    expect(hydrate2.id).to.equal(2);
  });

  it('should calculate the daily ounces per user', () => {
    expect(hydrate1.ouncesPerDay('2019/06/15')).to.equal(37);
    expect(hydrate2.ouncesPerDay('2019/06/15')).to.equal(75);
  });

  it("should check that given date exists in the user's data set", () => {
    expect(hydrate1.ouncesPerDay('2020/06/15')).to.equal('This date could not be found.');
    expect(hydrate2.ouncesPerDay('2020/08/15')).to.equal('This date could not be found.');
  });

  it('should calculate weekly ouces per user', () => {
    expect(hydrate1.getDailyOuncesByWeek('2019/06/15')).to.deep.equal([
      { date: '2019/06/15', numOunces: 37 },
      { date: '2019/06/16', numOunces: 69 },
      { date: '2019/06/22', numOunces: 72 }
    ]);
  });

  it('should calculate the avg ounces per user', () => {
    expect(hydrate1.getAvgOunces(hydrationData)).to.deep.equal(59);
    expect(hydrate2.getAvgOunces(hydrationData)).to.deep.equal(83);
  });
});