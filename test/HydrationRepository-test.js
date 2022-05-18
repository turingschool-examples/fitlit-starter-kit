import { expect } from 'chai';
import dayjs from 'dayjs'
import HydrationRepository from '../src/HydrationRepository';
import Hydration from '../src/Hydration';

describe('Hydration Repository', () => {

let hydrationData;
let userHydrationData;
let hydrationRepository1;
let hydrationRepository2;

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

    userHydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 91
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 50
      }
    ];

    hydrationRepository1 = new HydrationRepository(hydrationData);
    hydrationRepository2 = new HydrationRepository(userHydrationData);
  });

  it('should be a function', function () {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of Hydration Repository', () => {
    expect(hydrationRepository1).to.be.an.instanceOf(HydrationRepository);
  });

  it('should return a user\'s hydration data when given an id', () => {
      const hydrationDataUser1 = hydrationData.filter(obj => obj.userID === 1)

    expect(hydrationRepository1.getUserById(1)).to.deep.equal(hydrationDataUser1);
    expect(hydrationRepository1.getUserById(1).length).to.equal(2);
  });

  it('should return the average fluid ounces of a user when given an id', () => {
    expect(hydrationRepository1.getAvgFluidOuncesById(1)).to.equal(53);
  });

  it('should return total fluid ounces of a user for a specific date when given id and date', () => {
    expect(hydrationRepository1.getFluidOuncesByDate(1, "2019/06/15")).to.equal(37);
  });

  it('should return an object with 7 dates as keys and 7 numbers as values', () => {
    const hydrationObject = {
        "2019/06/15": 37,
        "2019/06/16": 69,
        "2019/06/17": 96,
        "2019/06/18": 61,
        "2019/06/19": 91,
        "2019/06/20": 50,
        "2019/06/21": 50
    }

    expect(hydrationRepository2.getFluidOuncesEachDayOfWeek(1, "2019/06/15")).to.deep.equal(hydrationObject);
  });
});
