const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

let hydration1;
let hydration2;
let hydration3;
let hydration4;
let hydration5;
let hydration6;
let hydration7;
let hydration8;
let hydration9;
let hydration10;
let hydration11;
let hydration12;
let hydration13;

let hydrationData;
let hydration;

describe('Hydration', () => {
  beforeEach(() => {
    hydration1 = {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    }

    hydration2 = {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 40
    }

    hydration3 = {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 30
    }

    hydration4 = {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 47
    }

    hydration5 = {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 27
    }

    hydration6 = {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 42
    }

    hydration7 = {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 46
    }

    hydration8 = {
      "userID": 1,
      "date": "2019/06/22",
      "numOunces": 33
    }

    hydration9 = {
      "userID": 1,
      "date": "2019/06/23",
      "numOunces": 20
    }

    hydration10 = {
      "userID": 1,
      "date": "2019/06/24",
      "numOunces": 45
    }

    hydration11 = {
      "userID": 2,
      "date": "2019/06/24",
      "numOunces": 3
    }

    hydration12 = {
      "userID": 2,
      "date": "2019/06/23",
      "numOunces": 2
    }

    hydration13 = {
      "userID": 2,
      "date": "2019/06/22",
      "numOunces": 4
    }

    hydrationData = [
      hydration1,
      hydration2,
      hydration3,
      hydration4,
      hydration5,
      hydration6,
      hydration7,
      hydration8,
      hydration9,
      hydration10,
      hydration11,
      hydration12,
      hydration13,
    ];

    hydration = new Hydration(1, hydrationData);
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should return new instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should throw an error if no arguments is passed as an argument', () => {
    expect(() => { new Hydration() }).to.throw(Error);
  })

  it('should be an empty arry if invalid id is passed as an argument', () => {
    hydration2 = new Hydration(500, hydrationData)
    expect(hydration2).to.deep.equal({ userHydration: [] });
  })

  it('should return user Hydration Data', () => {
    expect(hydrationData.length).to.equal(13);
  })

  it('should return a specific user Hydration Data', () => {
    expect(hydration.userHydration.length).to.equal(10);
  })

  it('should return a specific user Hydration Data for a specific date', () => {
    expect(hydration.getDailyWater('2019/06/24')).to.equal(45);
  })

  it('should only take a date as an argument', () => {
    expect(hydration.getDailyWater('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(hydration.getDailyWater('2019-06-24')).to.equal('You must pass a valid date');
  })

  it('should return a specific user Hydration Data over 7 days', () => {
    expect(hydration.getWeeklyWater('2019/06/15')).to.deep.equal([37, 40, 30, 47, 27, 42, 46]);
  })

  it('should return a specific user Hydration Data over x days if there aren\t 7 days worth of data', () => {
    expect(hydration.getWeeklyWater('2019/06/20')).to.deep.equal([42, 46, 33, 20, 45]);
  })

  it('should only take a date as an argument', () => {
    expect(hydration.getWeeklyWater('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(hydration.getWeeklyWater('2019-06-20')).to.equal('You must pass a valid date');
  })

  it('should return a specific user average Hydration Data for all time', () => {
    expect(hydration.getAvgWater()).to.equal(37);
  })

  it('should return a specific user average Hydration Data for all time even when an argument is passed', () => {
    expect(hydration.getAvgWater('test')).to.equal(37);
  })

  it('should return a date', () => {
    expect(hydration.checkDate('2019/06/15')).to.equal('2019/06/15');
  })
})

