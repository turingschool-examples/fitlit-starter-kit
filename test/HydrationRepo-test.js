const chai = require('chai');
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');
const Hydration = require('../src/Hydration');

describe('HydrationRepo', () => {
  let data, repo;

  beforeEach(() => {
    data = [
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
        "userID": 4,
        "date": "2019/06/15",
        "numOunces": 85
      },
      {
        "userID": 5,
        "date": "2019/06/15",
        "numOunces": 42
      },
      {
        "userID": 6,
        "date": "2019/06/15",
        "numOunces": 87
      },
      {
        "userID": 7,
        "date": "2019/06/15",
        "numOunces": 94
      },
      {
        "userID": 8,
        "date": "2019/06/15",
        "numOunces": 84
      },
      {
        "userID": 9,
        "date": "2019/06/15",
        "numOunces": 39
      },
      {
        "userID": 10,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 11,
        "date": "2019/06/15",
        "numOunces": 51
      },
      {
        "userID": 12,
        "date": "2019/06/15",
        "numOunces": 100
      },
      {
        "userID": 13,
        "date": "2019/06/15",
        "numOunces": 30
      },
      {
        "userID": 14,
        "date": "2019/06/15",
        "numOunces": 98
      },
      {
        "userID": 15,
        "date": "2019/06/15",
        "numOunces": 85
      },
      {
        "userID": 16,
        "date": "2019/06/15",
        "numOunces": 40
      },
      {
        "userID": 17,
        "date": "2019/06/15",
        "numOunces": 60
      },
      {
        "userID": 18,
        "date": "2019/06/15",
        "numOunces": 30
      },
      {
        "userID": 19,
        "date": "2019/06/15",
        "numOunces": 62
      },
      {
        "userID": 20,
        "date": "2019/06/15",
        "numOunces": 23
      },
      {
        "userID": 21,
        "date": "2019/06/15",
        "numOunces": 23
      },
      {
        "userID": 22,
        "date": "2019/06/15",
        "numOunces": 54
      },
      {
        "userID": 23,
        "date": "2019/06/15",
        "numOunces": 32
      },
      {
        "userID": 24,
        "date": "2019/06/15",
        "numOunces": 52
      },
      {
        "userID": 25,
        "date": "2019/06/15",
        "numOunces": 40
      },
      {
        "userID": 26,
        "date": "2019/06/15",
        "numOunces": 56
      },
      {
        "userID": 27,
        "date": "2019/06/15",
        "numOunces": 87
      },
      {
        "userID": 28,
        "date": "2019/06/15",
        "numOunces": 98
      },
      {
        "userID": 29,
        "date": "2019/06/15",
        "numOunces": 44
      },
      {
        "userID": 30,
        "date": "2019/06/15",
        "numOunces": 42
      },
      {
        "userID": 31,
        "date": "2019/06/15",
        "numOunces": 97
      },
      {
        "userID": 32,
        "date": "2019/06/15",
        "numOunces": 56
      },
      {
        "userID": 33,
        "date": "2019/06/15",
        "numOunces": 51
      },
      {
        "userID": 34,
        "date": "2019/06/15",
        "numOunces": 22
      },
      {
        "userID": 35,
        "date": "2019/06/15",
        "numOunces": 64
      },
      {
        "userID": 36,
        "date": "2019/06/15",
        "numOunces": 24
      },
      {
        "userID": 37,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 38,
        "date": "2019/06/15",
        "numOunces": 36
      },
      {
        "userID": 39,
        "date": "2019/06/15",
        "numOunces": 83
      },
      {
        "userID": 40,
        "date": "2019/06/15",
        "numOunces": 54
      },
      {
        "userID": 41,
        "date": "2019/06/15",
        "numOunces": 32
      },
      {
        "userID": 42,
        "date": "2019/06/15",
        "numOunces": 48
      },
      {
        "userID": 43,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 44,
        "date": "2019/06/15",
        "numOunces": 44
      },
      {
        "userID": 45,
        "date": "2019/06/15",
        "numOunces": 24
      },
      {
        "userID": 46,
        "date": "2019/06/15",
        "numOunces": 89
      },
      {
        "userID": 47,
        "date": "2019/06/15",
        "numOunces": 62
      },
      {
        "userID": 48,
        "date": "2019/06/15",
        "numOunces": 79
      },
      {
        "userID": 49,
        "date": "2019/06/15",
        "numOunces": 57
      },
      {
        "userID": 50,
        "date": "2019/06/15",
        "numOunces": 66
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
      },
      {
        "userID": 4,
        "date": "2019/06/16",
        "numOunces": 95
      },
      {
        "userID": 5,
        "date": "2019/06/16",
        "numOunces": 79
      },
      {
        "userID": 6,
        "date": "2019/06/16",
        "numOunces": 57
      },
      {
        "userID": 7,
        "date": "2019/06/16",
        "numOunces": 49
      },
      {
        "userID": 8,
        "date": "2019/06/16",
        "numOunces": 26
      },
      {
        "userID": 9,
        "date": "2019/06/16",
        "numOunces": 98
      },
      {
        "userID": 10,
        "date": "2019/06/16",
        "numOunces": 68
      },
      {
        "userID": 11,
        "date": "2019/06/16",
        "numOunces": 21
      },
      {
        "userID": 12,
        "date": "2019/06/16",
        "numOunces": 56
      },
      {
        "userID": 13,
        "date": "2019/06/16",
        "numOunces": 35
      },
      {
        "userID": 14,
        "date": "2019/06/16",
        "numOunces": 75
      },
      {
        "userID": 15,
        "date": "2019/06/16",
        "numOunces": 33
      },
      {
        "userID": 16,
        "date": "2019/06/16",
        "numOunces": 55
      },
      {
        "userID": 17,
        "date": "2019/06/16",
        "numOunces": 43
      },
      {
        "userID": 18,
        "date": "2019/06/16",
        "numOunces": 39
      },
      {
        "userID": 19,
        "date": "2019/06/16",
        "numOunces": 73
      },
      {
        "userID": 20,
        "date": "2019/06/16",
        "numOunces": 80
      },
      {
        "userID": 21,
        "date": "2019/06/16",
        "numOunces": 36
      },
      {
        "userID": 22,
        "date": "2019/06/16",
        "numOunces": 41
      },
      {
        "userID": 23,
        "date": "2019/06/16",
        "numOunces": 25
      },
      {
        "userID": 24,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 25,
        "date": "2019/06/16",
        "numOunces": 20
      },
      {
        "userID": 26,
        "date": "2019/06/16",
        "numOunces": 48
      },
      {
        "userID": 27,
        "date": "2019/06/16",
        "numOunces": 88
      },
      {
        "userID": 28,
        "date": "2019/06/16",
        "numOunces": 66
      },
      {
        "userID": 29,
        "date": "2019/06/16",
        "numOunces": 31
      },
      {
        "userID": 30,
        "date": "2019/06/16",
        "numOunces": 50
      },
      {
        "userID": 31,
        "date": "2019/06/16",
        "numOunces": 48
      },
      {
        "userID": 32,
        "date": "2019/06/16",
        "numOunces": 36
      },
      {
        "userID": 33,
        "date": "2019/06/16",
        "numOunces": 89
      },
      {
        "userID": 34,
        "date": "2019/06/16",
        "numOunces": 76
      },
      {
        "userID": 35,
        "date": "2019/06/16",
        "numOunces": 98
      },
      {
        "userID": 36,
        "date": "2019/06/16",
        "numOunces": 62
      },
      {
        "userID": 37,
        "date": "2019/06/16",
        "numOunces": 35
      },
      {
        "userID": 38,
        "date": "2019/06/16",
        "numOunces": 54
      },
      {
        "userID": 39,
        "date": "2019/06/16",
        "numOunces": 39
      },
      {
        "userID": 40,
        "date": "2019/06/16",
        "numOunces": 52
      },
      {
        "userID": 41,
        "date": "2019/06/16",
        "numOunces": 100
      },
      {
        "userID": 42,
        "date": "2019/06/16",
        "numOunces": 72
      },
      {
        "userID": 43,
        "date": "2019/06/16",
        "numOunces": 32
      },
      {
        "userID": 44,
        "date": "2019/06/16",
        "numOunces": 53
      },
      {
        "userID": 45,
        "date": "2019/06/16",
        "numOunces": 77
      },
      {
        "userID": 46,
        "date": "2019/06/16",
        "numOunces": 70
      },
      {
        "userID": 47,
        "date": "2019/06/16",
        "numOunces": 96
      },
      {
        "userID": 48,
        "date": "2019/06/16",
        "numOunces": 52
      },
      {
        "userID": 49,
        "date": "2019/06/16",
        "numOunces": 78
      },
      {
        "userID": 50,
        "date": "2019/06/16",
        "numOunces": 39
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numOunces": 28
      },
      {
        "userID": 4,
        "date": "2019/06/17",
        "numOunces": 82
      },
      {
        "userID": 5,
        "date": "2019/06/17",
        "numOunces": 99
      },
      {
        "userID": 6,
        "date": "2019/06/17",
        "numOunces": 57
      },
      {
        "userID": 7,
        "date": "2019/06/17",
        "numOunces": 50
      },
      {
        "userID": 8,
        "date": "2019/06/17",
        "numOunces": 47
      },
      {
        "userID": 9,
        "date": "2019/06/17",
        "numOunces": 86
      },
      {
        "userID": 10,
        "date": "2019/06/17",
        "numOunces": 49
      },
      {
        "userID": 11,
        "date": "2019/06/17",
        "numOunces": 88
      },
      {
        "userID": 12,
        "date": "2019/06/17",
        "numOunces": 88
      },
      {
        "userID": 13,
        "date": "2019/06/17",
        "numOunces": 57
      },
      {
        "userID": 14,
        "date": "2019/06/17",
        "numOunces": 39
      },
      {
        "userID": 15,
        "date": "2019/06/17",
        "numOunces": 78
      },
      {
        "userID": 16,
        "date": "2019/06/17",
        "numOunces": 68
      },
      {
        "userID": 17,
        "date": "2019/06/17",
        "numOunces": 59
      },
      {
        "userID": 18,
        "date": "2019/06/17",
        "numOunces": 76
      },
      {
        "userID": 19,
        "date": "2019/06/17",
        "numOunces": 62
      },
      {
        "userID": 20,
        "date": "2019/06/17",
        "numOunces": 51
      },
      {
        "userID": 21,
        "date": "2019/06/17",
        "numOunces": 73
      },
      {
        "userID": 22,
        "date": "2019/06/17",
        "numOunces": 42
      },
      {
        "userID": 23,
        "date": "2019/06/17",
        "numOunces": 63
      },
      {
        "userID": 24,
        "date": "2019/06/17",
        "numOunces": 70
      },
      {
        "userID": 25,
        "date": "2019/06/17",
        "numOunces": 39
      },
      {
        "userID": 26,
        "date": "2019/06/17",
        "numOunces": 37
      },
      {
        "userID": 27,
        "date": "2019/06/17",
        "numOunces": 99
      },
      {
        "userID": 28,
        "date": "2019/06/17",
        "numOunces": 79
      },
      {
        "userID": 29,
        "date": "2019/06/17",
        "numOunces": 59
      },
      {
        "userID": 30,
        "date": "2019/06/17",
        "numOunces": 90
      },
      {
        "userID": 31,
        "date": "2019/06/17",
        "numOunces": 69
      },
      {
        "userID": 32,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 33,
        "date": "2019/06/17",
        "numOunces": 23
      },
      {
        "userID": 34,
        "date": "2019/06/17",
        "numOunces": 34
      },
      {
        "userID": 35,
        "date": "2019/06/17",
        "numOunces": 97
      },
      {
        "userID": 36,
        "date": "2019/06/17",
        "numOunces": 83
      },
      {
        "userID": 37,
        "date": "2019/06/17",
        "numOunces": 84
      },
      {
        "userID": 38,
        "date": "2019/06/17",
        "numOunces": 40
      },
      {
        "userID": 39,
        "date": "2019/06/17",
        "numOunces": 62
      },
      {
        "userID": 40,
        "date": "2019/06/17",
        "numOunces": 48
      },
      {
        "userID": 41,
        "date": "2019/06/17",
        "numOunces": 82
      },
      {
        "userID": 42,
        "date": "2019/06/17",
        "numOunces": 60
      },
      {
        "userID": 43,
        "date": "2019/06/17",
        "numOunces": 43
      },
      {
        "userID": 44,
        "date": "2019/06/17",
        "numOunces": 99
      },
      {
        "userID": 45,
        "date": "2019/06/17",
        "numOunces": 65
      },
      {
        "userID": 46,
        "date": "2019/06/17",
        "numOunces": 36
      },
      {
        "userID": 47,
        "date": "2019/06/17",
        "numOunces": 76
      },
      {
        "userID": 48,
        "date": "2019/06/17",
        "numOunces": 99
      },
      {
        "userID": 49,
        "date": "2019/06/17",
        "numOunces": 77
      },
      {
        "userID": 50,
        "date": "2019/06/17",
        "numOunces": 54
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "numOunces": 40
      },
      {
        "userID": 4,
        "date": "2019/06/18",
        "numOunces": 93
      },
      {
        "userID": 5,
        "date": "2019/06/18",
        "numOunces": 39
      },
      {
        "userID": 6,
        "date": "2019/06/18",
        "numOunces": 61
      },
      {
        "userID": 7,
        "date": "2019/06/18",
        "numOunces": 58
      },
      {
        "userID": 8,
        "date": "2019/06/18",
        "numOunces": 90
      },
      {
        "userID": 9,
        "date": "2019/06/18",
        "numOunces": 22
      },
      {
        "userID": 10,
        "date": "2019/06/18",
        "numOunces": 97
      },
      {
        "userID": 11,
        "date": "2019/06/18",
        "numOunces": 69
      },
      {
        "userID": 12,
        "date": "2019/06/18",
        "numOunces": 29
      },
      {
        "userID": 13,
        "date": "2019/06/18",
        "numOunces": 47
      },
      {
        "userID": 14,
        "date": "2019/06/18",
        "numOunces": 43
      },
      {
        "userID": 15,
        "date": "2019/06/18",
        "numOunces": 52
      },
      {
        "userID": 16,
        "date": "2019/06/18",
        "numOunces": 53
      },
      {
        "userID": 17,
        "date": "2019/06/18",
        "numOunces": 52
      },
      {
        "userID": 18,
        "date": "2019/06/18",
        "numOunces": 66
      },
      {
        "userID": 19,
        "date": "2019/06/18",
        "numOunces": 58
      },
      {
        "userID": 20,
        "date": "2019/06/18",
        "numOunces": 82
      },
      {
        "userID": 21,
        "date": "2019/06/18",
        "numOunces": 26
      },
      {
        "userID": 22,
        "date": "2019/06/18",
        "numOunces": 38
      },
      {
        "userID": 23,
        "date": "2019/06/18",
        "numOunces": 52
      },
      {
        "userID": 24,
        "date": "2019/06/18",
        "numOunces": 89
      },
      {
        "userID": 25,
        "date": "2019/06/18",
        "numOunces": 96
      },
      {
        "userID": 26,
        "date": "2019/06/18",
        "numOunces": 66
      },
      {
        "userID": 27,
        "date": "2019/06/18",
        "numOunces": 59
      },
      {
        "userID": 28,
        "date": "2019/06/18",
        "numOunces": 83
      },
      {
        "userID": 29,
        "date": "2019/06/18",
        "numOunces": 39
      },
      {
        "userID": 30,
        "date": "2019/06/18",
        "numOunces": 44
      },
      {
        "userID": 31,
        "date": "2019/06/18",
        "numOunces": 80
      },
      {
        "userID": 32,
        "date": "2019/06/18",
        "numOunces": 63
      },
      {
        "userID": 33,
        "date": "2019/06/18",
        "numOunces": 26
      },
      {
        "userID": 34,
        "date": "2019/06/18",
        "numOunces": 36
      },
      {
        "userID": 35,
        "date": "2019/06/18",
        "numOunces": 37
      },
      {
        "userID": 36,
        "date": "2019/06/18",
        "numOunces": 73
      },
      {
        "userID": 37,
        "date": "2019/06/18",
        "numOunces": 68
      },
      {
        "userID": 38,
        "date": "2019/06/18",
        "numOunces": 46
      },
      {
        "userID": 39,
        "date": "2019/06/18",
        "numOunces": 50
      },
      {
        "userID": 40,
        "date": "2019/06/18",
        "numOunces": 51
      },
      {
        "userID": 41,
        "date": "2019/06/18",
        "numOunces": 35
      },
      {
        "userID": 42,
        "date": "2019/06/18",
        "numOunces": 52
      },
      {
        "userID": 43,
        "date": "2019/06/18",
        "numOunces": 44
      },
      {
        "userID": 44,
        "date": "2019/06/18",
        "numOunces": 30
      },
      {
        "userID": 45,
        "date": "2019/06/18",
        "numOunces": 93
      },
      {
        "userID": 46,
        "date": "2019/06/18",
        "numOunces": 78
      },
      {
        "userID": 47,
        "date": "2019/06/18",
        "numOunces": 100
      },
      {
        "userID": 48,
        "date": "2019/06/18",
        "numOunces": 73
      },
      {
        "userID": 49,
        "date": "2019/06/18",
        "numOunces": 77
      },
      {
        "userID": 50,
        "date": "2019/06/18",
        "numOunces": 25
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 91
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "numOunces": 85
      },
      {
        "userID": 4,
        "date": "2019/06/19",
        "numOunces": 21
      },
      {
        "userID": 5,
        "date": "2019/06/19",
        "numOunces": 69
      },
      {
        "userID": 6,
        "date": "2019/06/19",
        "numOunces": 41
      },
      {
        "userID": 7,
        "date": "2019/06/19",
        "numOunces": 41
      },
      {
        "userID": 8,
        "date": "2019/06/19",
        "numOunces": 79
      },
      {
        "userID": 9,
        "date": "2019/06/19",
        "numOunces": 82
      },
      {
        "userID": 10,
        "date": "2019/06/19",
        "numOunces": 38
      },
      {
        "userID": 11,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 12,
        "date": "2019/06/19",
        "numOunces": 46
      },
      {
        "userID": 13,
        "date": "2019/06/19",
        "numOunces": 21
      },
      {
        "userID": 14,
        "date": "2019/06/19",
        "numOunces": 26
      },
      {
        "userID": 15,
        "date": "2019/06/19",
        "numOunces": 35
      },
      {
        "userID": 16,
        "date": "2019/06/19",
        "numOunces": 41
      },
      {
        "userID": 17,
        "date": "2019/06/19",
        "numOunces": 50
      },
      {
        "userID": 18,
        "date": "2019/06/19",
        "numOunces": 100
      },
      {
        "userID": 19,
        "date": "2019/06/19",
        "numOunces": 92
      },
      {
        "userID": 20,
        "date": "2019/06/19",
        "numOunces": 72
      },
      {
        "userID": 21,
        "date": "2019/06/19",
        "numOunces": 89
      },
      {
        "userID": 22,
        "date": "2019/06/19",
        "numOunces": 77
      },
      {
        "userID": 23,
        "date": "2019/06/19",
        "numOunces": 37
      },
      {
        "userID": 24,
        "date": "2019/06/19",
        "numOunces": 88
      },
      {
        "userID": 25,
        "date": "2019/06/19",
        "numOunces": 43
      },
      {
        "userID": 26,
        "date": "2019/06/19",
        "numOunces": 55
      },
      {
        "userID": 27,
        "date": "2019/06/19",
        "numOunces": 68
      },
      {
        "userID": 28,
        "date": "2019/06/19",
        "numOunces": 94
      },
      {
        "userID": 29,
        "date": "2019/06/19",
        "numOunces": 56
      },
      {
        "userID": 30,
        "date": "2019/06/19",
        "numOunces": 81
      },
      {
        "userID": 31,
        "date": "2019/06/19",
        "numOunces": 48
      },
      {
        "userID": 32,
        "date": "2019/06/19",
        "numOunces": 38
      },
      {
        "userID": 33,
        "date": "2019/06/19",
        "numOunces": 47
      },
      {
        "userID": 34,
        "date": "2019/06/19",
        "numOunces": 91
      },
      {
        "userID": 35,
        "date": "2019/06/19",
        "numOunces": 62
      },
      {
        "userID": 36,
        "date": "2019/06/19",
        "numOunces": 62
      },
      {
        "userID": 37,
        "date": "2019/06/19",
        "numOunces": 64
      },
      {
        "userID": 38,
        "date": "2019/06/19",
        "numOunces": 48
      },
      {
        "userID": 39,
        "date": "2019/06/19",
        "numOunces": 43
      },
      {
        "userID": 40,
        "date": "2019/06/19",
        "numOunces": 55
      },
      {
        "userID": 41,
        "date": "2019/06/19",
        "numOunces": 70
      },
      {
        "userID": 42,
        "date": "2019/06/19",
        "numOunces": 29
      },
      {
        "userID": 43,
        "date": "2019/06/19",
        "numOunces": 51
      },
      {
        "userID": 44,
        "date": "2019/06/19",
        "numOunces": 94
      },
      {
        "userID": 45,
        "date": "2019/06/19",
        "numOunces": 97
      },
      {
        "userID": 46,
        "date": "2019/06/19",
        "numOunces": 86
      },
      {
        "userID": 47,
        "date": "2019/06/19",
        "numOunces": 87
      },
      {
        "userID": 48,
        "date": "2019/06/19",
        "numOunces": 58
      },
      {
        "userID": 49,
        "date": "2019/06/19",
        "numOunces": 59
      },
      {
        "userID": 50,
        "date": "2019/06/19",
        "numOunces": 48
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 71
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "numOunces": 51
      },
      {
        "userID": 4,
        "date": "2019/06/20",
        "numOunces": 95
      },
      {
        "userID": 5,
        "date": "2019/06/20",
        "numOunces": 89
      },
      {
        "userID": 6,
        "date": "2019/06/20",
        "numOunces": 85
      },
      {
        "userID": 7,
        "date": "2019/06/20",
        "numOunces": 80
      },
      {
        "userID": 8,
        "date": "2019/06/20",
        "numOunces": 89
      },
      {
        "userID": 9,
        "date": "2019/06/20",
        "numOunces": 58
      },
      {
        "userID": 10,
        "date": "2019/06/20",
        "numOunces": 78
      },
      {
        "userID": 11,
        "date": "2019/06/20",
        "numOunces": 68
      },
      {
        "userID": 12,
        "date": "2019/06/20",
        "numOunces": 31
      },
      {
        "userID": 13,
        "date": "2019/06/20",
        "numOunces": 86
      },
      {
        "userID": 14,
        "date": "2019/06/20",
        "numOunces": 52
      },
      {
        "userID": 15,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 16,
        "date": "2019/06/20",
        "numOunces": 53
      },
      {
        "userID": 17,
        "date": "2019/06/20",
        "numOunces": 24
      },
      {
        "userID": 18,
        "date": "2019/06/20",
        "numOunces": 22
      },
      {
        "userID": 19,
        "date": "2019/06/20",
        "numOunces": 42
      },
      {
        "userID": 20,
        "date": "2019/06/20",
        "numOunces": 28
      },
      {
        "userID": 21,
        "date": "2019/06/20",
        "numOunces": 79
      },
      {
        "userID": 22,
        "date": "2019/06/20",
        "numOunces": 22
      },
      {
        "userID": 23,
        "date": "2019/06/20",
        "numOunces": 59
      },
      {
        "userID": 24,
        "date": "2019/06/20",
        "numOunces": 66
      },
      {
        "userID": 25,
        "date": "2019/06/20",
        "numOunces": 69
      },
      {
        "userID": 26,
        "date": "2019/06/20",
        "numOunces": 60
      },
      {
        "userID": 27,
        "date": "2019/06/20",
        "numOunces": 58
      },
      {
        "userID": 28,
        "date": "2019/06/20",
        "numOunces": 21
      },
      {
        "userID": 29,
        "date": "2019/06/20",
        "numOunces": 95
      },
      {
        "userID": 30,
        "date": "2019/06/20",
        "numOunces": 95
      },
      {
        "userID": 31,
        "date": "2019/06/20",
        "numOunces": 85
      },
      {
        "userID": 32,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 33,
        "date": "2019/06/20",
        "numOunces": 54
      },
      {
        "userID": 34,
        "date": "2019/06/20",
        "numOunces": 54
      },
      {
        "userID": 35,
        "date": "2019/06/20",
        "numOunces": 23
      },
      {
        "userID": 36,
        "date": "2019/06/20",
        "numOunces": 53
      },
      {
        "userID": 37,
        "date": "2019/06/20",
        "numOunces": 60
      },
      {
        "userID": 38,
        "date": "2019/06/20",
        "numOunces": 28
      },
      {
        "userID": 39,
        "date": "2019/06/20",
        "numOunces": 38
      },
      {
        "userID": 40,
        "date": "2019/06/20",
        "numOunces": 31
      },
      {
        "userID": 41,
        "date": "2019/06/20",
        "numOunces": 26
      },
      {
        "userID": 42,
        "date": "2019/06/20",
        "numOunces": 99
      },
      {
        "userID": 43,
        "date": "2019/06/20",
        "numOunces": 49
      },
      {
        "userID": 44,
        "date": "2019/06/20",
        "numOunces": 59
      },
      {
        "userID": 45,
        "date": "2019/06/20",
        "numOunces": 51
      },
      {
        "userID": 46,
        "date": "2019/06/20",
        "numOunces": 96
      },
      {
        "userID": 47,
        "date": "2019/06/20",
        "numOunces": 21
      },
      {
        "userID": 48,
        "date": "2019/06/20",
        "numOunces": 74
      },
      {
        "userID": 49,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 50,
        "date": "2019/06/20",
        "numOunces": 71
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "numOunces": 41
      },
      {
        "userID": 4,
        "date": "2019/06/21",
        "numOunces": 91
      },
      {
        "userID": 5,
        "date": "2019/06/21",
        "numOunces": 73
      },
      {
        "userID": 6,
        "date": "2019/06/21",
        "numOunces": 90
      },
      {
        "userID": 7,
        "date": "2019/06/21",
        "numOunces": 95
      },
      {
        "userID": 8,
        "date": "2019/06/21",
        "numOunces": 37
      },
      {
        "userID": 9,
        "date": "2019/06/21",
        "numOunces": 83
      },
      {
        "userID": 10,
        "date": "2019/06/21",
        "numOunces": 95
      },
      {
        "userID": 11,
        "date": "2019/06/21",
        "numOunces": 25
      },
      {
        "userID": 12,
        "date": "2019/06/21",
        "numOunces": 20
      },
      {
        "userID": 13,
        "date": "2019/06/21",
        "numOunces": 55
      },
      {
        "userID": 14,
        "date": "2019/06/21",
        "numOunces": 32
      },
      {
        "userID": 15,
        "date": "2019/06/21",
        "numOunces": 86
      },
      {
        "userID": 16,
        "date": "2019/06/21",
        "numOunces": 61
      },
      {
        "userID": 17,
        "date": "2019/06/21",
        "numOunces": 99
      },
      {
        "userID": 18,
        "date": "2019/06/21",
        "numOunces": 30
      },
      {
        "userID": 19,
        "date": "2019/06/21",
        "numOunces": 55
      },
      {
        "userID": 20,
        "date": "2019/06/21",
        "numOunces": 60
      },
      {
        "userID": 21,
        "date": "2019/06/21",
        "numOunces": 93
      },
      {
        "userID": 22,
        "date": "2019/06/21",
        "numOunces": 73
      },
      {
        "userID": 23,
        "date": "2019/06/21",
        "numOunces": 54
      },
      {
        "userID": 24,
        "date": "2019/06/21",
        "numOunces": 71
      },
      {
        "userID": 25,
        "date": "2019/06/21",
        "numOunces": 22
      },
      {
        "userID": 26,
        "date": "2019/06/21",
        "numOunces": 51
      },
      {
        "userID": 27,
        "date": "2019/06/21",
        "numOunces": 20
      },
      {
        "userID": 28,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 29,
        "date": "2019/06/21",
        "numOunces": 29
      },
      {
        "userID": 30,
        "date": "2019/06/21",
        "numOunces": 98
      },
      {
        "userID": 31,
        "date": "2019/06/21",
        "numOunces": 94
      },
      {
        "userID": 32,
        "date": "2019/06/21",
        "numOunces": 84
      },
      {
        "userID": 33,
        "date": "2019/06/21",
        "numOunces": 84
      },
      {
        "userID": 34,
        "date": "2019/06/21",
        "numOunces": 81
      },
      {
        "userID": 35,
        "date": "2019/06/21",
        "numOunces": 20
      },
      {
        "userID": 36,
        "date": "2019/06/21",
        "numOunces": 38
      },
      {
        "userID": 37,
        "date": "2019/06/21",
        "numOunces": 86
      },
      {
        "userID": 38,
        "date": "2019/06/21",
        "numOunces": 46
      },
      {
        "userID": 39,
        "date": "2019/06/21",
        "numOunces": 39
      },
      {
        "userID": 40,
        "date": "2019/06/21",
        "numOunces": 36
      },
      {
        "userID": 41,
        "date": "2019/06/21",
        "numOunces": 49
      },
      {
        "userID": 42,
        "date": "2019/06/21",
        "numOunces": 52
      },
      {
        "userID": 43,
        "date": "2019/06/21",
        "numOunces": 75
      },
      {
        "userID": 44,
        "date": "2019/06/21",
        "numOunces": 96
      },
      {
        "userID": 45,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 46,
        "date": "2019/06/21",
        "numOunces": 57
      },
      {
        "userID": 47,
        "date": "2019/06/21",
        "numOunces": 85
      },
      {
        "userID": 48,
        "date": "2019/06/21",
        "numOunces": 30
      },
      {
        "userID": 49,
        "date": "2019/06/21",
        "numOunces": 64
      },
      {
        "userID": 50,
        "date": "2019/06/21",
        "numOunces": 36
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 43
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 58
      },
      {
        "userID": 3,
        "date": "2019/06/22",
        "numOunces": 78
      },
      {
        "userID": 4,
        "date": "2019/06/22",
        "numOunces": 34
      },
      {
        "userID": 5,
        "date": "2019/06/22",
        "numOunces": 97
      },
      {
        "userID": 6,
        "date": "2019/06/22",
        "numOunces": 73
      },
      {
        "userID": 7,
        "date": "2019/06/22",
        "numOunces": 74
      },
      {
        "userID": 8,
        "date": "2019/06/22",
        "numOunces": 40
      },
      {
        "userID": 9,
        "date": "2019/06/22",
        "numOunces": 25
      },
      {
        "userID": 10,
        "date": "2019/06/22",
        "numOunces": 72
      },
      {
        "userID": 11,
        "date": "2019/06/22",
        "numOunces": 93
      },
      {
        "userID": 12,
        "date": "2019/06/22",
        "numOunces": 76
      },
      {
        "userID": 13,
        "date": "2019/06/22",
        "numOunces": 83
      },
      {
        "userID": 14,
        "date": "2019/06/22",
        "numOunces": 53
      },
      {
        "userID": 15,
        "date": "2019/06/22",
        "numOunces": 57
      },
      {
        "userID": 16,
        "date": "2019/06/22",
        "numOunces": 58
      },
      {
        "userID": 17,
        "date": "2019/06/22",
        "numOunces": 54
      },
      {
        "userID": 18,
        "date": "2019/06/22",
        "numOunces": 26
      },
      {
        "userID": 19,
        "date": "2019/06/22",
        "numOunces": 95
      },
      {
        "userID": 20,
        "date": "2019/06/22",
        "numOunces": 77
      },
      {
        "userID": 21,
        "date": "2019/06/22",
        "numOunces": 60
      },
      {
        "userID": 22,
        "date": "2019/06/22",
        "numOunces": 36
      },
      {
        "userID": 23,
        "date": "2019/06/22",
        "numOunces": 69
      },
      {
        "userID": 24,
        "date": "2019/06/22",
        "numOunces": 78
      },
      {
        "userID": 25,
        "date": "2019/06/22",
        "numOunces": 30
      },
      {
        "userID": 26,
        "date": "2019/06/22",
        "numOunces": 79
      },
      {
        "userID": 27,
        "date": "2019/06/22",
        "numOunces": 35
      },
      {
        "userID": 28,
        "date": "2019/06/22",
        "numOunces": 97
      },
      {
        "userID": 29,
        "date": "2019/06/22",
        "numOunces": 80
      },
      {
        "userID": 30,
        "date": "2019/06/22",
        "numOunces": 30
      },
      {
        "userID": 31,
        "date": "2019/06/22",
        "numOunces": 50
      },
      {
        "userID": 32,
        "date": "2019/06/22",
        "numOunces": 66
      },
      {
        "userID": 33,
        "date": "2019/06/22",
        "numOunces": 69
      },
      {
        "userID": 34,
        "date": "2019/06/22",
        "numOunces": 47
      },
      {
        "userID": 35,
        "date": "2019/06/22",
        "numOunces": 83
      },
      {
        "userID": 36,
        "date": "2019/06/22",
        "numOunces": 36
      },
      {
        "userID": 37,
        "date": "2019/06/22",
        "numOunces": 81
      },
      {
        "userID": 38,
        "date": "2019/06/22",
        "numOunces": 40
      },
      {
        "userID": 39,
        "date": "2019/06/22",
        "numOunces": 22
      },
      {
        "userID": 40,
        "date": "2019/06/22",
        "numOunces": 78
      },
      {
        "userID": 41,
        "date": "2019/06/22",
        "numOunces": 64
      },
      {
        "userID": 42,
        "date": "2019/06/22",
        "numOunces": 99
      },
      {
        "userID": 43,
        "date": "2019/06/22",
        "numOunces": 65
      },
      {
        "userID": 44,
        "date": "2019/06/22",
        "numOunces": 58
      },
      {
        "userID": 45,
        "date": "2019/06/22",
        "numOunces": 25
      },
      {
        "userID": 46,
        "date": "2019/06/22",
        "numOunces": 64
      },
      {
        "userID": 47,
        "date": "2019/06/22",
        "numOunces": 22
      },
      {
        "userID": 48,
        "date": "2019/06/22",
        "numOunces": 34
      },
      {
        "userID": 49,
        "date": "2019/06/22",
        "numOunces": 61
      },
      {
        "userID": 50,
        "date": "2019/06/22",
        "numOunces": 43
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 39
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numOunces": 44
      },
      {
        "userID": 3,
        "date": "2019/06/23",
        "numOunces": 35
      },
      {
        "userID": 4,
        "date": "2019/06/23",
        "numOunces": 62
      },
      {
        "userID": 5,
        "date": "2019/06/23",
        "numOunces": 73
      },
      {
        "userID": 6,
        "date": "2019/06/23",
        "numOunces": 71
      },
      {
        "userID": 7,
        "date": "2019/06/23",
        "numOunces": 94
      },
      {
        "userID": 8,
        "date": "2019/06/23",
        "numOunces": 38
      },
      {
        "userID": 9,
        "date": "2019/06/23",
        "numOunces": 24
      },
      {
        "userID": 10,
        "date": "2019/06/23",
        "numOunces": 81
      },
      {
        "userID": 11,
        "date": "2019/06/23",
        "numOunces": 95
      },
      {
        "userID": 12,
        "date": "2019/06/23",
        "numOunces": 83
      },
      {
        "userID": 13,
        "date": "2019/06/23",
        "numOunces": 74
      },
      {
        "userID": 14,
        "date": "2019/06/23",
        "numOunces": 42
      },
      {
        "userID": 15,
        "date": "2019/06/23",
        "numOunces": 56
      },
      {
        "userID": 16,
        "date": "2019/06/23",
        "numOunces": 65
      },
      {
        "userID": 17,
        "date": "2019/06/23",
        "numOunces": 86
      },
      {
        "userID": 18,
        "date": "2019/06/23",
        "numOunces": 73
      },
      {
        "userID": 19,
        "date": "2019/06/23",
        "numOunces": 81
      },
      {
        "userID": 20,
        "date": "2019/06/23",
        "numOunces": 30
      },
      {
        "userID": 21,
        "date": "2019/06/23",
        "numOunces": 92
      },
      {
        "userID": 22,
        "date": "2019/06/23",
        "numOunces": 83
      },
      {
        "userID": 23,
        "date": "2019/06/23",
        "numOunces": 35
      },
      {
        "userID": 24,
        "date": "2019/06/23",
        "numOunces": 65
      },
      {
        "userID": 25,
        "date": "2019/06/23",
        "numOunces": 53
      },
      {
        "userID": 26,
        "date": "2019/06/23",
        "numOunces": 62
      },
      {
        "userID": 27,
        "date": "2019/06/23",
        "numOunces": 20
      },
      {
        "userID": 28,
        "date": "2019/06/23",
        "numOunces": 48
      },
      {
        "userID": 29,
        "date": "2019/06/23",
        "numOunces": 42
      },
      {
        "userID": 30,
        "date": "2019/06/23",
        "numOunces": 41
      },
      {
        "userID": 31,
        "date": "2019/06/23",
        "numOunces": 59
      },
      {
        "userID": 32,
        "date": "2019/06/23",
        "numOunces": 33
      },
      {
        "userID": 33,
        "date": "2019/06/23",
        "numOunces": 94
      },
      {
        "userID": 34,
        "date": "2019/06/23",
        "numOunces": 75
      },
      {
        "userID": 35,
        "date": "2019/06/23",
        "numOunces": 60
      },
      {
        "userID": 36,
        "date": "2019/06/23",
        "numOunces": 27
      },
      {
        "userID": 37,
        "date": "2019/06/23",
        "numOunces": 55
      },
      {
        "userID": 38,
        "date": "2019/06/23",
        "numOunces": 29
      },
      {
        "userID": 39,
        "date": "2019/06/23",
        "numOunces": 79
      },
      {
        "userID": 40,
        "date": "2019/06/23",
        "numOunces": 97
      },
      {
        "userID": 41,
        "date": "2019/06/23",
        "numOunces": 77
      },
      {
        "userID": 42,
        "date": "2019/06/23",
        "numOunces": 40
      },
      {
        "userID": 43,
        "date": "2019/06/23",
        "numOunces": 37
      },
      {
        "userID": 44,
        "date": "2019/06/23",
        "numOunces": 39
      },
      {
        "userID": 45,
        "date": "2019/06/23",
        "numOunces": 60
      },
      {
        "userID": 46,
        "date": "2019/06/23",
        "numOunces": 79
      },
      {
        "userID": 47,
        "date": "2019/06/23",
        "numOunces": 40
      },
      {
        "userID": 48,
        "date": "2019/06/23",
        "numOunces": 22
      },
      {
        "userID": 49,
        "date": "2019/06/23",
        "numOunces": 90
      },
      {
        "userID": 50,
        "date": "2019/06/23",
        "numOunces": 26
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 61
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "numOunces": 33
      },
      {
        "userID": 3,
        "date": "2019/06/24",
        "numOunces": 40
      },
      {
        "userID": 4,
        "date": "2019/06/24",
        "numOunces": 66
      },
      {
        "userID": 5,
        "date": "2019/06/24",
        "numOunces": 30
      },
      {
        "userID": 6,
        "date": "2019/06/24",
        "numOunces": 45
      },
      {
        "userID": 7,
        "date": "2019/06/24",
        "numOunces": 54
      },
      {
        "userID": 8,
        "date": "2019/06/24",
        "numOunces": 58
      },
      {
        "userID": 9,
        "date": "2019/06/24",
        "numOunces": 79
      },
      {
        "userID": 10,
        "date": "2019/06/24",
        "numOunces": 72
      },
      {
        "userID": 11,
        "date": "2019/06/24",
        "numOunces": 31
      },
      {
        "userID": 12,
        "date": "2019/06/24",
        "numOunces": 39
      },
      {
        "userID": 13,
        "date": "2019/06/24",
        "numOunces": 82
      },
      {
        "userID": 14,
        "date": "2019/06/24",
        "numOunces": 63
      },
      {
        "userID": 15,
        "date": "2019/06/24",
        "numOunces": 27
      },
      {
        "userID": 16,
        "date": "2019/06/24",
        "numOunces": 100
      },
      {
        "userID": 17,
        "date": "2019/06/24",
        "numOunces": 21
      },
      {
        "userID": 18,
        "date": "2019/06/24",
        "numOunces": 72
      },
      {
        "userID": 19,
        "date": "2019/06/24",
        "numOunces": 60
      },
      {
        "userID": 20,
        "date": "2019/06/24",
        "numOunces": 77
      },
      {
        "userID": 21,
        "date": "2019/06/24",
        "numOunces": 73
      },
      {
        "userID": 22,
        "date": "2019/06/24",
        "numOunces": 74
      },
      {
        "userID": 23,
        "date": "2019/06/24",
        "numOunces": 32
      },
      {
        "userID": 24,
        "date": "2019/06/24",
        "numOunces": 71
      },
      {
        "userID": 25,
        "date": "2019/06/24",
        "numOunces": 82
      },
      {
        "userID": 26,
        "date": "2019/06/24",
        "numOunces": 45
      },
      {
        "userID": 27,
        "date": "2019/06/24",
        "numOunces": 73
      },
      {
        "userID": 28,
        "date": "2019/06/24",
        "numOunces": 63
      },
      {
        "userID": 29,
        "date": "2019/06/24",
        "numOunces": 88
      },
      {
        "userID": 30,
        "date": "2019/06/24",
        "numOunces": 59
      },
      {
        "userID": 31,
        "date": "2019/06/24",
        "numOunces": 22
      },
      {
        "userID": 32,
        "date": "2019/06/24",
        "numOunces": 53
      },
      {
        "userID": 33,
        "date": "2019/06/24",
        "numOunces": 29
      },
      {
        "userID": 34,
        "date": "2019/06/24",
        "numOunces": 21
      },
      {
        "userID": 35,
        "date": "2019/06/24",
        "numOunces": 89
      },
      {
        "userID": 36,
        "date": "2019/06/24",
        "numOunces": 50
      },
      {
        "userID": 37,
        "date": "2019/06/24",
        "numOunces": 70
      },
      {
        "userID": 38,
        "date": "2019/06/24",
        "numOunces": 24
      },
      {
        "userID": 39,
        "date": "2019/06/24",
        "numOunces": 74
      },
      {
        "userID": 40,
        "date": "2019/06/24",
        "numOunces": 35
      },
      {
        "userID": 41,
        "date": "2019/06/24",
        "numOunces": 73
      },
      {
        "userID": 42,
        "date": "2019/06/24",
        "numOunces": 90
      },
      {
        "userID": 43,
        "date": "2019/06/24",
        "numOunces": 43
      },
      {
        "userID": 44,
        "date": "2019/06/24",
        "numOunces": 45
      },
      {
        "userID": 45,
        "date": "2019/06/24",
        "numOunces": 45
      },
      {
        "userID": 46,
        "date": "2019/06/24",
        "numOunces": 28
      },
      {
        "userID": 47,
        "date": "2019/06/24",
        "numOunces": 39
      },
      {
        "userID": 48,
        "date": "2019/06/24",
        "numOunces": 46
      },
      {
        "userID": 49,
        "date": "2019/06/24",
        "numOunces": 42
      },
      {
        "userID": 50,
        "date": "2019/06/24",
        "numOunces": 28
      },
      {
        "userID": 1,
        "date": "2019/06/25",
        "numOunces": 51
      },
      {
        "userID": 2,
        "date": "2019/06/25",
        "numOunces": 67
      },
      {
        "userID": 3,
        "date": "2019/06/25",
        "numOunces": 47
      },
      {
        "userID": 4,
        "date": "2019/06/25",
        "numOunces": 27
      },
      {
        "userID": 5,
        "date": "2019/06/25",
        "numOunces": 76
      },
      {
        "userID": 6,
        "date": "2019/06/25",
        "numOunces": 63
      },
      {
        "userID": 7,
        "date": "2019/06/25",
        "numOunces": 23
      },
      {
        "userID": 8,
        "date": "2019/06/25",
        "numOunces": 74
      },
      {
        "userID": 9,
        "date": "2019/06/25",
        "numOunces": 90
      },
      {
        "userID": 10,
        "date": "2019/06/25",
        "numOunces": 70
      },
      {
        "userID": 11,
        "date": "2019/06/25",
        "numOunces": 21
      },
      {
        "userID": 12,
        "date": "2019/06/25",
        "numOunces": 47
      },
      {
        "userID": 13,
        "date": "2019/06/25",
        "numOunces": 52
      },
      {
        "userID": 14,
        "date": "2019/06/25",
        "numOunces": 42
      },
      {
        "userID": 15,
        "date": "2019/06/25",
        "numOunces": 58
      },
      {
        "userID": 16,
        "date": "2019/06/25",
        "numOunces": 34
      },
      {
        "userID": 17,
        "date": "2019/06/25",
        "numOunces": 29
      },
      {
        "userID": 18,
        "date": "2019/06/25",
        "numOunces": 69
      },
      {
        "userID": 19,
        "date": "2019/06/25",
        "numOunces": 88
      },
      {
        "userID": 20,
        "date": "2019/06/25",
        "numOunces": 36
      },
      {
        "userID": 21,
        "date": "2019/06/25",
        "numOunces": 90
      },
      {
        "userID": 22,
        "date": "2019/06/25",
        "numOunces": 46
      },
      {
        "userID": 23,
        "date": "2019/06/25",
        "numOunces": 59
      },
      {
        "userID": 24,
        "date": "2019/06/25",
        "numOunces": 63
      },
      {
        "userID": 25,
        "date": "2019/06/25",
        "numOunces": 81
      },
      {
        "userID": 26,
        "date": "2019/06/25",
        "numOunces": 82
      },
      {
        "userID": 27,
        "date": "2019/06/25",
        "numOunces": 97
      },
      {
        "userID": 28,
        "date": "2019/06/25",
        "numOunces": 24
      },
      {
        "userID": 29,
        "date": "2019/06/25",
        "numOunces": 67
      },
      {
        "userID": 30,
        "date": "2019/06/25",
        "numOunces": 47
      },
      {
        "userID": 31,
        "date": "2019/06/25",
        "numOunces": 56
      },
      {
        "userID": 32,
        "date": "2019/06/25",
        "numOunces": 61
      },
      {
        "userID": 33,
        "date": "2019/06/25",
        "numOunces": 24
      },
      {
        "userID": 34,
        "date": "2019/06/25",
        "numOunces": 27
      },
      {
        "userID": 35,
        "date": "2019/06/25",
        "numOunces": 30
      },
      {
        "userID": 36,
        "date": "2019/06/25",
        "numOunces": 40
      },
      {
        "userID": 37,
        "date": "2019/06/25",
        "numOunces": 20
      },
      {
        "userID": 38,
        "date": "2019/06/25",
        "numOunces": 45
      },
      {
        "userID": 39,
        "date": "2019/06/25",
        "numOunces": 49
      },
      {
        "userID": 40,
        "date": "2019/06/25",
        "numOunces": 32
      },
      {
        "userID": 41,
        "date": "2019/06/25",
        "numOunces": 53
      },
      {
        "userID": 42,
        "date": "2019/06/25",
        "numOunces": 52
      },
      {
        "userID": 43,
        "date": "2019/06/25",
        "numOunces": 76
      },
      {
        "userID": 44,
        "date": "2019/06/25",
        "numOunces": 23
      },
      {
        "userID": 45,
        "date": "2019/06/25",
        "numOunces": 51
      },
      {
        "userID": 46,
        "date": "2019/06/25",
        "numOunces": 68
      },
      {
        "userID": 47,
        "date": "2019/06/25",
        "numOunces": 83
      },
      {
        "userID": 48,
        "date": "2019/06/25",
        "numOunces": 81
      },
      {
        "userID": 49,
        "date": "2019/06/25",
        "numOunces": 37
      },
      {
        "userID": 50,
        "date": "2019/06/25",
        "numOunces": 89
      },
      {
        "userID": 1,
        "date": "2019/06/26",
        "numOunces": 52
      },
      {
        "userID": 2,
        "date": "2019/06/26",
        "numOunces": 27
      },
      {
        "userID": 3,
        "date": "2019/06/26",
        "numOunces": 48
      },
      {
        "userID": 4,
        "date": "2019/06/26",
        "numOunces": 44
      },
      {
        "userID": 5,
        "date": "2019/06/26",
        "numOunces": 26
      },
      {
        "userID": 6,
        "date": "2019/06/26",
        "numOunces": 44
      },
      {
        "userID": 7,
        "date": "2019/06/26",
        "numOunces": 23
      },
      {
        "userID": 8,
        "date": "2019/06/26",
        "numOunces": 72
      },
      {
        "userID": 9,
        "date": "2019/06/26",
        "numOunces": 96
      },
      {
        "userID": 10,
        "date": "2019/06/26",
        "numOunces": 91
      },
      {
        "userID": 11,
        "date": "2019/06/26",
        "numOunces": 90
      },
      {
        "userID": 12,
        "date": "2019/06/26",
        "numOunces": 69
      },
      {
        "userID": 13,
        "date": "2019/06/26",
        "numOunces": 34
      },
      {
        "userID": 14,
        "date": "2019/06/26",
        "numOunces": 74
      },
      {
        "userID": 15,
        "date": "2019/06/26",
        "numOunces": 51
      },
      {
        "userID": 16,
        "date": "2019/06/26",
        "numOunces": 90
      },
      {
        "userID": 17,
        "date": "2019/06/26",
        "numOunces": 35
      },
      {
        "userID": 18,
        "date": "2019/06/26",
        "numOunces": 47
      },
      {
        "userID": 19,
        "date": "2019/06/26",
        "numOunces": 65
      },
      {
        "userID": 20,
        "date": "2019/06/26",
        "numOunces": 78
      },
      {
        "userID": 21,
        "date": "2019/06/26",
        "numOunces": 93
      },
      {
        "userID": 22,
        "date": "2019/06/26",
        "numOunces": 37
      },
      {
        "userID": 23,
        "date": "2019/06/26",
        "numOunces": 80
      },
      {
        "userID": 24,
        "date": "2019/06/26",
        "numOunces": 35
      },
      {
        "userID": 25,
        "date": "2019/06/26",
        "numOunces": 56
      },
      {
        "userID": 26,
        "date": "2019/06/26",
        "numOunces": 47
      },
      {
        "userID": 27,
        "date": "2019/06/26",
        "numOunces": 48
      },
      {
        "userID": 28,
        "date": "2019/06/26",
        "numOunces": 64
      },
      {
        "userID": 29,
        "date": "2019/06/26",
        "numOunces": 22
      },
      {
        "userID": 30,
        "date": "2019/06/26",
        "numOunces": 66
      },
      {
        "userID": 31,
        "date": "2019/06/26",
        "numOunces": 58
      },
      {
        "userID": 32,
        "date": "2019/06/26",
        "numOunces": 28
      },
      {
        "userID": 33,
        "date": "2019/06/26",
        "numOunces": 38
      },
      {
        "userID": 34,
        "date": "2019/06/26",
        "numOunces": 78
      },
      {
        "userID": 35,
        "date": "2019/06/26",
        "numOunces": 84
      },
      {
        "userID": 36,
        "date": "2019/06/26",
        "numOunces": 23
      },
      {
        "userID": 37,
        "date": "2019/06/26",
        "numOunces": 98
      },
      {
        "userID": 38,
        "date": "2019/06/26",
        "numOunces": 36
      },
      {
        "userID": 39,
        "date": "2019/06/26",
        "numOunces": 83
      },
      {
        "userID": 40,
        "date": "2019/06/26",
        "numOunces": 64
      },
      {
        "userID": 41,
        "date": "2019/06/26",
        "numOunces": 52
      },
      {
        "userID": 42,
        "date": "2019/06/26",
        "numOunces": 67
      },
      {
        "userID": 43,
        "date": "2019/06/26",
        "numOunces": 28
      },
      {
        "userID": 44,
        "date": "2019/06/26",
        "numOunces": 75
      },
      {
        "userID": 45,
        "date": "2019/06/26",
        "numOunces": 57
      },
      {
        "userID": 46,
        "date": "2019/06/26",
        "numOunces": 98
      },
      {
        "userID": 47,
        "date": "2019/06/26",
        "numOunces": 73
      },
      {
        "userID": 48,
        "date": "2019/06/26",
        "numOunces": 76
      },
      {
        "userID": 49,
        "date": "2019/06/26",
        "numOunces": 65
      },
      {
        "userID": 50,
        "date": "2019/06/26",
        "numOunces": 44
      },
      {
        "userID": 1,
        "date": "2019/06/27",
        "numOunces": 29
      },
      {
        "userID": 2,
        "date": "2019/06/27",
        "numOunces": 70
      },
      {
        "userID": 3,
        "date": "2019/06/27",
        "numOunces": 89
      },
      {
        "userID": 4,
        "date": "2019/06/27",
        "numOunces": 83
      },
      {
        "userID": 5,
        "date": "2019/06/27",
        "numOunces": 52
      },
      {
        "userID": 6,
        "date": "2019/06/27",
        "numOunces": 30
      },
      {
        "userID": 7,
        "date": "2019/06/27",
        "numOunces": 30
      },
      {
        "userID": 8,
        "date": "2019/06/27",
        "numOunces": 65
      },
      {
        "userID": 9,
        "date": "2019/06/27",
        "numOunces": 91
      },
      {
        "userID": 10,
        "date": "2019/06/27",
        "numOunces": 29
      },
      {
        "userID": 11,
        "date": "2019/06/27",
        "numOunces": 90
      },
      {
        "userID": 12,
        "date": "2019/06/27",
        "numOunces": 50
      },
      {
        "userID": 13,
        "date": "2019/06/27",
        "numOunces": 47
      },
      {
        "userID": 14,
        "date": "2019/06/27",
        "numOunces": 23
      },
      {
        "userID": 15,
        "date": "2019/06/27",
        "numOunces": 100
      },
      {
        "userID": 16,
        "date": "2019/06/27",
        "numOunces": 34
      },
      {
        "userID": 17,
        "date": "2019/06/27",
        "numOunces": 82
      },
      {
        "userID": 18,
        "date": "2019/06/27",
        "numOunces": 48
      },
      {
        "userID": 19,
        "date": "2019/06/27",
        "numOunces": 72
      },
      {
        "userID": 20,
        "date": "2019/06/27",
        "numOunces": 27
      },
      {
        "userID": 21,
        "date": "2019/06/27",
        "numOunces": 34
      },
      {
        "userID": 22,
        "date": "2019/06/27",
        "numOunces": 41
      },
      {
        "userID": 23,
        "date": "2019/06/27",
        "numOunces": 86
      },
      {
        "userID": 24,
        "date": "2019/06/27",
        "numOunces": 61
      },
      {
        "userID": 25,
        "date": "2019/06/27",
        "numOunces": 84
      },
      {
        "userID": 26,
        "date": "2019/06/27",
        "numOunces": 95
      },
      {
        "userID": 27,
        "date": "2019/06/27",
        "numOunces": 78
      },
      {
        "userID": 28,
        "date": "2019/06/27",
        "numOunces": 72
      },
      {
        "userID": 29,
        "date": "2019/06/27",
        "numOunces": 38
      },
      {
        "userID": 30,
        "date": "2019/06/27",
        "numOunces": 76
      },
      {
        "userID": 31,
        "date": "2019/06/27",
        "numOunces": 54
      },
      {
        "userID": 32,
        "date": "2019/06/27",
        "numOunces": 78
      },
      {
        "userID": 33,
        "date": "2019/06/27",
        "numOunces": 39
      },
      {
        "userID": 34,
        "date": "2019/06/27",
        "numOunces": 48
      },
      {
        "userID": 35,
        "date": "2019/06/27",
        "numOunces": 97
      },
      {
        "userID": 36,
        "date": "2019/06/27",
        "numOunces": 100
      },
      {
        "userID": 37,
        "date": "2019/06/27",
        "numOunces": 91
      },
      {
        "userID": 38,
        "date": "2019/06/27",
        "numOunces": 40
      },
      {
        "userID": 39,
        "date": "2019/06/27",
        "numOunces": 70
      },
      {
        "userID": 40,
        "date": "2019/06/27",
        "numOunces": 36
      },
      {
        "userID": 41,
        "date": "2019/06/27",
        "numOunces": 35
      },
      {
        "userID": 42,
        "date": "2019/06/27",
        "numOunces": 27
      },
      {
        "userID": 43,
        "date": "2019/06/27",
        "numOunces": 43
      },
      {
        "userID": 44,
        "date": "2019/06/27",
        "numOunces": 45
      },
      {
        "userID": 45,
        "date": "2019/06/27",
        "numOunces": 32
      },
      {
        "userID": 46,
        "date": "2019/06/27",
        "numOunces": 69
      },
      {
        "userID": 47,
        "date": "2019/06/27",
        "numOunces": 25
      },
      {
        "userID": 48,
        "date": "2019/06/27",
        "numOunces": 49
      },
      {
        "userID": 49,
        "date": "2019/06/27",
        "numOunces": 38
      },
      {
        "userID": 50,
        "date": "2019/06/27",
        "numOunces": 46
      },
      {
        "userID": 1,
        "date": "2019/06/28",
        "numOunces": 57
      },
      {
        "userID": 2,
        "date": "2019/06/28",
        "numOunces": 56
      },
      {
        "userID": 3,
        "date": "2019/06/28",
        "numOunces": 66
      },
      {
        "userID": 4,
        "date": "2019/06/28",
        "numOunces": 47
      },
      {
        "userID": 5,
        "date": "2019/06/28",
        "numOunces": 97
      },
      {
        "userID": 6,
        "date": "2019/06/28",
        "numOunces": 70
      },
      {
        "userID": 7,
        "date": "2019/06/28",
        "numOunces": 95
      },
      {
        "userID": 8,
        "date": "2019/06/28",
        "numOunces": 36
      },
      {
        "userID": 9,
        "date": "2019/06/28",
        "numOunces": 29
      },
      {
        "userID": 10,
        "date": "2019/06/28",
        "numOunces": 40
      },
      {
        "userID": 11,
        "date": "2019/06/28",
        "numOunces": 33
      },
      {
        "userID": 12,
        "date": "2019/06/28",
        "numOunces": 70
      },
      {
        "userID": 13,
        "date": "2019/06/28",
        "numOunces": 56
      },
      {
        "userID": 14,
        "date": "2019/06/28",
        "numOunces": 27
      },
      {
        "userID": 15,
        "date": "2019/06/28",
        "numOunces": 82
      },
      {
        "userID": 16,
        "date": "2019/06/28",
        "numOunces": 49
      },
      {
        "userID": 17,
        "date": "2019/06/28",
        "numOunces": 80
      },
      {
        "userID": 18,
        "date": "2019/06/28",
        "numOunces": 93
      },
      {
        "userID": 19,
        "date": "2019/06/28",
        "numOunces": 52
      },
      {
        "userID": 20,
        "date": "2019/06/28",
        "numOunces": 78
      },
      {
        "userID": 21,
        "date": "2019/06/28",
        "numOunces": 92
      },
      {
        "userID": 22,
        "date": "2019/06/28",
        "numOunces": 89
      },
      {
        "userID": 23,
        "date": "2019/06/28",
        "numOunces": 21
      },
      {
        "userID": 24,
        "date": "2019/06/28",
        "numOunces": 46
      },
      {
        "userID": 25,
        "date": "2019/06/28",
        "numOunces": 59
      },
      {
        "userID": 26,
        "date": "2019/06/28",
        "numOunces": 84
      },
      {
        "userID": 27,
        "date": "2019/06/28",
        "numOunces": 24
      },
      {
        "userID": 28,
        "date": "2019/06/28",
        "numOunces": 65
      },
      {
        "userID": 29,
        "date": "2019/06/28",
        "numOunces": 22
      },
      {
        "userID": 30,
        "date": "2019/06/28",
        "numOunces": 74
      },
      {
        "userID": 31,
        "date": "2019/06/28",
        "numOunces": 70
      },
      {
        "userID": 32,
        "date": "2019/06/28",
        "numOunces": 47
      },
      {
        "userID": 33,
        "date": "2019/06/28",
        "numOunces": 45
      },
      {
        "userID": 34,
        "date": "2019/06/28",
        "numOunces": 79
      },
      {
        "userID": 35,
        "date": "2019/06/28",
        "numOunces": 92
      },
      {
        "userID": 36,
        "date": "2019/06/28",
        "numOunces": 53
      },
      {
        "userID": 37,
        "date": "2019/06/28",
        "numOunces": 25
      },
      {
        "userID": 38,
        "date": "2019/06/28",
        "numOunces": 36
      },
      {
        "userID": 39,
        "date": "2019/06/28",
        "numOunces": 63
      },
      {
        "userID": 40,
        "date": "2019/06/28",
        "numOunces": 47
      },
      {
        "userID": 41,
        "date": "2019/06/28",
        "numOunces": 91
      },
      {
        "userID": 42,
        "date": "2019/06/28",
        "numOunces": 90
      },
      {
        "userID": 43,
        "date": "2019/06/28",
        "numOunces": 95
      },
      {
        "userID": 44,
        "date": "2019/06/28",
        "numOunces": 51
      },
      {
        "userID": 45,
        "date": "2019/06/28",
        "numOunces": 98
      },
      {
        "userID": 46,
        "date": "2019/06/28",
        "numOunces": 47
      },
      {
        "userID": 47,
        "date": "2019/06/28",
        "numOunces": 20
      },
      {
        "userID": 48,
        "date": "2019/06/28",
        "numOunces": 59
      },
      {
        "userID": 49,
        "date": "2019/06/28",
        "numOunces": 52
      },
      {
        "userID": 50,
        "date": "2019/06/28",
        "numOunces": 67
      },
      {
        "userID": 1,
        "date": "2019/06/29",
        "numOunces": 99
      },
      {
        "userID": 2,
        "date": "2019/06/29",
        "numOunces": 35
      },
      {
        "userID": 3,
        "date": "2019/06/29",
        "numOunces": 41
      },
      {
        "userID": 4,
        "date": "2019/06/29",
        "numOunces": 68
      },
      {
        "userID": 5,
        "date": "2019/06/29",
        "numOunces": 86
      },
      {
        "userID": 6,
        "date": "2019/06/29",
        "numOunces": 70
      },
      {
        "userID": 7,
        "date": "2019/06/29",
        "numOunces": 52
      },
      {
        "userID": 8,
        "date": "2019/06/29",
        "numOunces": 53
      },
      {
        "userID": 9,
        "date": "2019/06/29",
        "numOunces": 77
      },
      {
        "userID": 10,
        "date": "2019/06/29",
        "numOunces": 54
      },
      {
        "userID": 11,
        "date": "2019/06/29",
        "numOunces": 59
      },
      {
        "userID": 12,
        "date": "2019/06/29",
        "numOunces": 72
      },
      {
        "userID": 13,
        "date": "2019/06/29",
        "numOunces": 71
      },
      {
        "userID": 14,
        "date": "2019/06/29",
        "numOunces": 32
      },
      {
        "userID": 15,
        "date": "2019/06/29",
        "numOunces": 92
      },
      {
        "userID": 16,
        "date": "2019/06/29",
        "numOunces": 53
      },
      {
        "userID": 17,
        "date": "2019/06/29",
        "numOunces": 41
      },
      {
        "userID": 18,
        "date": "2019/06/29",
        "numOunces": 30
      },
      {
        "userID": 19,
        "date": "2019/06/29",
        "numOunces": 34
      },
      {
        "userID": 20,
        "date": "2019/06/29",
        "numOunces": 86
      },
      {
        "userID": 21,
        "date": "2019/06/29",
        "numOunces": 95
      },
      {
        "userID": 22,
        "date": "2019/06/29",
        "numOunces": 23
      },
      {
        "userID": 23,
        "date": "2019/06/29",
        "numOunces": 75
      },
      {
        "userID": 24,
        "date": "2019/06/29",
        "numOunces": 65
      },
      {
        "userID": 25,
        "date": "2019/06/29",
        "numOunces": 64
      },
      {
        "userID": 26,
        "date": "2019/06/29",
        "numOunces": 55
      },
      {
        "userID": 27,
        "date": "2019/06/29",
        "numOunces": 62
      },
      {
        "userID": 28,
        "date": "2019/06/29",
        "numOunces": 72
      },
      {
        "userID": 29,
        "date": "2019/06/29",
        "numOunces": 65
      },
      {
        "userID": 30,
        "date": "2019/06/29",
        "numOunces": 54
      },
      {
        "userID": 31,
        "date": "2019/06/29",
        "numOunces": 86
      },
      {
        "userID": 32,
        "date": "2019/06/29",
        "numOunces": 79
      },
      {
        "userID": 33,
        "date": "2019/06/29",
        "numOunces": 48
      },
      {
        "userID": 34,
        "date": "2019/06/29",
        "numOunces": 36
      },
      {
        "userID": 35,
        "date": "2019/06/29",
        "numOunces": 89
      },
      {
        "userID": 36,
        "date": "2019/06/29",
        "numOunces": 41
      },
      {
        "userID": 37,
        "date": "2019/06/29",
        "numOunces": 85
      },
      {
        "userID": 38,
        "date": "2019/06/29",
        "numOunces": 66
      },
      {
        "userID": 39,
        "date": "2019/06/29",
        "numOunces": 96
      },
      {
        "userID": 40,
        "date": "2019/06/29",
        "numOunces": 39
      },
      {
        "userID": 41,
        "date": "2019/06/29",
        "numOunces": 50
      },
      {
        "userID": 42,
        "date": "2019/06/29",
        "numOunces": 91
      },
      {
        "userID": 43,
        "date": "2019/06/29",
        "numOunces": 93
      },
      {
        "userID": 44,
        "date": "2019/06/29",
        "numOunces": 81
      },
      {
        "userID": 45,
        "date": "2019/06/29",
        "numOunces": 70
      },
      {
        "userID": 46,
        "date": "2019/06/29",
        "numOunces": 89
      },
      {
        "userID": 47,
        "date": "2019/06/29",
        "numOunces": 32
      },
      {
        "userID": 48,
        "date": "2019/06/29",
        "numOunces": 80
      },
      {
        "userID": 49,
        "date": "2019/06/29",
        "numOunces": 46
      },
      {
        "userID": 50,
        "date": "2019/06/29",
        "numOunces": 36
      }
    ];

    repo = new HydrationRepo(data);
  });

  it('should contain Hydration instances', () => {
    expect(repo.data[0]).to.be.an.instanceof(Hydration);
    expect(repo.data[5]).to.be.an.instanceof(Hydration);
  });

  it('should be able to calculate user\'s avg fluid oz consumed for all time', () => {
    const avg = repo.calculateAvgOzOverTime(34);

    expect(avg).to.be.equal(54);
  });
  
  it('should be able to return fluid oz of water consumed each day for a given week for a given user', () => {    
    const startDate = '2019/06/15';
    const endDate = '2019/06/22';
    const dates = [startDate, endDate];    
    const waterConsumed = repo.returnWaterConsumed(34, dates);
    const ozConsumed = [22, 76, 34, 36, 91, 54, 81];

    expect(waterConsumed).to.be.deep.equal(ozConsumed);
  });

  it.skip('should be able to calculate avg oz of water consumed in a week, rounding down', () => {
    const startingDate = '2019/06/15';        
    const avgOzConsumed = repo.returnAvgWaterConsumed(34, startingDate);

    expect(avgOzConsumed).to.equal(Math.round(56));
  });
});
