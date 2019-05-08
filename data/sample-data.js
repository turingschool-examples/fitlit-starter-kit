const sampleData = [
  {
    "userID": 1,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 7368,
        "minutesActive": 204,
        "flightsOfStairs": 46
      },
      {
        "date": "07/05/2019",
        "numSteps": 3079,
        "minutesActive": 115,
        "flightsOfStairs": 4
      },
      {
        "date": "08/05/2019",
        "numSteps": 2387,
        "minutesActive": 179,
        "flightsOfStairs": 4
      },
      {
        "date": "09/05/2019",
        "numSteps": 6326,
        "minutesActive": 126,
        "flightsOfStairs": 26
      },
      {
        "date": "10/05/2019",
        "numSteps": 13644,
        "minutesActive": 220,
        "flightsOfStairs": 13
      },
      {
        "date": "11/05/2019",
        "numSteps": 4337,
        "minutesActive": 294,
        "flightsOfStairs": 15
      },
      {
        "date": "12/05/2019",
        "numSteps": 9068,
        "minutesActive": 97,
        "flightsOfStairs": 3
      },
      {
        "date": "13/05/2019",
        "numSteps": 2925,
        "minutesActive": 274,
        "flightsOfStairs": 10
      },
      {
        "date": "14/05/2019",
        "numSteps": 3338,
        "minutesActive": 142,
        "flightsOfStairs": 24
      },
      {
        "date": "15/05/2019",
        "numSteps": 12224,
        "minutesActive": 228,
        "flightsOfStairs": 32
      },
      {
        "date": "16/05/2019",
        "numSteps": 13622,
        "minutesActive": 50,
        "flightsOfStairs": 4
      },
      {
        "date": "17/05/2019",
        "numSteps": 4316,
        "minutesActive": 228,
        "flightsOfStairs": 31
      },
      {
        "date": "18/05/2019",
        "numSteps": 11335,
        "minutesActive": 108,
        "flightsOfStairs": 48
      },
      {
        "date": "19/05/2019",
        "numSteps": 14811,
        "minutesActive": 278,
        "flightsOfStairs": 11
      },
      {
        "date": "20/05/2019",
        "numSteps": 2485,
        "minutesActive": 115,
        "flightsOfStairs": 35
      },
      {
        "date": "21/05/2019",
        "numSteps": 14183,
        "minutesActive": 202,
        "flightsOfStairs": 21
      },
      {
        "date": "22/05/2019",
        "numSteps": 5338,
        "minutesActive": 286,
        "flightsOfStairs": 12
      },
      {
        "date": "23/05/2019",
        "numSteps": 14126,
        "minutesActive": 92,
        "flightsOfStairs": 4
      },
      {
        "date": "24/05/2019",
        "numSteps": 9413,
        "minutesActive": 168,
        "flightsOfStairs": 36
      },
      {
        "date": "25/05/2019",
        "numSteps": 4708,
        "minutesActive": 77,
        "flightsOfStairs": 37
      },
      {
        "date": "26/05/2019",
        "numSteps": 8529,
        "minutesActive": 30,
        "flightsOfStairs": 3
      },
      {
        "date": "27/05/2019",
        "numSteps": 2589,
        "minutesActive": 26,
        "flightsOfStairs": 13
      },
      {
        "date": "28/05/2019",
        "numSteps": 11328,
        "minutesActive": 53,
        "flightsOfStairs": 47
      },
      {
        "date": "29/05/2019",
        "numSteps": 12278,
        "minutesActive": 191,
        "flightsOfStairs": 23
      },
      {
        "date": "30/05/2019",
        "numSteps": 3951,
        "minutesActive": 230,
        "flightsOfStairs": 24
      },
      {
        "date": "31/05/2019",
        "numSteps": 7424,
        "minutesActive": 171,
        "flightsOfStairs": 6
      },
      {
        "date": "01/06/2019",
        "numSteps": 14340,
        "minutesActive": 133,
        "flightsOfStairs": 18
      },
      {
        "date": "02/06/2019",
        "numSteps": 8326,
        "minutesActive": 250,
        "flightsOfStairs": 8
      },
      {
        "date": "03/06/2019",
        "numSteps": 6546,
        "minutesActive": 282,
        "flightsOfStairs": 31
      },
      {
        "date": "04/06/2019",
        "numSteps": 3025,
        "minutesActive": 119,
        "flightsOfStairs": 48
      },
      {
        "date": "05/06/2019",
        "numSteps": 3753,
        "minutesActive": 295,
        "flightsOfStairs": 38
      },
      {
        "date": "06/06/2019",
        "numSteps": 6655,
        "minutesActive": 208,
        "flightsOfStairs": 5
      },
      {
        "date": "07/06/2019",
        "numSteps": 13531,
        "minutesActive": 240,
        "flightsOfStairs": 31
      },
      {
        "date": "08/06/2019",
        "numSteps": 13318,
        "minutesActive": 202,
        "flightsOfStairs": 41
      },
      {
        "date": "09/06/2019",
        "numSteps": 11783,
        "minutesActive": 211,
        "flightsOfStairs": 34
      },
      {
        "date": "10/06/2019",
        "numSteps": 7641,
        "minutesActive": 183,
        "flightsOfStairs": 21
      },
      {
        "date": "11/06/2019",
        "numSteps": 5955,
        "minutesActive": 202,
        "flightsOfStairs": 46
      },
      {
        "date": "12/06/2019",
        "numSteps": 8792,
        "minutesActive": 35,
        "flightsOfStairs": 1
      },
      {
        "date": "13/06/2019",
        "numSteps": 5194,
        "minutesActive": 25,
        "flightsOfStairs": 6
      },
      {
        "date": "14/06/2019",
        "numSteps": 13198,
        "minutesActive": 109,
        "flightsOfStairs": 38
      },
      {
        "date": "15/06/2019",
        "numSteps": 8528,
        "minutesActive": 62,
        "flightsOfStairs": 46
      },
      {
        "date": "16/06/2019",
        "numSteps": 12640,
        "minutesActive": 216,
        "flightsOfStairs": 46
      },
      {
        "date": "17/06/2019",
        "numSteps": 5299,
        "minutesActive": 117,
        "flightsOfStairs": 35
      },
      {
        "date": "18/06/2019",
        "numSteps": 5478,
        "minutesActive": 208,
        "flightsOfStairs": 50
      },
      {
        "date": "19/06/2019",
        "numSteps": 14055,
        "minutesActive": 204,
        "flightsOfStairs": 20
      },
      {
        "date": "20/06/2019",
        "numSteps": 9008,
        "minutesActive": 247,
        "flightsOfStairs": 44
      },
      {
        "date": "21/06/2019",
        "numSteps": 12556,
        "minutesActive": 43,
        "flightsOfStairs": 28
      },
      {
        "date": "22/06/2019",
        "numSteps": 8141,
        "minutesActive": 84,
        "flightsOfStairs": 17
      },
      {
        "date": "23/06/2019",
        "numSteps": 13158,
        "minutesActive": 285,
        "flightsOfStairs": 23
      },
      {
        "date": "24/06/2019",
        "numSteps": 10883,
        "minutesActive": 277,
        "flightsOfStairs": 18
      },
      {
        "date": "25/06/2019",
        "numSteps": 13741,
        "minutesActive": 88,
        "flightsOfStairs": 22
      },
      {
        "date": "26/06/2019",
        "numSteps": 13035,
        "minutesActive": 298,
        "flightsOfStairs": 23
      },
      {
        "date": "27/06/2019",
        "numSteps": 10322,
        "minutesActive": 89,
        "flightsOfStairs": 40
      },
      {
        "date": "28/06/2019",
        "numSteps": 10031,
        "minutesActive": 96,
        "flightsOfStairs": 14
      },
      {
        "date": "29/06/2019",
        "numSteps": 6086,
        "minutesActive": 47,
        "flightsOfStairs": 5
      },
      {
        "date": "30/06/2019",
        "numSteps": 2553,
        "minutesActive": 64,
        "flightsOfStairs": 10
      },
      {
        "date": "01/07/2019",
        "numSteps": 7677,
        "minutesActive": 146,
        "flightsOfStairs": 39
      },
      {
        "date": "02/07/2019",
        "numSteps": 2516,
        "minutesActive": 105,
        "flightsOfStairs": 2
      },
      {
        "date": "03/07/2019",
        "numSteps": 2411,
        "minutesActive": 115,
        "flightsOfStairs": 19
      },
      {
        "date": "04/07/2019",
        "numSteps": 8564,
        "minutesActive": 124,
        "flightsOfStairs": 12
      },
      {
        "date": "05/07/2019",
        "numSteps": 11592,
        "minutesActive": 24,
        "flightsOfStairs": 12
      },
      {
        "date": "06/07/2019",
        "numSteps": 6870,
        "minutesActive": 210,
        "flightsOfStairs": 2
      },
      {
        "date": "07/07/2019",
        "numSteps": 5966,
        "minutesActive": 210,
        "flightsOfStairs": 30
      },
      {
        "date": "08/07/2019",
        "numSteps": 12885,
        "minutesActive": 87,
        "flightsOfStairs": 14
      },
      {
        "date": "09/07/2019",
        "numSteps": 3433,
        "minutesActive": 169,
        "flightsOfStairs": 16
      },
      {
        "date": "10/07/2019",
        "numSteps": 14149,
        "minutesActive": 71,
        "flightsOfStairs": 9
      },
      {
        "date": "11/07/2019",
        "numSteps": 11063,
        "minutesActive": 251,
        "flightsOfStairs": 29
      },
      {
        "date": "12/07/2019",
        "numSteps": 2906,
        "minutesActive": 265,
        "flightsOfStairs": 19
      },
      {
        "date": "13/07/2019",
        "numSteps": 8665,
        "minutesActive": 35,
        "flightsOfStairs": 14
      },
      {
        "date": "14/07/2019",
        "numSteps": 9881,
        "minutesActive": 262,
        "flightsOfStairs": 22
      },
      {
        "date": "15/07/2019",
        "numSteps": 11335,
        "minutesActive": 163,
        "flightsOfStairs": 44
      },
      {
        "date": "16/07/2019",
        "numSteps": 3156,
        "minutesActive": 181,
        "flightsOfStairs": 5
      },
      {
        "date": "17/07/2019",
        "numSteps": 10583,
        "minutesActive": 167,
        "flightsOfStairs": 30
      },
      {
        "date": "18/07/2019",
        "numSteps": 6489,
        "minutesActive": 105,
        "flightsOfStairs": 24
      },
      {
        "date": "19/07/2019",
        "numSteps": 9087,
        "minutesActive": 150,
        "flightsOfStairs": 18
      },
      {
        "date": "20/07/2019",
        "numSteps": 3559,
        "minutesActive": 24,
        "flightsOfStairs": 22
      },
      {
        "date": "21/07/2019",
        "numSteps": 5016,
        "minutesActive": 227,
        "flightsOfStairs": 8
      },
      {
        "date": "22/07/2019",
        "numSteps": 3732,
        "minutesActive": 118,
        "flightsOfStairs": 17
      },
      {
        "date": "23/07/2019",
        "numSteps": 8938,
        "minutesActive": 81,
        "flightsOfStairs": 22
      },
      {
        "date": "24/07/2019",
        "numSteps": 14331,
        "minutesActive": 272,
        "flightsOfStairs": 36
      },
      {
        "date": "25/07/2019",
        "numSteps": 9966,
        "minutesActive": 85,
        "flightsOfStairs": 16
      },
      {
        "date": "26/07/2019",
        "numSteps": 13405,
        "minutesActive": 38,
        "flightsOfStairs": 13
      },
      {
        "date": "27/07/2019",
        "numSteps": 5478,
        "minutesActive": 54,
        "flightsOfStairs": 27
      },
      {
        "date": "28/07/2019",
        "numSteps": 14343,
        "minutesActive": 164,
        "flightsOfStairs": 9
      },
      {
        "date": "29/07/2019",
        "numSteps": 7336,
        "minutesActive": 85,
        "flightsOfStairs": 38
      },
      {
        "date": "30/07/2019",
        "numSteps": 6420,
        "minutesActive": 83,
        "flightsOfStairs": 8
      },
      {
        "date": "31/07/2019",
        "numSteps": 5657,
        "minutesActive": 222,
        "flightsOfStairs": 9
      },
      {
        "date": "01/08/2019",
        "numSteps": 13653,
        "minutesActive": 35,
        "flightsOfStairs": 48
      },
      {
        "date": "02/08/2019",
        "numSteps": 12642,
        "minutesActive": 264,
        "flightsOfStairs": 37
      },
      {
        "date": "03/08/2019",
        "numSteps": 11614,
        "minutesActive": 177,
        "flightsOfStairs": 28
      },
      {
        "date": "04/08/2019",
        "numSteps": 6867,
        "minutesActive": 200,
        "flightsOfStairs": 41
      },
      {
        "date": "05/08/2019",
        "numSteps": 7109,
        "minutesActive": 138,
        "flightsOfStairs": 42
      },
      {
        "date": "06/08/2019",
        "numSteps": 8771,
        "minutesActive": 278,
        "flightsOfStairs": 29
      },
      {
        "date": "07/08/2019",
        "numSteps": 4659,
        "minutesActive": 220,
        "flightsOfStairs": 16
      },
      {
        "date": "08/08/2019",
        "numSteps": 7084,
        "minutesActive": 26,
        "flightsOfStairs": 24
      },
      {
        "date": "09/08/2019",
        "numSteps": 9614,
        "minutesActive": 194,
        "flightsOfStairs": 36
      },
      {
        "date": "10/08/2019",
        "numSteps": 2553,
        "minutesActive": 119,
        "flightsOfStairs": 48
      },
      {
        "date": "11/08/2019",
        "numSteps": 8653,
        "minutesActive": 100,
        "flightsOfStairs": 15
      },
      {
        "date": "12/08/2019",
        "numSteps": 9814,
        "minutesActive": 283,
        "flightsOfStairs": 10
      },
      {
        "date": "13/08/2019",
        "numSteps": 14014,
        "minutesActive": 78,
        "flightsOfStairs": 38
      }
    ]
  }
];


if(typeof module !== 'undefined') {
  module.exports = sampleData;
}
