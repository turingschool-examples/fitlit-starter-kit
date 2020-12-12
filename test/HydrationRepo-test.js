const chai = require('chai');
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');

describe('HydrationRepo', () => {
  let hydrationData, hydRepo;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 34,
        "date": "2019/09/17",
        "numOunces": 69
      },
      {
        "userID": 35,
        "date": "2019/09/17",
        "numOunces": 95
      },
      {
        "userID": 36,
        "date": "2019/09/17",
        "numOunces": 32
      },
      {
        "userID": 37,
        "date": "2019/09/17",
        "numOunces": 95
      },
      {
        "userID": 38,
        "date": "2019/09/17",
        "numOunces": 23
      },
      {
        "userID": 39,
        "date": "2019/09/17",
        "numOunces": 28
      },
      {
        "userID": 40,
        "date": "2019/09/17",
        "numOunces": 41
      },
      {
        "userID": 41,
        "date": "2019/09/17",
        "numOunces": 90
      },
      {
        "userID": 42,
        "date": "2019/09/17",
        "numOunces": 63
      },
      {
        "userID": 43,
        "date": "2019/09/17",
        "numOunces": 48
      },
      {
        "userID": 44,
        "date": "2019/09/17",
        "numOunces": 58
      },
      {
        "userID": 45,
        "date": "2019/09/17",
        "numOunces": 85
      },
      {
        "userID": 46,
        "date": "2019/09/17",
        "numOunces": 75
      },
      {
        "userID": 47,
        "date": "2019/09/17",
        "numOunces": 47
      },
      {
        "userID": 48,
        "date": "2019/09/17",
        "numOunces": 61
      },
      {
        "userID": 49,
        "date": "2019/09/17",
        "numOunces": 61
      },
      {
        "userID": 50,
        "date": "2019/09/17",
        "numOunces": 35
      },
      {
        "userID": 1,
        "date": "2019/09/18",
        "numOunces": 86
      },
      {
        "userID": 2,
        "date": "2019/09/18",
        "numOunces": 67
      },
      {
        "userID": 3,
        "date": "2019/09/18",
        "numOunces": 64
      },
      {
        "userID": 4,
        "date": "2019/09/18",
        "numOunces": 56
      },
      {
        "userID": 5,
        "date": "2019/09/18",
        "numOunces": 54
      },
      {
        "userID": 6,
        "date": "2019/09/18",
        "numOunces": 37
      },
      {
        "userID": 7,
        "date": "2019/09/18",
        "numOunces": 54
      },
      {
        "userID": 8,
        "date": "2019/09/18",
        "numOunces": 97
      },
      {
        "userID": 9,
        "date": "2019/09/18",
        "numOunces": 31
      },
      {
        "userID": 10,
        "date": "2019/09/18",
        "numOunces": 43
      },
      {
        "userID": 11,
        "date": "2019/09/18",
        "numOunces": 35
      },
      {
        "userID": 12,
        "date": "2019/09/18",
        "numOunces": 21
      },
      {
        "userID": 13,
        "date": "2019/09/18",
        "numOunces": 46
      },
      {
        "userID": 14,
        "date": "2019/09/18",
        "numOunces": 70
      },
      {
        "userID": 15,
        "date": "2019/09/18",
        "numOunces": 37
      },
      {
        "userID": 16,
        "date": "2019/09/18",
        "numOunces": 84
      },
      {
        "userID": 17,
        "date": "2019/09/18",
        "numOunces": 58
      },
      {
        "userID": 18,
        "date": "2019/09/18",
        "numOunces": 58
      },
      {
        "userID": 19,
        "date": "2019/09/18",
        "numOunces": 39
      },
      {
        "userID": 20,
        "date": "2019/09/18",
        "numOunces": 22
      },
      {
        "userID": 21,
        "date": "2019/09/18",
        "numOunces": 96
      },
      {
        "userID": 22,
        "date": "2019/09/18",
        "numOunces": 59
      },
      {
        "userID": 23,
        "date": "2019/09/18",
        "numOunces": 75
      },
      {
        "userID": 24,
        "date": "2019/09/18",
        "numOunces": 89
      },
      {
        "userID": 25,
        "date": "2019/09/18",
        "numOunces": 37
      },
      {
        "userID": 26,
        "date": "2019/09/18",
        "numOunces": 71
      },
      {
        "userID": 27,
        "date": "2019/09/18",
        "numOunces": 31
      },
      {
        "userID": 28,
        "date": "2019/09/18",
        "numOunces": 28
      },
      {
        "userID": 29,
        "date": "2019/09/18",
        "numOunces": 94
      },
      {
        "userID": 30,
        "date": "2019/09/18",
        "numOunces": 35
      },
      {
        "userID": 31,
        "date": "2019/09/18",
        "numOunces": 91
      },
      {
        "userID": 32,
        "date": "2019/09/18",
        "numOunces": 47
      },
      {
        "userID": 33,
        "date": "2019/09/18",
        "numOunces": 85
      },
      {
        "userID": 34,
        "date": "2019/09/18",
        "numOunces": 98
      },
      {
        "userID": 35,
        "date": "2019/09/18",
        "numOunces": 58
      },
      {
        "userID": 36,
        "date": "2019/09/18",
        "numOunces": 94
      },
      {
        "userID": 37,
        "date": "2019/09/18",
        "numOunces": 34
      },
      {
        "userID": 38,
        "date": "2019/09/18",
        "numOunces": 66
      },
      {
        "userID": 39,
        "date": "2019/09/18",
        "numOunces": 86
      },
      {
        "userID": 40,
        "date": "2019/09/18",
        "numOunces": 77
      },
      {
        "userID": 41,
        "date": "2019/09/18",
        "numOunces": 74
      },
      {
        "userID": 42,
        "date": "2019/09/18",
        "numOunces": 51
      },
      {
        "userID": 43,
        "date": "2019/09/18",
        "numOunces": 84
      },
      {
        "userID": 44,
        "date": "2019/09/18",
        "numOunces": 83
      },
      {
        "userID": 45,
        "date": "2019/09/18",
        "numOunces": 85
      },
      {
        "userID": 46,
        "date": "2019/09/18",
        "numOunces": 66
      },
      {
        "userID": 47,
        "date": "2019/09/18",
        "numOunces": 57
      },
      {
        "userID": 48,
        "date": "2019/09/18",
        "numOunces": 21
      },
      {
        "userID": 49,
        "date": "2019/09/18",
        "numOunces": 63
      },
      {
        "userID": 50,
        "date": "2019/09/18",
        "numOunces": 69
      },
      {
        "userID": 1,
        "date": "2019/09/19",
        "numOunces": 53
      },
      {
        "userID": 2,
        "date": "2019/09/19",
        "numOunces": 27
      },
      {
        "userID": 3,
        "date": "2019/09/19",
        "numOunces": 77
      },
      {
        "userID": 4,
        "date": "2019/09/19",
        "numOunces": 73
      },
      {
        "userID": 5,
        "date": "2019/09/19",
        "numOunces": 73
      },
      {
        "userID": 6,
        "date": "2019/09/19",
        "numOunces": 93
      },
      {
        "userID": 7,
        "date": "2019/09/19",
        "numOunces": 47
      },
      {
        "userID": 8,
        "date": "2019/09/19",
        "numOunces": 71
      },
      {
        "userID": 9,
        "date": "2019/09/19",
        "numOunces": 99
      },
      {
        "userID": 10,
        "date": "2019/09/19",
        "numOunces": 52
      },
      {
        "userID": 11,
        "date": "2019/09/19",
        "numOunces": 65
      },
      {
        "userID": 12,
        "date": "2019/09/19",
        "numOunces": 32
      },
      {
        "userID": 13,
        "date": "2019/09/19",
        "numOunces": 62
      }
    ];

    hydRepo = new HydrationRepo(hydrationData);
  });
});