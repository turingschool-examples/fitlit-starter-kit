import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import Hydration from '../src/Hydration';

describe('Hydration Repository', () => {

let hydrationData;
let hydrationRepository;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "numOunces": 99
      }
    ];

    hydrationRepository = new HydrationRepository(hydrationData);
  });

  it('should be a function', function () {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of Hydration Repository', () => {
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository);
  });

  it('should return a user\'s hydration data when given an id', () => {
      const hydrationDataUser1 = hydrationData.filter(obj => obj.userID === 1)

    expect(hydrationRepository.getUserById(1)).to.deep.equal(hydrationDataUser1);
    expect(hydrationRepository.getUserById(1).length).to.equal(2);
  });

  it('should return the average fluid ounces of a user when given an id', () => {
    expect(hydrationRepository.getAvgFluidOuncesById(1)).to.equal(53);
  });
});
