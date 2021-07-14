
import { expect } from 'chai';
import Hydration from '../src/Hydration';



describe('Hydration', () => {
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  it('should be an instance of Hydration', () => {
    const data = [{
    userID: 1,
    date: "2019/06/15",
    numOunces: 37
  },
  {
    userID: 2,
    date: "2019/06/15",
    numOunces: 75
  },
  {
    userID: 3,
    date: "2019/06/15",
    numOunces: 47
  }];
    const hydration = new Hydration(data);
    expect(hydration).to.be.an.instanceOf(Hydration);
  })
})
