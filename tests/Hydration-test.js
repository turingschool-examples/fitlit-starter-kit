const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const User = require('../src/User');
describe('Hydration', () => {
  let hydration1, hydration2;
  let user1, user2;

  beforeEach(() => {
    hydration1 = new Hydration(2, "2019/04/15", 25);
    hydration2 = new Hydration(15, "2019/02/25", 0);
    hydration3 = new Hydration(20, "2019/12/02", 100);
  })
  
  it()
})
