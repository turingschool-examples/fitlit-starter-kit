import { expect } from 'chai';
import User from '../src/user';
import Hydration from '../src/Hydration';
import hydrationData from "../src/data/sample-hydration";
import userData from '../src/data/users.js'

describe('Hydration', () => {
  let hydrate1;
  let hydrate2;
  
  beforeEach(() => {
    hydrate1 = new Hydration(1, hydrationData)
    hydrate2 = new Hydration(2, hydrationData)

  })
  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })
  it ('should take in a user\'s id', () => {
    expect(hydrate1.id).to.equal(1)
  })
  it ('should have a date', () => {
    expect(hydrate1.date).to.equal("2019/06/15")

  })
  it ('should calculate the daily ounces per user', () => {
    expect(hydrate1.ouncesPerDay('2019/06/15', hydrationData)).to.deep.equal({'2019/06/15': 37})
    expect(hydrate1.ouncesPerDay('2019/06/16', hydrationData)).to.deep.equal({'2019/06/16': 69})
  })
  it ('should calculate weekly ouces per user', () => {
    expect(hydrate1.getDailyOuncesByWeek(hydrationData, 0, 2)).to.deep.equal([
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 }
    ])
  })
 
})
//

