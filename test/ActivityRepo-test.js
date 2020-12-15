const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/UserRepo');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  let userDataset, userRepo, dataset, activityRepo;

  beforeEach(() => {
    userDataset = [
      {
        "id": 11,
        "name": "Brian Forbes",
        "address": "123 Blah St, Denver CO, 66666",
        "email": "stuffandthings@gmail.com",
        "strideLength": 2.4,
        "dailyStepGoal": 10000,
        "friends": [
          2,
          3,
          4
        ]
      },
      {
        "id": 22,
        "name": "Eric Campbell",
        "address": "123 SomeOther St, Denver CO, 66666",
        "email": "mainlyetcetera@gmail.com",
        "strideLength": 2.3,
        "dailyStepGoal": 5,
        "friends": [
          1,
          3
        ]
      },
      {
        "id": 33,
        "name": "David Whitaker",
        "address": "124 Random Lane, Denver CO, 66666",
        "email": "damwhitmaybeidontknow@gmail.com",
        "strideLength": 2.6,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          4
        ]
      },
      {
        "id": 44,
        "name": "Travis Rollins",
        "address": "234 Very Random Street, Denver CO, 66666",
        "email": "laskdjfaslkdj@gmail.com",
        "strideLength": 2.1,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          3
        ]
      }
    ]

    userRepo = new UserRepo(userDataset);

    dataset = [
      {
        "userID": 1,
        "date": "2019/09/14",
        "numSteps": 4559,
        "minutesActive": 153,
        "flightsOfStairs": 44
      },
      {
        "userID": 2,
        "date": "2019/09/14",
        "numSteps": 10872,
        "minutesActive": 153,
        "flightsOfStairs": 2
      },
      {
        "userID": 3,
        "date": "2019/09/14",
        "numSteps": 10691,
        "minutesActive": 245,
        "flightsOfStairs": 1
      },
      {
        "userID": 4,
        "date": "2019/09/14",
        "numSteps": 7255,
        "minutesActive": 36,
        "flightsOfStairs": 19
      },
      {
        "userID": 5,
        "date": "2019/09/14",
        "numSteps": 13005,
        "minutesActive": 114,
        "flightsOfStairs": 11
      },
      {
        "userID": 6,
        "date": "2019/09/14",
        "numSteps": 4608,
        "minutesActive": 150,
        "flightsOfStairs": 18
      },
      {
        "userID": 7,
        "date": "2019/09/14",
        "numSteps": 12935,
        "minutesActive": 78,
        "flightsOfStairs": 32
      },
      {
        "userID": 8,
        "date": "2019/09/14",
        "numSteps": 12272,
        "minutesActive": 108,
        "flightsOfStairs": 1
      },
      {
        "userID": 9,
        "date": "2019/09/14",
        "numSteps": 3837,
        "minutesActive": 70,
        "flightsOfStairs": 45
      },
      {
        "userID": 10,
        "date": "2019/09/14",
        "numSteps": 6792,
        "minutesActive": 266,
        "flightsOfStairs": 41
      },
      {
        "userID": 11,
        "date": "2019/09/14",
        "numSteps": 14541,
        "minutesActive": 193,
        "flightsOfStairs": 10
      },
      {
        "userID": 12,
        "date": "2019/09/14",
        "numSteps": 13092,
        "minutesActive": 102,
        "flightsOfStairs": 22
      },
      {
        "userID": 13,
        "date": "2019/09/14",
        "numSteps": 4136,
        "minutesActive": 171,
        "flightsOfStairs": 20
      },
      {
        "userID": 14,
        "date": "2019/09/14",
        "numSteps": 3152,
        "minutesActive": 127,
        "flightsOfStairs": 23
      },
      {
        "userID": 15,
        "date": "2019/09/14",
        "numSteps": 2245,
        "minutesActive": 153,
        "flightsOfStairs": 42
      },
      {
        "userID": 16,
        "date": "2019/09/14",
        "numSteps": 10316,
        "minutesActive": 88,
        "flightsOfStairs": 2
      },
      {
        "userID": 17,
        "date": "2019/09/14",
        "numSteps": 9878,
        "minutesActive": 218,
        "flightsOfStairs": 44
      },
      {
        "userID": 18,
        "date": "2019/09/14",
        "numSteps": 4608,
        "minutesActive": 46,
        "flightsOfStairs": 39
      },
      {
        "userID": 19,
        "date": "2019/09/14",
        "numSteps": 9791,
        "minutesActive": 173,
        "flightsOfStairs": 23
      },
      {
        "userID": 20,
        "date": "2019/09/14",
        "numSteps": 11872,
        "minutesActive": 244,
        "flightsOfStairs": 5
      },
      {
        "userID": 21,
        "date": "2019/09/14",
        "numSteps": 13557,
        "minutesActive": 110,
        "flightsOfStairs": 8
      },
      {
        "userID": 22,
        "date": "2019/09/14",
        "numSteps": 14022,
        "minutesActive": 177,
        "flightsOfStairs": 5
      },
      {
        "userID": 23,
        "date": "2019/09/14",
        "numSteps": 9315,
        "minutesActive": 69,
        "flightsOfStairs": 32
      },
      {
        "userID": 24,
        "date": "2019/09/14",
        "numSteps": 3059,
        "minutesActive": 90,
        "flightsOfStairs": 0
      },
      {
        "userID": 25,
        "date": "2019/09/14",
        "numSteps": 3052,
        "minutesActive": 190,
        "flightsOfStairs": 6
      },
      {
        "userID": 26,
        "date": "2019/09/14",
        "numSteps": 14077,
        "minutesActive": 182,
        "flightsOfStairs": 26
      },
      {
        "userID": 27,
        "date": "2019/09/14",
        "numSteps": 8198,
        "minutesActive": 102,
        "flightsOfStairs": 25
      },
      {
        "userID": 28,
        "date": "2019/09/14",
        "numSteps": 6265,
        "minutesActive": 152,
        "flightsOfStairs": 9
      },
      {
        "userID": 29,
        "date": "2019/09/14",
        "numSteps": 12794,
        "minutesActive": 93,
        "flightsOfStairs": 25
      },
      {
        "userID": 30,
        "date": "2019/09/14",
        "numSteps": 4029,
        "minutesActive": 159,
        "flightsOfStairs": 38
      },
      {
        "userID": 31,
        "date": "2019/09/14",
        "numSteps": 12222,
        "minutesActive": 227,
        "flightsOfStairs": 38
      },
      {
        "userID": 32,
        "date": "2019/09/14",
        "numSteps": 10732,
        "minutesActive": 26,
        "flightsOfStairs": 7
      },
      {
        "userID": 33,
        "date": "2019/09/14",
        "numSteps": 5286,
        "minutesActive": 250,
        "flightsOfStairs": 29
      },
      {
        "userID": 34,
        "date": "2019/09/14",
        "numSteps": 7777,
        "minutesActive": 193,
        "flightsOfStairs": 42
      },
      {
        "userID": 35,
        "date": "2019/09/14",
        "numSteps": 4184,
        "minutesActive": 107,
        "flightsOfStairs": 38
      },
      {
        "userID": 36,
        "date": "2019/09/14",
        "numSteps": 11305,
        "minutesActive": 219,
        "flightsOfStairs": 36
      },
      {
        "userID": 37,
        "date": "2019/09/14",
        "numSteps": 11461,
        "minutesActive": 42,
        "flightsOfStairs": 19
      },
      {
        "userID": 38,
        "date": "2019/09/14",
        "numSteps": 2959,
        "minutesActive": 103,
        "flightsOfStairs": 40
      },
      {
        "userID": 39,
        "date": "2019/09/14",
        "numSteps": 11929,
        "minutesActive": 254,
        "flightsOfStairs": 12
      },
      {
        "userID": 40,
        "date": "2019/09/14",
        "numSteps": 10235,
        "minutesActive": 128,
        "flightsOfStairs": 22
      },
      {
        "userID": 41,
        "date": "2019/09/14",
        "numSteps": 7984,
        "minutesActive": 283,
        "flightsOfStairs": 2
      },
      {
        "userID": 42,
        "date": "2019/09/14",
        "numSteps": 6676,
        "minutesActive": 234,
        "flightsOfStairs": 32
      },
      {
        "userID": 43,
        "date": "2019/09/14",
        "numSteps": 12182,
        "minutesActive": 265,
        "flightsOfStairs": 17
      },
      {
        "userID": 44,
        "date": "2019/09/14",
        "numSteps": 11369,
        "minutesActive": 211,
        "flightsOfStairs": 49
      },
      {
        "userID": 45,
        "date": "2019/09/14",
        "numSteps": 4453,
        "minutesActive": 247,
        "flightsOfStairs": 41
      },
      {
        "userID": 46,
        "date": "2019/09/14",
        "numSteps": 8457,
        "minutesActive": 84,
        "flightsOfStairs": 21
      },
      {
        "userID": 47,
        "date": "2019/09/14",
        "numSteps": 7369,
        "minutesActive": 246,
        "flightsOfStairs": 5
      },
      {
        "userID": 48,
        "date": "2019/09/14",
        "numSteps": 5063,
        "minutesActive": 107,
        "flightsOfStairs": 18
      },
      {
        "userID": 49,
        "date": "2019/09/14",
        "numSteps": 7309,
        "minutesActive": 172,
        "flightsOfStairs": 48
      },
      {
        "userID": 50,
        "date": "2019/09/14",
        "numSteps": 6856,
        "minutesActive": 294,
        "flightsOfStairs": 12
      },
      {
        "userID": 1,
        "date": "2019/09/15",
        "numSteps": 10028,
        "minutesActive": 113,
        "flightsOfStairs": 45
      },
      {
        "userID": 2,
        "date": "2019/09/15",
        "numSteps": 7886,
        "minutesActive": 152,
        "flightsOfStairs": 25
      },
      {
        "userID": 3,
        "date": "2019/09/15",
        "numSteps": 11998,
        "minutesActive": 24,
        "flightsOfStairs": 49
      },
      {
        "userID": 4,
        "date": "2019/09/15",
        "numSteps": 9289,
        "minutesActive": 174,
        "flightsOfStairs": 19
      },
      {
        "userID": 5,
        "date": "2019/09/15",
        "numSteps": 12715,
        "minutesActive": 138,
        "flightsOfStairs": 2
      },
      {
        "userID": 6,
        "date": "2019/09/15",
        "numSteps": 4051,
        "minutesActive": 115,
        "flightsOfStairs": 27
      },
      {
        "userID": 7,
        "date": "2019/09/15",
        "numSteps": 2901,
        "minutesActive": 224,
        "flightsOfStairs": 12
      },
      {
        "userID": 8,
        "date": "2019/09/15",
        "numSteps": 2388,
        "minutesActive": 199,
        "flightsOfStairs": 24
      },
      {
        "userID": 9,
        "date": "2019/09/15",
        "numSteps": 12554,
        "minutesActive": 23,
        "flightsOfStairs": 8
      },
      {
        "userID": 10,
        "date": "2019/09/15",
        "numSteps": 10720,
        "minutesActive": 99,
        "flightsOfStairs": 15
      },
      {
        "userID": 11,
        "date": "2019/09/15",
        "numSteps": 2074,
        "minutesActive": 264,
        "flightsOfStairs": 44
      },
      {
        "userID": 12,
        "date": "2019/09/15",
        "numSteps": 10674,
        "minutesActive": 107,
        "flightsOfStairs": 10
      },
      {
        "userID": 13,
        "date": "2019/09/15",
        "numSteps": 4274,
        "minutesActive": 177,
        "flightsOfStairs": 36
      },
      {
        "userID": 14,
        "date": "2019/09/15",
        "numSteps": 8027,
        "minutesActive": 292,
        "flightsOfStairs": 27
      },
      {
        "userID": 15,
        "date": "2019/09/15",
        "numSteps": 14722,
        "minutesActive": 261,
        "flightsOfStairs": 43
      },
      {
        "userID": 16,
        "date": "2019/09/15",
        "numSteps": 14044,
        "minutesActive": 86,
        "flightsOfStairs": 26
      },
      {
        "userID": 17,
        "date": "2019/09/15",
        "numSteps": 8562,
        "minutesActive": 146,
        "flightsOfStairs": 20
      },
      {
        "userID": 18,
        "date": "2019/09/15",
        "numSteps": 4366,
        "minutesActive": 254,
        "flightsOfStairs": 5
      },
      {
        "userID": 19,
        "date": "2019/09/15",
        "numSteps": 11482,
        "minutesActive": 245,
        "flightsOfStairs": 22
      },
      {
        "userID": 20,
        "date": "2019/09/15",
        "numSteps": 7316,
        "minutesActive": 265,
        "flightsOfStairs": 50
      },
      {
        "userID": 21,
        "date": "2019/09/15",
        "numSteps": 5477,
        "minutesActive": 69,
        "flightsOfStairs": 37
      },
      {
        "userID": 22,
        "date": "2019/09/15",
        "numSteps": 6085,
        "minutesActive": 228,
        "flightsOfStairs": 44
      },
      {
        "userID": 23,
        "date": "2019/09/15",
        "numSteps": 14759,
        "minutesActive": 238,
        "flightsOfStairs": 48
      },
      {
        "userID": 24,
        "date": "2019/09/15",
        "numSteps": 4295,
        "minutesActive": 46,
        "flightsOfStairs": 24
      },
      {
        "userID": 25,
        "date": "2019/09/15",
        "numSteps": 11033,
        "minutesActive": 44,
        "flightsOfStairs": 20
      },
      {
        "userID": 26,
        "date": "2019/09/15",
        "numSteps": 11391,
        "minutesActive": 263,
        "flightsOfStairs": 46
      },
      {
        "userID": 27,
        "date": "2019/09/15",
        "numSteps": 5117,
        "minutesActive": 186,
        "flightsOfStairs": 46
      },
      {
        "userID": 28,
        "date": "2019/09/15",
        "numSteps": 6446,
        "minutesActive": 121,
        "flightsOfStairs": 18
      },
      {
        "userID": 29,
        "date": "2019/09/15",
        "numSteps": 12313,
        "minutesActive": 138,
        "flightsOfStairs": 9
      },
      {
        "userID": 30,
        "date": "2019/09/15",
        "numSteps": 9504,
        "minutesActive": 122,
        "flightsOfStairs": 13
      },
      {
        "userID": 31,
        "date": "2019/09/15",
        "numSteps": 13766,
        "minutesActive": 73,
        "flightsOfStairs": 3
      },
      {
        "userID": 32,
        "date": "2019/09/15",
        "numSteps": 8371,
        "minutesActive": 224,
        "flightsOfStairs": 37
      },
      {
        "userID": 33,
        "date": "2019/09/15",
        "numSteps": 2752,
        "minutesActive": 273,
        "flightsOfStairs": 44
      },
      {
        "userID": 34,
        "date": "2019/09/15",
        "numSteps": 5834,
        "minutesActive": 89,
        "flightsOfStairs": 4
      },
      {
        "userID": 35,
        "date": "2019/09/15",
        "numSteps": 11955,
        "minutesActive": 113,
        "flightsOfStairs": 48
      },
      {
        "userID": 36,
        "date": "2019/09/15",
        "numSteps": 8268,
        "minutesActive": 181,
        "flightsOfStairs": 0
      },
      {
        "userID": 37,
        "date": "2019/09/15",
        "numSteps": 7136,
        "minutesActive": 82,
        "flightsOfStairs": 36
      },
      {
        "userID": 38,
        "date": "2019/09/15",
        "numSteps": 14146,
        "minutesActive": 70,
        "flightsOfStairs": 1
      },
      {
        "userID": 39,
        "date": "2019/09/15",
        "numSteps": 11092,
        "minutesActive": 24,
        "flightsOfStairs": 31
      },
      {
        "userID": 40,
        "date": "2019/09/15",
        "numSteps": 13713,
        "minutesActive": 35,
        "flightsOfStairs": 33
      },
      {
        "userID": 41,
        "date": "2019/09/15",
        "numSteps": 9478,
        "minutesActive": 92,
        "flightsOfStairs": 23
      },
      {
        "userID": 42,
        "date": "2019/09/15",
        "numSteps": 8485,
        "minutesActive": 65,
        "flightsOfStairs": 23
      },
      {
        "userID": 43,
        "date": "2019/09/15",
        "numSteps": 8894,
        "minutesActive": 251,
        "flightsOfStairs": 42
      },
      {
        "userID": 44,
        "date": "2019/09/15",
        "numSteps": 13367,
        "minutesActive": 169,
        "flightsOfStairs": 0
      },
      {
        "userID": 45,
        "date": "2019/09/15",
        "numSteps": 11407,
        "minutesActive": 254,
        "flightsOfStairs": 2
      },
      {
        "userID": 46,
        "date": "2019/09/15",
        "numSteps": 13724,
        "minutesActive": 287,
        "flightsOfStairs": 4
      },
      {
        "userID": 47,
        "date": "2019/09/15",
        "numSteps": 3833,
        "minutesActive": 60,
        "flightsOfStairs": 24
      },
      {
        "userID": 48,
        "date": "2019/09/15",
        "numSteps": 14490,
        "minutesActive": 288,
        "flightsOfStairs": 24
      },
      {
        "userID": 49,
        "date": "2019/09/15",
        "numSteps": 7230,
        "minutesActive": 293,
        "flightsOfStairs": 38
      },
      {
        "userID": 50,
        "date": "2019/09/15",
        "numSteps": 12344,
        "minutesActive": 84,
        "flightsOfStairs": 24
      },
      {
        "userID": 1,
        "date": "2019/09/16",
        "numSteps": 11067,
        "minutesActive": 300,
        "flightsOfStairs": 19
      },
      {
        "userID": 2,
        "date": "2019/09/16",
        "numSteps": 7322,
        "minutesActive": 164,
        "flightsOfStairs": 21
      },
      {
        "userID": 3,
        "date": "2019/09/16",
        "numSteps": 13195,
        "minutesActive": 144,
        "flightsOfStairs": 40
      },
      {
        "userID": 4,
        "date": "2019/09/16",
        "numSteps": 4503,
        "minutesActive": 166,
        "flightsOfStairs": 46
      },
      {
        "userID": 5,
        "date": "2019/09/16",
        "numSteps": 4115,
        "minutesActive": 55,
        "flightsOfStairs": 46
      },
      {
        "userID": 6,
        "date": "2019/09/16",
        "numSteps": 7004,
        "minutesActive": 235,
        "flightsOfStairs": 34
      },
      {
        "userID": 7,
        "date": "2019/09/16",
        "numSteps": 5629,
        "minutesActive": 296,
        "flightsOfStairs": 20
      },
      {
        "userID": 8,
        "date": "2019/09/16",
        "numSteps": 5572,
        "minutesActive": 206,
        "flightsOfStairs": 43
      },
      {
        "userID": 9,
        "date": "2019/09/16",
        "numSteps": 9646,
        "minutesActive": 122,
        "flightsOfStairs": 24
      },
      {
        "userID": 10,
        "date": "2019/09/16",
        "numSteps": 4496,
        "minutesActive": 47,
        "flightsOfStairs": 6
      },
      {
        "userID": 11,
        "date": "2019/09/16",
        "numSteps": 12109,
        "minutesActive": 219,
        "flightsOfStairs": 13
      },
      {
        "userID": 12,
        "date": "2019/09/16",
        "numSteps": 10611,
        "minutesActive": 42,
        "flightsOfStairs": 17
      },
      {
        "userID": 13,
        "date": "2019/09/16",
        "numSteps": 10925,
        "minutesActive": 247,
        "flightsOfStairs": 50
      },
      {
        "userID": 14,
        "date": "2019/09/16",
        "numSteps": 3088,
        "minutesActive": 102,
        "flightsOfStairs": 45
      },
      {
        "userID": 15,
        "date": "2019/09/16",
        "numSteps": 11403,
        "minutesActive": 225,
        "flightsOfStairs": 15
      },
      {
        "userID": 16,
        "date": "2019/09/16",
        "numSteps": 7753,
        "minutesActive": 46,
        "flightsOfStairs": 42
      },
      {
        "userID": 17,
        "date": "2019/09/16",
        "numSteps": 10205,
        "minutesActive": 46,
        "flightsOfStairs": 49
      },
      {
        "userID": 18,
        "date": "2019/09/16",
        "numSteps": 3456,
        "minutesActive": 209,
        "flightsOfStairs": 27
      },
      {
        "userID": 19,
        "date": "2019/09/16",
        "numSteps": 12980,
        "minutesActive": 112,
        "flightsOfStairs": 34
      },
      {
        "userID": 20,
        "date": "2019/09/16",
        "numSteps": 10216,
        "minutesActive": 291,
        "flightsOfStairs": 6
      },
      {
        "userID": 21,
        "date": "2019/09/16",
        "numSteps": 11734,
        "minutesActive": 103,
        "flightsOfStairs": 13
      },
      {
        "userID": 22,
        "date": "2019/09/16",
        "numSteps": 11988,
        "minutesActive": 248,
        "flightsOfStairs": 18
      },
      {
        "userID": 23,
        "date": "2019/09/16",
        "numSteps": 4083,
        "minutesActive": 77,
        "flightsOfStairs": 23
      },
      {
        "userID": 24,
        "date": "2019/09/16",
        "numSteps": 6505,
        "minutesActive": 182,
        "flightsOfStairs": 30
      },
      {
        "userID": 25,
        "date": "2019/09/16",
        "numSteps": 7940,
        "minutesActive": 223,
        "flightsOfStairs": 23
      },
      {
        "userID": 26,
        "date": "2019/09/16",
        "numSteps": 10820,
        "minutesActive": 162,
        "flightsOfStairs": 11
      },
      {
        "userID": 27,
        "date": "2019/09/16",
        "numSteps": 6523,
        "minutesActive": 76,
        "flightsOfStairs": 24
      },
      {
        "userID": 28,
        "date": "2019/09/16",
        "numSteps": 14384,
        "minutesActive": 45,
        "flightsOfStairs": 6
      },
      {
        "userID": 29,
        "date": "2019/09/16",
        "numSteps": 10494,
        "minutesActive": 152,
        "flightsOfStairs": 30
      },
      {
        "userID": 30,
        "date": "2019/09/16",
        "numSteps": 7226,
        "minutesActive": 43,
        "flightsOfStairs": 41
      },
      {
        "userID": 31,
        "date": "2019/09/16",
        "numSteps": 3149,
        "minutesActive": 82,
        "flightsOfStairs": 0
      },
      {
        "userID": 32,
        "date": "2019/09/16",
        "numSteps": 6227,
        "minutesActive": 299,
        "flightsOfStairs": 31
      },
      {
        "userID": 33,
        "date": "2019/09/16",
        "numSteps": 4435,
        "minutesActive": 198,
        "flightsOfStairs": 28
      },
      {
        "userID": 34,
        "date": "2019/09/16",
        "numSteps": 8843,
        "minutesActive": 126,
        "flightsOfStairs": 14
      },
      {
        "userID": 35,
        "date": "2019/09/16",
        "numSteps": 4632,
        "minutesActive": 119,
        "flightsOfStairs": 4
      },
      {
        "userID": 36,
        "date": "2019/09/16",
        "numSteps": 13637,
        "minutesActive": 100,
        "flightsOfStairs": 40
      },
      {
        "userID": 37,
        "date": "2019/09/16",
        "numSteps": 8311,
        "minutesActive": 208,
        "flightsOfStairs": 26
      },
      {
        "userID": 38,
        "date": "2019/09/16",
        "numSteps": 4789,
        "minutesActive": 145,
        "flightsOfStairs": 2
      },
      {
        "userID": 39,
        "date": "2019/09/16",
        "numSteps": 4328,
        "minutesActive": 125,
        "flightsOfStairs": 44
      },
      {
        "userID": 40,
        "date": "2019/09/16",
        "numSteps": 8388,
        "minutesActive": 214,
        "flightsOfStairs": 16
      },
      {
        "userID": 41,
        "date": "2019/09/16",
        "numSteps": 11454,
        "minutesActive": 249,
        "flightsOfStairs": 40
      },
      {
        "userID": 42,
        "date": "2019/09/16",
        "numSteps": 14066,
        "minutesActive": 68,
        "flightsOfStairs": 33
      },
      {
        "userID": 43,
        "date": "2019/09/16",
        "numSteps": 4416,
        "minutesActive": 193,
        "flightsOfStairs": 17
      },
      {
        "userID": 44,
        "date": "2019/09/16",
        "numSteps": 2495,
        "minutesActive": 38,
        "flightsOfStairs": 25
      },
      {
        "userID": 45,
        "date": "2019/09/16",
        "numSteps": 4560,
        "minutesActive": 219,
        "flightsOfStairs": 29
      },
      {
        "userID": 46,
        "date": "2019/09/16",
        "numSteps": 4458,
        "minutesActive": 286,
        "flightsOfStairs": 34
      },
      {
        "userID": 47,
        "date": "2019/09/16",
        "numSteps": 5371,
        "minutesActive": 115,
        "flightsOfStairs": 23
      },
      {
        "userID": 48,
        "date": "2019/09/16",
        "numSteps": 10638,
        "minutesActive": 38,
        "flightsOfStairs": 23
      },
      {
        "userID": 49,
        "date": "2019/09/16",
        "numSteps": 13796,
        "minutesActive": 264,
        "flightsOfStairs": 27
      },
      {
        "userID": 50,
        "date": "2019/09/16",
        "numSteps": 2289,
        "minutesActive": 298,
        "flightsOfStairs": 48
      },
      {
        "userID": 1,
        "date": "2019/09/17",
        "numSteps": 4901,
        "minutesActive": 288,
        "flightsOfStairs": 10
      },
      {
        "userID": 2,
        "date": "2019/09/17",
        "numSteps": 2813,
        "minutesActive": 277,
        "flightsOfStairs": 2
      },
      {
        "userID": 3,
        "date": "2019/09/17",
        "numSteps": 4993,
        "minutesActive": 191,
        "flightsOfStairs": 43
      },
      {
        "userID": 4,
        "date": "2019/09/17",
        "numSteps": 12457,
        "minutesActive": 144,
        "flightsOfStairs": 30
      },
      {
        "userID": 5,
        "date": "2019/09/17",
        "numSteps": 5231,
        "minutesActive": 141,
        "flightsOfStairs": 28
      },
      {
        "userID": 6,
        "date": "2019/09/17",
        "numSteps": 5899,
        "minutesActive": 273,
        "flightsOfStairs": 36
      },
      {
        "userID": 7,
        "date": "2019/09/17",
        "numSteps": 9968,
        "minutesActive": 270,
        "flightsOfStairs": 4
      },
      {
        "userID": 8,
        "date": "2019/09/17",
        "numSteps": 4751,
        "minutesActive": 230,
        "flightsOfStairs": 28
      },
      {
        "userID": 9,
        "date": "2019/09/17",
        "numSteps": 6779,
        "minutesActive": 300,
        "flightsOfStairs": 29
      },
      {
        "userID": 10,
        "date": "2019/09/17",
        "numSteps": 12966,
        "minutesActive": 25,
        "flightsOfStairs": 40
      },
      {
        "userID": 11,
        "date": "2019/09/17",
        "numSteps": 3484,
        "minutesActive": 104,
        "flightsOfStairs": 15
      },
      {
        "userID": 12,
        "date": "2019/09/17",
        "numSteps": 11903,
        "minutesActive": 135,
        "flightsOfStairs": 25
      },
      {
        "userID": 13,
        "date": "2019/09/17",
        "numSteps": 14495,
        "minutesActive": 114,
        "flightsOfStairs": 26
      },
      {
        "userID": 14,
        "date": "2019/09/17",
        "numSteps": 5226,
        "minutesActive": 285,
        "flightsOfStairs": 11
      },
      {
        "userID": 15,
        "date": "2019/09/17",
        "numSteps": 5092,
        "minutesActive": 87,
        "flightsOfStairs": 44
      },
      {
        "userID": 16,
        "date": "2019/09/17",
        "numSteps": 2300,
        "minutesActive": 30,
        "flightsOfStairs": 20
      },
      {
        "userID": 17,
        "date": "2019/09/17",
        "numSteps": 14960,
        "minutesActive": 91,
        "flightsOfStairs": 2
      },
      {
        "userID": 18,
        "date": "2019/09/17",
        "numSteps": 13098,
        "minutesActive": 199,
        "flightsOfStairs": 27
      },
      {
        "userID": 19,
        "date": "2019/09/17",
        "numSteps": 8693,
        "minutesActive": 72,
        "flightsOfStairs": 8
      },
      {
        "userID": 20,
        "date": "2019/09/17",
        "numSteps": 14312,
        "minutesActive": 271,
        "flightsOfStairs": 45
      },
      {
        "userID": 21,
        "date": "2019/09/17",
        "numSteps": 13187,
        "minutesActive": 161,
        "flightsOfStairs": 18
      },
      {
        "userID": 22,
        "date": "2019/09/17",
        "numSteps": 2882,
        "minutesActive": 227,
        "flightsOfStairs": 36
      },
      {
        "userID": 23,
        "date": "2019/09/17",
        "numSteps": 9751,
        "minutesActive": 117,
        "flightsOfStairs": 16
      },
      {
        "userID": 24,
        "date": "2019/09/17",
        "numSteps": 2698,
        "minutesActive": 105,
        "flightsOfStairs": 17
      },
      {
        "userID": 25,
        "date": "2019/09/17",
        "numSteps": 9767,
        "minutesActive": 146,
        "flightsOfStairs": 48
      },
      {
        "userID": 26,
        "date": "2019/09/17",
        "numSteps": 12083,
        "minutesActive": 230,
        "flightsOfStairs": 29
      },
      {
        "userID": 27,
        "date": "2019/09/17",
        "numSteps": 11738,
        "minutesActive": 114,
        "flightsOfStairs": 49
      },
      {
        "userID": 28,
        "date": "2019/09/17",
        "numSteps": 7228,
        "minutesActive": 23,
        "flightsOfStairs": 35
      },
      {
        "userID": 29,
        "date": "2019/09/17",
        "numSteps": 6877,
        "minutesActive": 194,
        "flightsOfStairs": 12
      },
      {
        "userID": 30,
        "date": "2019/09/17",
        "numSteps": 7266,
        "minutesActive": 107,
        "flightsOfStairs": 3
      },
      {
        "userID": 31,
        "date": "2019/09/17",
        "numSteps": 12063,
        "minutesActive": 29,
        "flightsOfStairs": 14
      },
      {
        "userID": 32,
        "date": "2019/09/17",
        "numSteps": 3028,
        "minutesActive": 73,
        "flightsOfStairs": 35
      },
      {
        "userID": 33,
        "date": "2019/09/17",
        "numSteps": 6891,
        "minutesActive": 146,
        "flightsOfStairs": 6
      },
      {
        "userID": 34,
        "date": "2019/09/17",
        "numSteps": 4109,
        "minutesActive": 117,
        "flightsOfStairs": 47
      },
      {
        "userID": 35,
        "date": "2019/09/17",
        "numSteps": 7746,
        "minutesActive": 98,
        "flightsOfStairs": 7
      },
      {
        "userID": 36,
        "date": "2019/09/17",
        "numSteps": 6788,
        "minutesActive": 165,
        "flightsOfStairs": 39
      },
      {
        "userID": 37,
        "date": "2019/09/17",
        "numSteps": 4000,
        "minutesActive": 74,
        "flightsOfStairs": 34
      },
      {
        "userID": 38,
        "date": "2019/09/17",
        "numSteps": 5538,
        "minutesActive": 160,
        "flightsOfStairs": 4
      },
      {
        "userID": 39,
        "date": "2019/09/17",
        "numSteps": 6500,
        "minutesActive": 212,
        "flightsOfStairs": 30
      },
      {
        "userID": 40,
        "date": "2019/09/17",
        "numSteps": 14153,
        "minutesActive": 295,
        "flightsOfStairs": 33
      },
      {
        "userID": 41,
        "date": "2019/09/17",
        "numSteps": 11228,
        "minutesActive": 62,
        "flightsOfStairs": 43
      },
      {
        "userID": 42,
        "date": "2019/09/17",
        "numSteps": 14689,
        "minutesActive": 162,
        "flightsOfStairs": 17
      },
      {
        "userID": 43,
        "date": "2019/09/17",
        "numSteps": 12562,
        "minutesActive": 258,
        "flightsOfStairs": 32
      },
      {
        "userID": 44,
        "date": "2019/09/17",
        "numSteps": 7701,
        "minutesActive": 41,
        "flightsOfStairs": 44
      },
      {
        "userID": 45,
        "date": "2019/09/17",
        "numSteps": 2641,
        "minutesActive": 32,
        "flightsOfStairs": 22
      },
      {
        "userID": 46,
        "date": "2019/09/17",
        "numSteps": 9186,
        "minutesActive": 240,
        "flightsOfStairs": 12
      },
      {
        "userID": 47,
        "date": "2019/09/17",
        "numSteps": 5904,
        "minutesActive": 131,
        "flightsOfStairs": 25
      },
      {
        "userID": 48,
        "date": "2019/09/17",
        "numSteps": 10715,
        "minutesActive": 145,
        "flightsOfStairs": 8
      },
      {
        "userID": 49,
        "date": "2019/09/17",
        "numSteps": 3489,
        "minutesActive": 246,
        "flightsOfStairs": 28
      },
      {
        "userID": 50,
        "date": "2019/09/17",
        "numSteps": 2438,
        "minutesActive": 176,
        "flightsOfStairs": 48
      },
      {
        "userID": 1,
        "date": "2019/09/18",
        "numSteps": 9974,
        "minutesActive": 80,
        "flightsOfStairs": 40
      },
      {
        "userID": 2,
        "date": "2019/09/18",
        "numSteps": 8664,
        "minutesActive": 142,
        "flightsOfStairs": 3
      },
      {
        "userID": 3,
        "date": "2019/09/18",
        "numSteps": 12102,
        "minutesActive": 270,
        "flightsOfStairs": 6
      },
      {
        "userID": 4,
        "date": "2019/09/18",
        "numSteps": 13546,
        "minutesActive": 92,
        "flightsOfStairs": 40
      },
      {
        "userID": 5,
        "date": "2019/09/18",
        "numSteps": 7965,
        "minutesActive": 159,
        "flightsOfStairs": 26
      },
      {
        "userID": 6,
        "date": "2019/09/18",
        "numSteps": 13416,
        "minutesActive": 175,
        "flightsOfStairs": 46
      },
      {
        "userID": 7,
        "date": "2019/09/18",
        "numSteps": 6362,
        "minutesActive": 270,
        "flightsOfStairs": 35
      },
      {
        "userID": 8,
        "date": "2019/09/18",
        "numSteps": 13888,
        "minutesActive": 170,
        "flightsOfStairs": 13
      },
      {
        "userID": 9,
        "date": "2019/09/18",
        "numSteps": 5467,
        "minutesActive": 185,
        "flightsOfStairs": 39
      },
      {
        "userID": 10,
        "date": "2019/09/18",
        "numSteps": 12099,
        "minutesActive": 38,
        "flightsOfStairs": 19
      },
      {
        "userID": 11,
        "date": "2019/09/18",
        "numSteps": 2879,
        "minutesActive": 278,
        "flightsOfStairs": 34
      },
      {
        "userID": 12,
        "date": "2019/09/18",
        "numSteps": 2988,
        "minutesActive": 257,
        "flightsOfStairs": 34
      },
      {
        "userID": 13,
        "date": "2019/09/18",
        "numSteps": 12877,
        "minutesActive": 128,
        "flightsOfStairs": 12
      },
      {
        "userID": 14,
        "date": "2019/09/18",
        "numSteps": 12084,
        "minutesActive": 146,
        "flightsOfStairs": 41
      },
      {
        "userID": 15,
        "date": "2019/09/18",
        "numSteps": 12282,
        "minutesActive": 71,
        "flightsOfStairs": 28
      },
      {
        "userID": 16,
        "date": "2019/09/18",
        "numSteps": 9641,
        "minutesActive": 231,
        "flightsOfStairs": 32
      },
      {
        "userID": 17,
        "date": "2019/09/18",
        "numSteps": 10914,
        "minutesActive": 34,
        "flightsOfStairs": 45
      },
      {
        "userID": 18,
        "date": "2019/09/18",
        "numSteps": 2315,
        "minutesActive": 98,
        "flightsOfStairs": 45
      },
      {
        "userID": 19,
        "date": "2019/09/18",
        "numSteps": 2340,
        "minutesActive": 107,
        "flightsOfStairs": 10
      },
      {
        "userID": 20,
        "date": "2019/09/18",
        "numSteps": 4721,
        "minutesActive": 269,
        "flightsOfStairs": 7
      },
      {
        "userID": 21,
        "date": "2019/09/18",
        "numSteps": 14846,
        "minutesActive": 92,
        "flightsOfStairs": 25
      },
      {
        "userID": 22,
        "date": "2019/09/18",
        "numSteps": 4288,
        "minutesActive": 94,
        "flightsOfStairs": 16
      },
      {
        "userID": 23,
        "date": "2019/09/18",
        "numSteps": 5589,
        "minutesActive": 185,
        "flightsOfStairs": 12
      },
      {
        "userID": 24,
        "date": "2019/09/18",
        "numSteps": 13363,
        "minutesActive": 46,
        "flightsOfStairs": 24
      },
      {
        "userID": 25,
        "date": "2019/09/18",
        "numSteps": 3745,
        "minutesActive": 99,
        "flightsOfStairs": 8
      },
      {
        "userID": 26,
        "date": "2019/09/18",
        "numSteps": 3725,
        "minutesActive": 29,
        "flightsOfStairs": 33
      },
      {
        "userID": 27,
        "date": "2019/09/18",
        "numSteps": 12534,
        "minutesActive": 165,
        "flightsOfStairs": 48
      },
      {
        "userID": 28,
        "date": "2019/09/18",
        "numSteps": 3155,
        "minutesActive": 280,
        "flightsOfStairs": 48
      },
      {
        "userID": 29,
        "date": "2019/09/18",
        "numSteps": 7871,
        "minutesActive": 186,
        "flightsOfStairs": 33
      },
      {
        "userID": 30,
        "date": "2019/09/18",
        "numSteps": 7545,
        "minutesActive": 158,
        "flightsOfStairs": 27
      },
      {
        "userID": 31,
        "date": "2019/09/18",
        "numSteps": 9513,
        "minutesActive": 129,
        "flightsOfStairs": 40
      },
      {
        "userID": 32,
        "date": "2019/09/18",
        "numSteps": 13916,
        "minutesActive": 69,
        "flightsOfStairs": 18
      },
      {
        "userID": 33,
        "date": "2019/09/18",
        "numSteps": 7279,
        "minutesActive": 225,
        "flightsOfStairs": 45
      },
      {
        "userID": 34,
        "date": "2019/09/18",
        "numSteps": 6208,
        "minutesActive": 63,
        "flightsOfStairs": 20
      },
      {
        "userID": 35,
        "date": "2019/09/18",
        "numSteps": 7074,
        "minutesActive": 127,
        "flightsOfStairs": 39
      },
      {
        "userID": 36,
        "date": "2019/09/18",
        "numSteps": 13126,
        "minutesActive": 28,
        "flightsOfStairs": 32
      },
      {
        "userID": 37,
        "date": "2019/09/18",
        "numSteps": 13101,
        "minutesActive": 160,
        "flightsOfStairs": 48
      },
      {
        "userID": 38,
        "date": "2019/09/18",
        "numSteps": 13535,
        "minutesActive": 128,
        "flightsOfStairs": 6
      },
      {
        "userID": 39,
        "date": "2019/09/18",
        "numSteps": 6659,
        "minutesActive": 118,
        "flightsOfStairs": 48
      },
      {
        "userID": 40,
        "date": "2019/09/18",
        "numSteps": 12121,
        "minutesActive": 284,
        "flightsOfStairs": 35
      },
      {
        "userID": 41,
        "date": "2019/09/18",
        "numSteps": 4638,
        "minutesActive": 179,
        "flightsOfStairs": 48
      },
      {
        "userID": 42,
        "date": "2019/09/18",
        "numSteps": 14406,
        "minutesActive": 147,
        "flightsOfStairs": 0
      },
      {
        "userID": 43,
        "date": "2019/09/18",
        "numSteps": 7502,
        "minutesActive": 43,
        "flightsOfStairs": 50
      },
      {
        "userID": 44,
        "date": "2019/09/18",
        "numSteps": 3696,
        "minutesActive": 40,
        "flightsOfStairs": 21
      },
      {
        "userID": 45,
        "date": "2019/09/18",
        "numSteps": 5185,
        "minutesActive": 170,
        "flightsOfStairs": 22
      },
      {
        "userID": 46,
        "date": "2019/09/18",
        "numSteps": 11666,
        "minutesActive": 81,
        "flightsOfStairs": 30
      },
      {
        "userID": 47,
        "date": "2019/09/18",
        "numSteps": 4291,
        "minutesActive": 142,
        "flightsOfStairs": 9
      },
      {
        "userID": 48,
        "date": "2019/09/18",
        "numSteps": 2342,
        "minutesActive": 292,
        "flightsOfStairs": 22
      },
      {
        "userID": 49,
        "date": "2019/09/18",
        "numSteps": 12423,
        "minutesActive": 46,
        "flightsOfStairs": 20
      },
      {
        "userID": 50,
        "date": "2019/09/18",
        "numSteps": 11712,
        "minutesActive": 142,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2019/09/19",
        "numSteps": 12083,
        "minutesActive": 218,
        "flightsOfStairs": 20
      },
      {
        "userID": 2,
        "date": "2019/09/19",
        "numSteps": 5773,
        "minutesActive": 181,
        "flightsOfStairs": 3
      },
      {
        "userID": 3,
        "date": "2019/09/19",
        "numSteps": 8901,
        "minutesActive": 50,
        "flightsOfStairs": 6
      },
      {
        "userID": 4,
        "date": "2019/09/19",
        "numSteps": 10889,
        "minutesActive": 270,
        "flightsOfStairs": 44
      },
      {
        "userID": 5,
        "date": "2019/09/19",
        "numSteps": 8932,
        "minutesActive": 33,
        "flightsOfStairs": 33
      },
      {
        "userID": 6,
        "date": "2019/09/19",
        "numSteps": 9661,
        "minutesActive": 39,
        "flightsOfStairs": 37
      },
      {
        "userID": 7,
        "date": "2019/09/19",
        "numSteps": 7985,
        "minutesActive": 262,
        "flightsOfStairs": 36
      },
      {
        "userID": 8,
        "date": "2019/09/19",
        "numSteps": 13227,
        "minutesActive": 250,
        "flightsOfStairs": 19
      },
      {
        "userID": 9,
        "date": "2019/09/19",
        "numSteps": 12202,
        "minutesActive": 80,
        "flightsOfStairs": 50
      },
      {
        "userID": 10,
        "date": "2019/09/19",
        "numSteps": 4808,
        "minutesActive": 128,
        "flightsOfStairs": 12
      },
      {
        "userID": 11,
        "date": "2019/09/19",
        "numSteps": 14038,
        "minutesActive": 253,
        "flightsOfStairs": 18
      },
      {
        "userID": 12,
        "date": "2019/09/19",
        "numSteps": 12511,
        "minutesActive": 269,
        "flightsOfStairs": 38
      },
      {
        "userID": 13,
        "date": "2019/09/19",
        "numSteps": 13360,
        "minutesActive": 188,
        "flightsOfStairs": 6
      },
      {
        "userID": 14,
        "date": "2019/09/19",
        "numSteps": 7997,
        "minutesActive": 154,
        "flightsOfStairs": 6
      },
      {
        "userID": 15,
        "date": "2019/09/19",
        "numSteps": 4376,
        "minutesActive": 46,
        "flightsOfStairs": 29
      },
      {
        "userID": 16,
        "date": "2019/09/19",
        "numSteps": 13734,
        "minutesActive": 55,
        "flightsOfStairs": 38
      },
      {
        "userID": 17,
        "date": "2019/09/19",
        "numSteps": 7701,
        "minutesActive": 230,
        "flightsOfStairs": 15
      },
      {
        "userID": 18,
        "date": "2019/09/19",
        "numSteps": 3669,
        "minutesActive": 136,
        "flightsOfStairs": 7
      },
      {
        "userID": 19,
        "date": "2019/09/19",
        "numSteps": 14175,
        "minutesActive": 165,
        "flightsOfStairs": 9
      },
      {
        "userID": 20,
        "date": "2019/09/19",
        "numSteps": 13705,
        "minutesActive": 89,
        "flightsOfStairs": 11
      },
      {
        "userID": 21,
        "date": "2019/09/19",
        "numSteps": 11044,
        "minutesActive": 153,
        "flightsOfStairs": 18
      },
      {
        "userID": 22,
        "date": "2019/09/19",
        "numSteps": 3950,
        "minutesActive": 261,
        "flightsOfStairs": 32
      },
      {
        "userID": 23,
        "date": "2019/09/19",
        "numSteps": 14398,
        "minutesActive": 137,
        "flightsOfStairs": 9
      },
      {
        "userID": 24,
        "date": "2019/09/19",
        "numSteps": 5126,
        "minutesActive": 139,
        "flightsOfStairs": 12
      },
      {
        "userID": 25,
        "date": "2019/09/19",
        "numSteps": 11324,
        "minutesActive": 185,
        "flightsOfStairs": 36
      },
      {
        "userID": 26,
        "date": "2019/09/19",
        "numSteps": 3434,
        "minutesActive": 115,
        "flightsOfStairs": 3
      },
      {
        "userID": 27,
        "date": "2019/09/19",
        "numSteps": 12095,
        "minutesActive": 175,
        "flightsOfStairs": 34
      },
      {
        "userID": 28,
        "date": "2019/09/19",
        "numSteps": 13882,
        "minutesActive": 54,
        "flightsOfStairs": 4
      },
      {
        "userID": 29,
        "date": "2019/09/19",
        "numSteps": 14973,
        "minutesActive": 225,
        "flightsOfStairs": 45
      },
      {
        "userID": 30,
        "date": "2019/09/19",
        "numSteps": 5009,
        "minutesActive": 181,
        "flightsOfStairs": 47
      },
      {
        "userID": 31,
        "date": "2019/09/19",
        "numSteps": 3761,
        "minutesActive": 70,
        "flightsOfStairs": 49
      },
      {
        "userID": 32,
        "date": "2019/09/19",
        "numSteps": 12830,
        "minutesActive": 83,
        "flightsOfStairs": 17
      },
      {
        "userID": 33,
        "date": "2019/09/19",
        "numSteps": 12902,
        "minutesActive": 70,
        "flightsOfStairs": 5
      },
      {
        "userID": 34,
        "date": "2019/09/19",
        "numSteps": 5096,
        "minutesActive": 74,
        "flightsOfStairs": 49
      },
      {
        "userID": 35,
        "date": "2019/09/19",
        "numSteps": 4858,
        "minutesActive": 239,
        "flightsOfStairs": 22
      },
      {
        "userID": 36,
        "date": "2019/09/19",
        "numSteps": 7668,
        "minutesActive": 231,
        "flightsOfStairs": 34
      },
      {
        "userID": 37,
        "date": "2019/09/19",
        "numSteps": 6983,
        "minutesActive": 184,
        "flightsOfStairs": 37
      },
      {
        "userID": 38,
        "date": "2019/09/19",
        "numSteps": 8700,
        "minutesActive": 160,
        "flightsOfStairs": 45
      },
      {
        "userID": 39,
        "date": "2019/09/19",
        "numSteps": 5449,
        "minutesActive": 125,
        "flightsOfStairs": 37
      },
      {
        "userID": 40,
        "date": "2019/09/19",
        "numSteps": 9408,
        "minutesActive": 253,
        "flightsOfStairs": 11
      },
      {
        "userID": 41,
        "date": "2019/09/19",
        "numSteps": 2290,
        "minutesActive": 178,
        "flightsOfStairs": 41
      },
      {
        "userID": 42,
        "date": "2019/09/19",
        "numSteps": 5249,
        "minutesActive": 198,
        "flightsOfStairs": 7
      },
      {
        "userID": 43,
        "date": "2019/09/19",
        "numSteps": 8628,
        "minutesActive": 44,
        "flightsOfStairs": 31
      },
      {
        "userID": 44,
        "date": "2019/09/19",
        "numSteps": 12209,
        "minutesActive": 217,
        "flightsOfStairs": 36
      },
      {
        "userID": 45,
        "date": "2019/09/19",
        "numSteps": 11229,
        "minutesActive": 260,
        "flightsOfStairs": 4
      },
      {
        "userID": 46,
        "date": "2019/09/19",
        "numSteps": 14801,
        "minutesActive": 46,
        "flightsOfStairs": 28
      },
      {
        "userID": 47,
        "date": "2019/09/19",
        "numSteps": 7238,
        "minutesActive": 86,
        "flightsOfStairs": 31
      },
      {
        "userID": 48,
        "date": "2019/09/19",
        "numSteps": 13605,
        "minutesActive": 88,
        "flightsOfStairs": 9
      },
      {
        "userID": 49,
        "date": "2019/09/19",
        "numSteps": 13211,
        "minutesActive": 58,
        "flightsOfStairs": 18
      },
      {
        "userID": 50,
        "date": "2019/09/19",
        "numSteps": 6722,
        "minutesActive": 180,
        "flightsOfStairs": 36
      },
      {
        "userID": 1,
        "date": "2019/09/20",
        "numSteps": 14000,
        "minutesActive": 262,
        "flightsOfStairs": 17
      },
      {
        "userID": 2,
        "date": "2019/09/20",
        "numSteps": 2969,
        "minutesActive": 273,
        "flightsOfStairs": 6
      },
      {
        "userID": 3,
        "date": "2019/09/20",
        "numSteps": 9383,
        "minutesActive": 271,
        "flightsOfStairs": 4
      },
      {
        "userID": 4,
        "date": "2019/09/20",
        "numSteps": 5259,
        "minutesActive": 165,
        "flightsOfStairs": 15
      },
      {
        "userID": 5,
        "date": "2019/09/20",
        "numSteps": 11939,
        "minutesActive": 253,
        "flightsOfStairs": 38
      },
      {
        "userID": 6,
        "date": "2019/09/20",
        "numSteps": 6295,
        "minutesActive": 285,
        "flightsOfStairs": 34
      },
      {
        "userID": 7,
        "date": "2019/09/20",
        "numSteps": 6241,
        "minutesActive": 59,
        "flightsOfStairs": 16
      },
      {
        "userID": 8,
        "date": "2019/09/20",
        "numSteps": 13999,
        "minutesActive": 217,
        "flightsOfStairs": 44
      },
      {
        "userID": 9,
        "date": "2019/09/20",
        "numSteps": 4667,
        "minutesActive": 59,
        "flightsOfStairs": 41
      },
      {
        "userID": 10,
        "date": "2019/09/20",
        "numSteps": 12441,
        "minutesActive": 173,
        "flightsOfStairs": 48
      },
      {
        "userID": 11,
        "date": "2019/09/20",
        "numSteps": 8294,
        "minutesActive": 193,
        "flightsOfStairs": 29
      },
      {
        "userID": 12,
        "date": "2019/09/20",
        "numSteps": 13147,
        "minutesActive": 200,
        "flightsOfStairs": 43
      },
      {
        "userID": 13,
        "date": "2019/09/20",
        "numSteps": 11286,
        "minutesActive": 45,
        "flightsOfStairs": 32
      },
      {
        "userID": 14,
        "date": "2019/09/20",
        "numSteps": 2044,
        "minutesActive": 187,
        "flightsOfStairs": 39
      },
      {
        "userID": 15,
        "date": "2019/09/20",
        "numSteps": 5229,
        "minutesActive": 185,
        "flightsOfStairs": 5
      },
      {
        "userID": 16,
        "date": "2019/09/20",
        "numSteps": 12110,
        "minutesActive": 259,
        "flightsOfStairs": 11
      },
      {
        "userID": 17,
        "date": "2019/09/20",
        "numSteps": 10513,
        "minutesActive": 151,
        "flightsOfStairs": 22
      },
      {
        "userID": 18,
        "date": "2019/09/20",
        "numSteps": 6423,
        "minutesActive": 112,
        "flightsOfStairs": 45
      },
      {
        "userID": 19,
        "date": "2019/09/20",
        "numSteps": 12366,
        "minutesActive": 220,
        "flightsOfStairs": 3
      },
      {
        "userID": 20,
        "date": "2019/09/20",
        "numSteps": 8181,
        "minutesActive": 207,
        "flightsOfStairs": 17
      },
      {
        "userID": 21,
        "date": "2019/09/20",
        "numSteps": 5029,
        "minutesActive": 113,
        "flightsOfStairs": 33
      },
      {
        "userID": 22,
        "date": "2019/09/20",
        "numSteps": 6332,
        "minutesActive": 117,
        "flightsOfStairs": 34
      },
      {
        "userID": 23,
        "date": "2019/09/20",
        "numSteps": 14838,
        "minutesActive": 73,
        "flightsOfStairs": 22
      },
      {
        "userID": 24,
        "date": "2019/09/20",
        "numSteps": 9546,
        "minutesActive": 41,
        "flightsOfStairs": 12
      },
      {
        "userID": 25,
        "date": "2019/09/20",
        "numSteps": 3698,
        "minutesActive": 132,
        "flightsOfStairs": 2
      },
      {
        "userID": 26,
        "date": "2019/09/20",
        "numSteps": 8162,
        "minutesActive": 30,
        "flightsOfStairs": 6
      },
      {
        "userID": 27,
        "date": "2019/09/20",
        "numSteps": 9429,
        "minutesActive": 21,
        "flightsOfStairs": 41
      },
      {
        "userID": 28,
        "date": "2019/09/20",
        "numSteps": 6133,
        "minutesActive": 81,
        "flightsOfStairs": 12
      },
      {
        "userID": 29,
        "date": "2019/09/20",
        "numSteps": 13926,
        "minutesActive": 96,
        "flightsOfStairs": 23
      },
      {
        "userID": 30,
        "date": "2019/09/20",
        "numSteps": 3836,
        "minutesActive": 283,
        "flightsOfStairs": 26
      },
      {
        "userID": 31,
        "date": "2019/09/20",
        "numSteps": 4171,
        "minutesActive": 166,
        "flightsOfStairs": 8
      },
      {
        "userID": 32,
        "date": "2019/09/20",
        "numSteps": 9676,
        "minutesActive": 174,
        "flightsOfStairs": 33
      },
      {
        "userID": 33,
        "date": "2019/09/20",
        "numSteps": 6641,
        "minutesActive": 232,
        "flightsOfStairs": 19
      },
      {
        "userID": 34,
        "date": "2019/09/20",
        "numSteps": 10506,
        "minutesActive": 213,
        "flightsOfStairs": 34
      },
      {
        "userID": 35,
        "date": "2019/09/20",
        "numSteps": 4142,
        "minutesActive": 161,
        "flightsOfStairs": 17
      },
      {
        "userID": 36,
        "date": "2019/09/20",
        "numSteps": 14290,
        "minutesActive": 138,
        "flightsOfStairs": 33
      },
      {
        "userID": 37,
        "date": "2019/09/20",
        "numSteps": 9927,
        "minutesActive": 232,
        "flightsOfStairs": 28
      },
      {
        "userID": 38,
        "date": "2019/09/20",
        "numSteps": 8003,
        "minutesActive": 259,
        "flightsOfStairs": 50
      },
      {
        "userID": 39,
        "date": "2019/09/20",
        "numSteps": 6900,
        "minutesActive": 226,
        "flightsOfStairs": 30
      },
      {
        "userID": 40,
        "date": "2019/09/20",
        "numSteps": 2261,
        "minutesActive": 293,
        "flightsOfStairs": 48
      },
      {
        "userID": 41,
        "date": "2019/09/20",
        "numSteps": 3987,
        "minutesActive": 148,
        "flightsOfStairs": 8
      },
      {
        "userID": 42,
        "date": "2019/09/20",
        "numSteps": 9094,
        "minutesActive": 258,
        "flightsOfStairs": 0
      },
      {
        "userID": 43,
        "date": "2019/09/20",
        "numSteps": 5933,
        "minutesActive": 159,
        "flightsOfStairs": 16
      },
      {
        "userID": 44,
        "date": "2019/09/20",
        "numSteps": 12646,
        "minutesActive": 170,
        "flightsOfStairs": 18
      },
      {
        "userID": 45,
        "date": "2019/09/20",
        "numSteps": 12699,
        "minutesActive": 279,
        "flightsOfStairs": 31
      },
      {
        "userID": 46,
        "date": "2019/09/20",
        "numSteps": 2801,
        "minutesActive": 280,
        "flightsOfStairs": 45
      },
      {
        "userID": 47,
        "date": "2019/09/20",
        "numSteps": 8653,
        "minutesActive": 98,
        "flightsOfStairs": 21
      },
      {
        "userID": 48,
        "date": "2019/09/20",
        "numSteps": 5408,
        "minutesActive": 275,
        "flightsOfStairs": 29
      },
      {
        "userID": 49,
        "date": "2019/09/20",
        "numSteps": 2155,
        "minutesActive": 283,
        "flightsOfStairs": 40
      },
      {
        "userID": 50,
        "date": "2019/09/20",
        "numSteps": 12122,
        "minutesActive": 107,
        "flightsOfStairs": 11
      },
      {
        "userID": 1,
        "date": "2019/09/21",
        "numSteps": 5711,
        "minutesActive": 137,
        "flightsOfStairs": 43
      },
      {
        "userID": 2,
        "date": "2019/09/21",
        "numSteps": 7505,
        "minutesActive": 48,
        "flightsOfStairs": 40
      },
      {
        "userID": 3,
        "date": "2019/09/21",
        "numSteps": 8855,
        "minutesActive": 235,
        "flightsOfStairs": 17
      },
      {
        "userID": 4,
        "date": "2019/09/21",
        "numSteps": 7144,
        "minutesActive": 212,
        "flightsOfStairs": 9
      },
      {
        "userID": 5,
        "date": "2019/09/21",
        "numSteps": 14993,
        "minutesActive": 91,
        "flightsOfStairs": 42
      },
      {
        "userID": 6,
        "date": "2019/09/21",
        "numSteps": 3228,
        "minutesActive": 141,
        "flightsOfStairs": 9
      },
      {
        "userID": 7,
        "date": "2019/09/21",
        "numSteps": 3909,
        "minutesActive": 78,
        "flightsOfStairs": 19
      },
      {
        "userID": 8,
        "date": "2019/09/21",
        "numSteps": 10053,
        "minutesActive": 258,
        "flightsOfStairs": 6
      },
      {
        "userID": 9,
        "date": "2019/09/21",
        "numSteps": 14313,
        "minutesActive": 287,
        "flightsOfStairs": 34
      },
      {
        "userID": 10,
        "date": "2019/09/21",
        "numSteps": 3172,
        "minutesActive": 167,
        "flightsOfStairs": 9
      },
      {
        "userID": 11,
        "date": "2019/09/21",
        "numSteps": 11656,
        "minutesActive": 76,
        "flightsOfStairs": 17
      },
      {
        "userID": 12,
        "date": "2019/09/21",
        "numSteps": 11643,
        "minutesActive": 279,
        "flightsOfStairs": 38
      },
      {
        "userID": 13,
        "date": "2019/09/21",
        "numSteps": 2392,
        "minutesActive": 144,
        "flightsOfStairs": 42
      },
      {
        "userID": 14,
        "date": "2019/09/21",
        "numSteps": 4613,
        "minutesActive": 60,
        "flightsOfStairs": 48
      },
      {
        "userID": 15,
        "date": "2019/09/21",
        "numSteps": 2819,
        "minutesActive": 89,
        "flightsOfStairs": 31
      },
      {
        "userID": 16,
        "date": "2019/09/21",
        "numSteps": 7336,
        "minutesActive": 230,
        "flightsOfStairs": 4
      },
      {
        "userID": 17,
        "date": "2019/09/21",
        "numSteps": 11328,
        "minutesActive": 74,
        "flightsOfStairs": 17
      },
      {
        "userID": 18,
        "date": "2019/09/21",
        "numSteps": 5534,
        "minutesActive": 263,
        "flightsOfStairs": 31
      },
      {
        "userID": 19,
        "date": "2019/09/21",
        "numSteps": 4991,
        "minutesActive": 81,
        "flightsOfStairs": 17
      },
      {
        "userID": 20,
        "date": "2019/09/21",
        "numSteps": 15000,
        "minutesActive": 30,
        "flightsOfStairs": 3
      },
      {
        "userID": 21,
        "date": "2019/09/21",
        "numSteps": 2480,
        "minutesActive": 120,
        "flightsOfStairs": 20
      },
      {
        "userID": 22,
        "date": "2019/09/21",
        "numSteps": 4483,
        "minutesActive": 157,
        "flightsOfStairs": 40
      },
      {
        "userID": 23,
        "date": "2019/09/21",
        "numSteps": 8801,
        "minutesActive": 82,
        "flightsOfStairs": 8
      },
      {
        "userID": 24,
        "date": "2019/09/21",
        "numSteps": 13304,
        "minutesActive": 86,
        "flightsOfStairs": 40
      },
      {
        "userID": 25,
        "date": "2019/09/21",
        "numSteps": 8791,
        "minutesActive": 150,
        "flightsOfStairs": 43
      },
      {
        "userID": 26,
        "date": "2019/09/21",
        "numSteps": 4752,
        "minutesActive": 48,
        "flightsOfStairs": 19
      },
      {
        "userID": 27,
        "date": "2019/09/21",
        "numSteps": 14646,
        "minutesActive": 232,
        "flightsOfStairs": 28
      },
      {
        "userID": 28,
        "date": "2019/09/21",
        "numSteps": 6547,
        "minutesActive": 296,
        "flightsOfStairs": 19
      },
      {
        "userID": 29,
        "date": "2019/09/21",
        "numSteps": 4267,
        "minutesActive": 180,
        "flightsOfStairs": 39
      },
      {
        "userID": 30,
        "date": "2019/09/21",
        "numSteps": 5011,
        "minutesActive": 60,
        "flightsOfStairs": 41
      },
      {
        "userID": 31,
        "date": "2019/09/21",
        "numSteps": 14081,
        "minutesActive": 298,
        "flightsOfStairs": 41
      },
      {
        "userID": 32,
        "date": "2019/09/21",
        "numSteps": 7296,
        "minutesActive": 89,
        "flightsOfStairs": 10
      },
      {
        "userID": 33,
        "date": "2019/09/21",
        "numSteps": 4070,
        "minutesActive": 168,
        "flightsOfStairs": 3
      },
      {
        "userID": 34,
        "date": "2019/09/21",
        "numSteps": 13350,
        "minutesActive": 62,
        "flightsOfStairs": 39
      },
      {
        "userID": 35,
        "date": "2019/09/21",
        "numSteps": 3549,
        "minutesActive": 30,
        "flightsOfStairs": 49
      },
      {
        "userID": 36,
        "date": "2019/09/21",
        "numSteps": 10728,
        "minutesActive": 53,
        "flightsOfStairs": 38
      },
      {
        "userID": 37,
        "date": "2019/09/21",
        "numSteps": 13499,
        "minutesActive": 166,
        "flightsOfStairs": 11
      },
      {
        "userID": 38,
        "date": "2019/09/21",
        "numSteps": 12580,
        "minutesActive": 154,
        "flightsOfStairs": 2
      },
      {
        "userID": 39,
        "date": "2019/09/21",
        "numSteps": 2951,
        "minutesActive": 234,
        "flightsOfStairs": 38
      },
      {
        "userID": 40,
        "date": "2019/09/21",
        "numSteps": 14752,
        "minutesActive": 109,
        "flightsOfStairs": 39
      },
      {
        "userID": 41,
        "date": "2019/09/21",
        "numSteps": 6436,
        "minutesActive": 133,
        "flightsOfStairs": 8
      },
      {
        "userID": 42,
        "date": "2019/09/21",
        "numSteps": 13272,
        "minutesActive": 279,
        "flightsOfStairs": 43
      },
      {
        "userID": 43,
        "date": "2019/09/21",
        "numSteps": 2842,
        "minutesActive": 268,
        "flightsOfStairs": 45
      },
      {
        "userID": 44,
        "date": "2019/09/21",
        "numSteps": 5953,
        "minutesActive": 233,
        "flightsOfStairs": 39
      },
      {
        "userID": 45,
        "date": "2019/09/21",
        "numSteps": 11766,
        "minutesActive": 268,
        "flightsOfStairs": 22
      },
      {
        "userID": 46,
        "date": "2019/09/21",
        "numSteps": 5689,
        "minutesActive": 255,
        "flightsOfStairs": 40
      },
      {
        "userID": 47,
        "date": "2019/09/21",
        "numSteps": 2507,
        "minutesActive": 165,
        "flightsOfStairs": 29
      },
      {
        "userID": 48,
        "date": "2019/09/21",
        "numSteps": 13896,
        "minutesActive": 238,
        "flightsOfStairs": 35
      },
      {
        "userID": 49,
        "date": "2019/09/21",
        "numSteps": 2162,
        "minutesActive": 51,
        "flightsOfStairs": 48
      },
      {
        "userID": 50,
        "date": "2019/09/21",
        "numSteps": 3229,
        "minutesActive": 272,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/09/22",
        "numSteps": 8072,
        "minutesActive": 239,
        "flightsOfStairs": 23
      },
      {
        "userID": 2,
        "date": "2019/09/22",
        "numSteps": 9050,
        "minutesActive": 25,
        "flightsOfStairs": 0
      },
      {
        "userID": 3,
        "date": "2019/09/22",
        "numSteps": 4831,
        "minutesActive": 144,
        "flightsOfStairs": 21
      },
      {
        "userID": 4,
        "date": "2019/09/22",
        "numSteps": 3030,
        "minutesActive": 285,
        "flightsOfStairs": 45
      },
      {
        "userID": 5,
        "date": "2019/09/22",
        "numSteps": 7073,
        "minutesActive": 278,
        "flightsOfStairs": 37
      },
      {
        "userID": 6,
        "date": "2019/09/22",
        "numSteps": 4128,
        "minutesActive": 31,
        "flightsOfStairs": 32
      },
      {
        "userID": 7,
        "date": "2019/09/22",
        "numSteps": 11853,
        "minutesActive": 148,
        "flightsOfStairs": 20
      },
      {
        "userID": 8,
        "date": "2019/09/22",
        "numSteps": 3034,
        "minutesActive": 113,
        "flightsOfStairs": 25
      },
      {
        "userID": 9,
        "date": "2019/09/22",
        "numSteps": 5883,
        "minutesActive": 160,
        "flightsOfStairs": 20
      },
      {
        "userID": 10,
        "date": "2019/09/22",
        "numSteps": 10931,
        "minutesActive": 147,
        "flightsOfStairs": 48
      },
      {
        "userID": 11,
        "date": "2019/09/22",
        "numSteps": 9314,
        "minutesActive": 264,
        "flightsOfStairs": 17
      },
      {
        "userID": 12,
        "date": "2019/09/22",
        "numSteps": 7983,
        "minutesActive": 289,
        "flightsOfStairs": 38
      },
      {
        "userID": 13,
        "date": "2019/09/22",
        "numSteps": 6968,
        "minutesActive": 149,
        "flightsOfStairs": 8
      },
      {
        "userID": 14,
        "date": "2019/09/22",
        "numSteps": 11078,
        "minutesActive": 212,
        "flightsOfStairs": 28
      },
      {
        "userID": 15,
        "date": "2019/09/22",
        "numSteps": 5951,
        "minutesActive": 161,
        "flightsOfStairs": 44
      },
      {
        "userID": 16,
        "date": "2019/09/22",
        "numSteps": 13706,
        "minutesActive": 114,
        "flightsOfStairs": 24
      },
      {
        "userID": 17,
        "date": "2019/09/22",
        "numSteps": 5796,
        "minutesActive": 88,
        "flightsOfStairs": 39
      },
      {
        "userID": 18,
        "date": "2019/09/22",
        "numSteps": 7454,
        "minutesActive": 43,
        "flightsOfStairs": 16
      },
      {
        "userID": 19,
        "date": "2019/09/22",
        "numSteps": 3343,
        "minutesActive": 270,
        "flightsOfStairs": 12
      },
      {
        "userID": 20,
        "date": "2019/09/22",
        "numSteps": 3490,
        "minutesActive": 42,
        "flightsOfStairs": 32
      },
      {
        "userID": 21,
        "date": "2019/09/22",
        "numSteps": 10527,
        "minutesActive": 295,
        "flightsOfStairs": 48
      },
      {
        "userID": 22,
        "date": "2019/09/22",
        "numSteps": 7346,
        "minutesActive": 192,
        "flightsOfStairs": 47
      },
      {
        "userID": 23,
        "date": "2019/09/22",
        "numSteps": 7024,
        "minutesActive": 215,
        "flightsOfStairs": 21
      },
      {
        "userID": 24,
        "date": "2019/09/22",
        "numSteps": 9998,
        "minutesActive": 249,
        "flightsOfStairs": 45
      },
      {
        "userID": 25,
        "date": "2019/09/22",
        "numSteps": 4408,
        "minutesActive": 236,
        "flightsOfStairs": 43
      },
      {
        "userID": 26,
        "date": "2019/09/22",
        "numSteps": 8411,
        "minutesActive": 77,
        "flightsOfStairs": 8
      },
      {
        "userID": 27,
        "date": "2019/09/22",
        "numSteps": 12086,
        "minutesActive": 160,
        "flightsOfStairs": 23
      },
      {
        "userID": 28,
        "date": "2019/09/22",
        "numSteps": 5464,
        "minutesActive": 217,
        "flightsOfStairs": 15
      },
      {
        "userID": 29,
        "date": "2019/09/22",
        "numSteps": 3788,
        "minutesActive": 277,
        "flightsOfStairs": 43
      },
      {
        "userID": 30,
        "date": "2019/09/22",
        "numSteps": 7169,
        "minutesActive": 142,
        "flightsOfStairs": 31
      },
      {
        "userID": 31,
        "date": "2019/09/22",
        "numSteps": 4314,
        "minutesActive": 63,
        "flightsOfStairs": 7
      },
      {
        "userID": 32,
        "date": "2019/09/22",
        "numSteps": 8434,
        "minutesActive": 292,
        "flightsOfStairs": 1
      },
      {
        "userID": 33,
        "date": "2019/09/22",
        "numSteps": 11953,
        "minutesActive": 184,
        "flightsOfStairs": 21
      },
      {
        "userID": 34,
        "date": "2019/09/22",
        "numSteps": 6937,
        "minutesActive": 104,
        "flightsOfStairs": 2
      },
      {
        "userID": 35,
        "date": "2019/09/22",
        "numSteps": 14835,
        "minutesActive": 138,
        "flightsOfStairs": 29
      },
      {
        "userID": 36,
        "date": "2019/09/22",
        "numSteps": 9488,
        "minutesActive": 157,
        "flightsOfStairs": 22
      },
      {
        "userID": 37,
        "date": "2019/09/22",
        "numSteps": 3997,
        "minutesActive": 195,
        "flightsOfStairs": 28
      },
      {
        "userID": 38,
        "date": "2019/09/22",
        "numSteps": 14346,
        "minutesActive": 116,
        "flightsOfStairs": 17
      },
      {
        "userID": 39,
        "date": "2019/09/22",
        "numSteps": 10135,
        "minutesActive": 121,
        "flightsOfStairs": 29
      },
      {
        "userID": 40,
        "date": "2019/09/22",
        "numSteps": 10729,
        "minutesActive": 98,
        "flightsOfStairs": 35
      },
      {
        "userID": 41,
        "date": "2019/09/22",
        "numSteps": 12736,
        "minutesActive": 103,
        "flightsOfStairs": 22
      },
      {
        "userID": 42,
        "date": "2019/09/22",
        "numSteps": 10268,
        "minutesActive": 41,
        "flightsOfStairs": 19
      },
      {
        "userID": 43,
        "date": "2019/09/22",
        "numSteps": 14908,
        "minutesActive": 134,
        "flightsOfStairs": 13
      },
      {
        "userID": 44,
        "date": "2019/09/22",
        "numSteps": 10581,
        "minutesActive": 165,
        "flightsOfStairs": 28
      },
      {
        "userID": 45,
        "date": "2019/09/22",
        "numSteps": 2040,
        "minutesActive": 289,
        "flightsOfStairs": 46
      },
      {
        "userID": 46,
        "date": "2019/09/22",
        "numSteps": 12046,
        "minutesActive": 253,
        "flightsOfStairs": 47
      },
      {
        "userID": 47,
        "date": "2019/09/22",
        "numSteps": 10894,
        "minutesActive": 119,
        "flightsOfStairs": 27
      },
      {
        "userID": 48,
        "date": "2019/09/22",
        "numSteps": 11105,
        "minutesActive": 118,
        "flightsOfStairs": 25
      },
      {
        "userID": 49,
        "date": "2019/09/22",
        "numSteps": 6815,
        "minutesActive": 244,
        "flightsOfStairs": 4
      },
      {
        "userID": 50,
        "date": "2019/09/22",
        "numSteps": 2121,
        "minutesActive": 237,
        "flightsOfStairs": 14
      }
    ];

    activityRepo = new ActivityRepo(dataset);
  });

  it.skip('should return the miles walked by a user based on steps', () => {    
    const miles = activityRepo.calculateMiles(3, '2019/09/21');

    expect(miles).to.equal(4.36);
  });

  it.skip('should return avg minutes active for a given week', () => {
    const endDate = '09/21/2019';
    const avgMinutes = activityRepo.calculateMinutesActive(33, endDate);

    expect(avgMinutes).to.equal(6424);
  });

  it.skip('should return all days a user exceeded their step goal', () => {
    const daysExceededGoal = activityRepo.calculateDaysExceededGoal(33);

    expect(daysExceededGoal).to.deep.equal(['2019/09/19', '2019/09/22']);
  });

  it.skip('should return user\'s all-time stair-climbing record', () => {
    const record = activityRepo.calculateStairRecord(22);

    expect(record).to.equal(47);
  });
});