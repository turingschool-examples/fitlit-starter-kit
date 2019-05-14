const mockData = [
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
  },
  {
    "userID": 2,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 9101,
        "minutesActive": 202,
        "flightsOfStairs": 1
      },
      {
        "date": "07/05/2019",
        "numSteps": 11825,
        "minutesActive": 77,
        "flightsOfStairs": 28
      },
      {
        "date": "08/05/2019",
        "numSteps": 4423,
        "minutesActive": 266,
        "flightsOfStairs": 31
      },
      {
        "date": "09/05/2019",
        "numSteps": 6241,
        "minutesActive": 146,
        "flightsOfStairs": 43
      },
      {
        "date": "10/05/2019",
        "numSteps": 3455,
        "minutesActive": 154,
        "flightsOfStairs": 47
      },
      {
        "date": "11/05/2019",
        "numSteps": 2629,
        "minutesActive": 150,
        "flightsOfStairs": 19
      },
      {
        "date": "12/05/2019",
        "numSteps": 9521,
        "minutesActive": 240,
        "flightsOfStairs": 30
      },
      {
        "date": "13/05/2019",
        "numSteps": 10671,
        "minutesActive": 161,
        "flightsOfStairs": 23
      },
      {
        "date": "14/05/2019",
        "numSteps": 10847,
        "minutesActive": 248,
        "flightsOfStairs": 40
      },
      {
        "date": "15/05/2019",
        "numSteps": 3838,
        "minutesActive": 243,
        "flightsOfStairs": 10
      },
      {
        "date": "16/05/2019",
        "numSteps": 10201,
        "minutesActive": 290,
        "flightsOfStairs": 11
      },
      {
        "date": "17/05/2019",
        "numSteps": 5209,
        "minutesActive": 217,
        "flightsOfStairs": 29
      },
      {
        "date": "18/05/2019",
        "numSteps": 14091,
        "minutesActive": 90,
        "flightsOfStairs": 21
      },
      {
        "date": "19/05/2019",
        "numSteps": 6732,
        "minutesActive": 131,
        "flightsOfStairs": 14
      },
      {
        "date": "20/05/2019",
        "numSteps": 12816,
        "minutesActive": 159,
        "flightsOfStairs": 4
      },
      {
        "date": "21/05/2019",
        "numSteps": 7876,
        "minutesActive": 77,
        "flightsOfStairs": 47
      },
      {
        "date": "22/05/2019",
        "numSteps": 12927,
        "minutesActive": 117,
        "flightsOfStairs": 43
      },
      {
        "date": "23/05/2019",
        "numSteps": 6335,
        "minutesActive": 40,
        "flightsOfStairs": 38
      },
      {
        "date": "24/05/2019",
        "numSteps": 14922,
        "minutesActive": 260,
        "flightsOfStairs": 18
      },
      {
        "date": "25/05/2019",
        "numSteps": 10213,
        "minutesActive": 150,
        "flightsOfStairs": 40
      },
      {
        "date": "26/05/2019",
        "numSteps": 2998,
        "minutesActive": 296,
        "flightsOfStairs": 49
      },
      {
        "date": "27/05/2019",
        "numSteps": 14596,
        "minutesActive": 95,
        "flightsOfStairs": 18
      },
      {
        "date": "28/05/2019",
        "numSteps": 8608,
        "minutesActive": 267,
        "flightsOfStairs": 19
      },
      {
        "date": "29/05/2019",
        "numSteps": 9359,
        "minutesActive": 99,
        "flightsOfStairs": 11
      },
      {
        "date": "30/05/2019",
        "numSteps": 12056,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "date": "31/05/2019",
        "numSteps": 10529,
        "minutesActive": 286,
        "flightsOfStairs": 24
      },
      {
        "date": "01/06/2019",
        "numSteps": 9057,
        "minutesActive": 279,
        "flightsOfStairs": 1
      },
      {
        "date": "02/06/2019",
        "numSteps": 6606,
        "minutesActive": 98,
        "flightsOfStairs": 31
      },
      {
        "date": "03/06/2019",
        "numSteps": 8087,
        "minutesActive": 27,
        "flightsOfStairs": 31
      },
      {
        "date": "04/06/2019",
        "numSteps": 9314,
        "minutesActive": 221,
        "flightsOfStairs": 35
      },
      {
        "date": "05/06/2019",
        "numSteps": 5122,
        "minutesActive": 41,
        "flightsOfStairs": 23
      },
      {
        "date": "06/06/2019",
        "numSteps": 2730,
        "minutesActive": 144,
        "flightsOfStairs": 22
      },
      {
        "date": "07/06/2019",
        "numSteps": 5159,
        "minutesActive": 124,
        "flightsOfStairs": 29
      },
      {
        "date": "08/06/2019",
        "numSteps": 13360,
        "minutesActive": 39,
        "flightsOfStairs": 15
      },
      {
        "date": "09/06/2019",
        "numSteps": 14323,
        "minutesActive": 290,
        "flightsOfStairs": 25
      },
      {
        "date": "10/06/2019",
        "numSteps": 12376,
        "minutesActive": 134,
        "flightsOfStairs": 8
      },
      {
        "date": "11/06/2019",
        "numSteps": 8672,
        "minutesActive": 118,
        "flightsOfStairs": 45
      },
      {
        "date": "12/06/2019",
        "numSteps": 3365,
        "minutesActive": 194,
        "flightsOfStairs": 31
      },
      {
        "date": "13/06/2019",
        "numSteps": 10813,
        "minutesActive": 84,
        "flightsOfStairs": 45
      },
      {
        "date": "14/06/2019",
        "numSteps": 12331,
        "minutesActive": 36,
        "flightsOfStairs": 29
      },
      {
        "date": "15/06/2019",
        "numSteps": 10685,
        "minutesActive": 265,
        "flightsOfStairs": 7
      },
      {
        "date": "16/06/2019",
        "numSteps": 10508,
        "minutesActive": 174,
        "flightsOfStairs": 28
      },
      {
        "date": "17/06/2019",
        "numSteps": 12178,
        "minutesActive": 89,
        "flightsOfStairs": 23
      },
      {
        "date": "18/06/2019",
        "numSteps": 7247,
        "minutesActive": 28,
        "flightsOfStairs": 28
      },
      {
        "date": "19/06/2019",
        "numSteps": 5390,
        "minutesActive": 294,
        "flightsOfStairs": 45
      },
      {
        "date": "20/06/2019",
        "numSteps": 12726,
        "minutesActive": 229,
        "flightsOfStairs": 44
      },
      {
        "date": "21/06/2019",
        "numSteps": 5177,
        "minutesActive": 146,
        "flightsOfStairs": 7
      },
      {
        "date": "22/06/2019",
        "numSteps": 12031,
        "minutesActive": 49,
        "flightsOfStairs": 37
      },
      {
        "date": "23/06/2019",
        "numSteps": 14113,
        "minutesActive": 163,
        "flightsOfStairs": 7
      },
      {
        "date": "24/06/2019",
        "numSteps": 4532,
        "minutesActive": 173,
        "flightsOfStairs": 5
      },
      {
        "date": "25/06/2019",
        "numSteps": 4234,
        "minutesActive": 237,
        "flightsOfStairs": 47
      },
      {
        "date": "26/06/2019",
        "numSteps": 6445,
        "minutesActive": 89,
        "flightsOfStairs": 48
      },
      {
        "date": "27/06/2019",
        "numSteps": 2374,
        "minutesActive": 287,
        "flightsOfStairs": 26
      },
      {
        "date": "28/06/2019",
        "numSteps": 13056,
        "minutesActive": 92,
        "flightsOfStairs": 36
      },
      {
        "date": "29/06/2019",
        "numSteps": 10928,
        "minutesActive": 248,
        "flightsOfStairs": 35
      },
      {
        "date": "30/06/2019",
        "numSteps": 6104,
        "minutesActive": 298,
        "flightsOfStairs": 15
      },
      {
        "date": "01/07/2019",
        "numSteps": 4586,
        "minutesActive": 82,
        "flightsOfStairs": 44
      },
      {
        "date": "02/07/2019",
        "numSteps": 4641,
        "minutesActive": 288,
        "flightsOfStairs": 18
      },
      {
        "date": "03/07/2019",
        "numSteps": 7249,
        "minutesActive": 234,
        "flightsOfStairs": 40
      },
      {
        "date": "04/07/2019",
        "numSteps": 14267,
        "minutesActive": 222,
        "flightsOfStairs": 18
      },
      {
        "date": "05/07/2019",
        "numSteps": 4944,
        "minutesActive": 209,
        "flightsOfStairs": 19
      },
      {
        "date": "06/07/2019",
        "numSteps": 7055,
        "minutesActive": 185,
        "flightsOfStairs": 24
      },
      {
        "date": "07/07/2019",
        "numSteps": 5343,
        "minutesActive": 77,
        "flightsOfStairs": 49
      },
      {
        "date": "08/07/2019",
        "numSteps": 10370,
        "minutesActive": 76,
        "flightsOfStairs": 36
      },
      {
        "date": "09/07/2019",
        "numSteps": 8272,
        "minutesActive": 215,
        "flightsOfStairs": 18
      },
      {
        "date": "10/07/2019",
        "numSteps": 12695,
        "minutesActive": 283,
        "flightsOfStairs": 35
      },
      {
        "date": "11/07/2019",
        "numSteps": 7795,
        "minutesActive": 195,
        "flightsOfStairs": 6
      },
      {
        "date": "12/07/2019",
        "numSteps": 13435,
        "minutesActive": 86,
        "flightsOfStairs": 19
      },
      {
        "date": "13/07/2019",
        "numSteps": 5908,
        "minutesActive": 178,
        "flightsOfStairs": 46
      },
      {
        "date": "14/07/2019",
        "numSteps": 13071,
        "minutesActive": 123,
        "flightsOfStairs": 41
      },
      {
        "date": "15/07/2019",
        "numSteps": 8576,
        "minutesActive": 81,
        "flightsOfStairs": 25
      },
      {
        "date": "16/07/2019",
        "numSteps": 10415,
        "minutesActive": 130,
        "flightsOfStairs": 32
      },
      {
        "date": "17/07/2019",
        "numSteps": 8785,
        "minutesActive": 109,
        "flightsOfStairs": 1
      },
      {
        "date": "18/07/2019",
        "numSteps": 8199,
        "minutesActive": 50,
        "flightsOfStairs": 49
      },
      {
        "date": "19/07/2019",
        "numSteps": 11468,
        "minutesActive": 278,
        "flightsOfStairs": 32
      },
      {
        "date": "20/07/2019",
        "numSteps": 13129,
        "minutesActive": 298,
        "flightsOfStairs": 19
      },
      {
        "date": "21/07/2019",
        "numSteps": 3534,
        "minutesActive": 35,
        "flightsOfStairs": 26
      },
      {
        "date": "22/07/2019",
        "numSteps": 8769,
        "minutesActive": 167,
        "flightsOfStairs": 20
      },
      {
        "date": "23/07/2019",
        "numSteps": 3706,
        "minutesActive": 233,
        "flightsOfStairs": 20
      },
      {
        "date": "24/07/2019",
        "numSteps": 10879,
        "minutesActive": 220,
        "flightsOfStairs": 46
      },
      {
        "date": "25/07/2019",
        "numSteps": 7113,
        "minutesActive": 185,
        "flightsOfStairs": 30
      },
      {
        "date": "26/07/2019",
        "numSteps": 8417,
        "minutesActive": 261,
        "flightsOfStairs": 27
      },
      {
        "date": "27/07/2019",
        "numSteps": 2306,
        "minutesActive": 68,
        "flightsOfStairs": 2
      },
      {
        "date": "28/07/2019",
        "numSteps": 6320,
        "minutesActive": 94,
        "flightsOfStairs": 24
      },
      {
        "date": "29/07/2019",
        "numSteps": 10389,
        "minutesActive": 147,
        "flightsOfStairs": 22
      },
      {
        "date": "30/07/2019",
        "numSteps": 5595,
        "minutesActive": 75,
        "flightsOfStairs": 18
      },
      {
        "date": "31/07/2019",
        "numSteps": 5135,
        "minutesActive": 137,
        "flightsOfStairs": 44
      },
      {
        "date": "01/08/2019",
        "numSteps": 8159,
        "minutesActive": 191,
        "flightsOfStairs": 5
      },
      {
        "date": "02/08/2019",
        "numSteps": 10840,
        "minutesActive": 74,
        "flightsOfStairs": 1
      },
      {
        "date": "03/08/2019",
        "numSteps": 6996,
        "minutesActive": 204,
        "flightsOfStairs": 14
      },
      {
        "date": "04/08/2019",
        "numSteps": 4600,
        "minutesActive": 70,
        "flightsOfStairs": 40
      },
      {
        "date": "05/08/2019",
        "numSteps": 3263,
        "minutesActive": 237,
        "flightsOfStairs": 27
      },
      {
        "date": "06/08/2019",
        "numSteps": 14835,
        "minutesActive": 214,
        "flightsOfStairs": 47
      },
      {
        "date": "07/08/2019",
        "numSteps": 4899,
        "minutesActive": 243,
        "flightsOfStairs": 10
      },
      {
        "date": "08/08/2019",
        "numSteps": 13745,
        "minutesActive": 129,
        "flightsOfStairs": 26
      },
      {
        "date": "09/08/2019",
        "numSteps": 4593,
        "minutesActive": 253,
        "flightsOfStairs": 2
      },
      {
        "date": "10/08/2019",
        "numSteps": 7506,
        "minutesActive": 194,
        "flightsOfStairs": 14
      },
      {
        "date": "11/08/2019",
        "numSteps": 9681,
        "minutesActive": 145,
        "flightsOfStairs": 40
      },
      {
        "date": "12/08/2019",
        "numSteps": 8175,
        "minutesActive": 77,
        "flightsOfStairs": 21
      },
      {
        "date": "13/08/2019",
        "numSteps": 5971,
        "minutesActive": 66,
        "flightsOfStairs": 8
      }
    ]
  },
  {
    "userID": 3,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 2420,
        "minutesActive": 121,
        "flightsOfStairs": 22
      },
      {
        "date": "07/05/2019",
        "numSteps": 2280,
        "minutesActive": 235,
        "flightsOfStairs": 36
      },
      {
        "date": "08/05/2019",
        "numSteps": 4483,
        "minutesActive": 75,
        "flightsOfStairs": 29
      },
      {
        "date": "09/05/2019",
        "numSteps": 14339,
        "minutesActive": 260,
        "flightsOfStairs": 0
      },
      {
        "date": "10/05/2019",
        "numSteps": 12365,
        "minutesActive": 184,
        "flightsOfStairs": 21
      },
      {
        "date": "11/05/2019",
        "numSteps": 7547,
        "minutesActive": 100,
        "flightsOfStairs": 25
      },
      {
        "date": "12/05/2019",
        "numSteps": 13594,
        "minutesActive": 22,
        "flightsOfStairs": 30
      },
      {
        "date": "13/05/2019",
        "numSteps": 14585,
        "minutesActive": 285,
        "flightsOfStairs": 19
      },
      {
        "date": "14/05/2019",
        "numSteps": 13542,
        "minutesActive": 234,
        "flightsOfStairs": 50
      },
      {
        "date": "15/05/2019",
        "numSteps": 6024,
        "minutesActive": 43,
        "flightsOfStairs": 18
      },
      {
        "date": "16/05/2019",
        "numSteps": 13780,
        "minutesActive": 42,
        "flightsOfStairs": 28
      },
      {
        "date": "17/05/2019",
        "numSteps": 4715,
        "minutesActive": 127,
        "flightsOfStairs": 13
      },
      {
        "date": "18/05/2019",
        "numSteps": 2085,
        "minutesActive": 168,
        "flightsOfStairs": 44
      },
      {
        "date": "19/05/2019",
        "numSteps": 6687,
        "minutesActive": 249,
        "flightsOfStairs": 14
      },
      {
        "date": "20/05/2019",
        "numSteps": 14263,
        "minutesActive": 274,
        "flightsOfStairs": 44
      },
      {
        "date": "21/05/2019",
        "numSteps": 14364,
        "minutesActive": 283,
        "flightsOfStairs": 25
      },
      {
        "date": "22/05/2019",
        "numSteps": 7230,
        "minutesActive": 138,
        "flightsOfStairs": 17
      },
      {
        "date": "23/05/2019",
        "numSteps": 7353,
        "minutesActive": 291,
        "flightsOfStairs": 24
      },
      {
        "date": "24/05/2019",
        "numSteps": 7340,
        "minutesActive": 53,
        "flightsOfStairs": 38
      },
      {
        "date": "25/05/2019",
        "numSteps": 8004,
        "minutesActive": 262,
        "flightsOfStairs": 7
      },
      {
        "date": "26/05/2019",
        "numSteps": 2443,
        "minutesActive": 200,
        "flightsOfStairs": 38
      },
      {
        "date": "27/05/2019",
        "numSteps": 8438,
        "minutesActive": 40,
        "flightsOfStairs": 22
      },
      {
        "date": "28/05/2019",
        "numSteps": 14684,
        "minutesActive": 87,
        "flightsOfStairs": 20
      },
      {
        "date": "29/05/2019",
        "numSteps": 7030,
        "minutesActive": 172,
        "flightsOfStairs": 4
      },
      {
        "date": "30/05/2019",
        "numSteps": 9398,
        "minutesActive": 108,
        "flightsOfStairs": 30
      },
      {
        "date": "31/05/2019",
        "numSteps": 11022,
        "minutesActive": 128,
        "flightsOfStairs": 31
      },
      {
        "date": "01/06/2019",
        "numSteps": 5603,
        "minutesActive": 204,
        "flightsOfStairs": 39
      },
      {
        "date": "02/06/2019",
        "numSteps": 5117,
        "minutesActive": 197,
        "flightsOfStairs": 45
      },
      {
        "date": "03/06/2019",
        "numSteps": 6975,
        "minutesActive": 226,
        "flightsOfStairs": 48
      },
      {
        "date": "04/06/2019",
        "numSteps": 7366,
        "minutesActive": 243,
        "flightsOfStairs": 3
      },
      {
        "date": "05/06/2019",
        "numSteps": 13861,
        "minutesActive": 25,
        "flightsOfStairs": 18
      },
      {
        "date": "06/06/2019",
        "numSteps": 2978,
        "minutesActive": 274,
        "flightsOfStairs": 30
      },
      {
        "date": "07/06/2019",
        "numSteps": 9735,
        "minutesActive": 271,
        "flightsOfStairs": 3
      },
      {
        "date": "08/06/2019",
        "numSteps": 14097,
        "minutesActive": 287,
        "flightsOfStairs": 2
      },
      {
        "date": "09/06/2019",
        "numSteps": 10235,
        "minutesActive": 222,
        "flightsOfStairs": 22
      },
      {
        "date": "10/06/2019",
        "numSteps": 14280,
        "minutesActive": 219,
        "flightsOfStairs": 5
      },
      {
        "date": "11/06/2019",
        "numSteps": 2035,
        "minutesActive": 122,
        "flightsOfStairs": 15
      },
      {
        "date": "12/06/2019",
        "numSteps": 12521,
        "minutesActive": 159,
        "flightsOfStairs": 16
      },
      {
        "date": "13/06/2019",
        "numSteps": 2851,
        "minutesActive": 75,
        "flightsOfStairs": 11
      },
      {
        "date": "14/06/2019",
        "numSteps": 14020,
        "minutesActive": 189,
        "flightsOfStairs": 16
      },
      {
        "date": "15/06/2019",
        "numSteps": 6074,
        "minutesActive": 39,
        "flightsOfStairs": 28
      },
      {
        "date": "16/06/2019",
        "numSteps": 2735,
        "minutesActive": 151,
        "flightsOfStairs": 38
      },
      {
        "date": "17/06/2019",
        "numSteps": 3085,
        "minutesActive": 80,
        "flightsOfStairs": 41
      },
      {
        "date": "18/06/2019",
        "numSteps": 10490,
        "minutesActive": 275,
        "flightsOfStairs": 15
      },
      {
        "date": "19/06/2019",
        "numSteps": 6683,
        "minutesActive": 261,
        "flightsOfStairs": 12
      },
      {
        "date": "20/06/2019",
        "numSteps": 13312,
        "minutesActive": 249,
        "flightsOfStairs": 24
      },
      {
        "date": "21/06/2019",
        "numSteps": 6888,
        "minutesActive": 152,
        "flightsOfStairs": 22
      },
      {
        "date": "22/06/2019",
        "numSteps": 7537,
        "minutesActive": 228,
        "flightsOfStairs": 22
      },
      {
        "date": "23/06/2019",
        "numSteps": 8251,
        "minutesActive": 32,
        "flightsOfStairs": 47
      },
      {
        "date": "24/06/2019",
        "numSteps": 4228,
        "minutesActive": 119,
        "flightsOfStairs": 23
      },
      {
        "date": "25/06/2019",
        "numSteps": 10275,
        "minutesActive": 270,
        "flightsOfStairs": 35
      },
      {
        "date": "26/06/2019",
        "numSteps": 4027,
        "minutesActive": 180,
        "flightsOfStairs": 10
      },
      {
        "date": "27/06/2019",
        "numSteps": 11642,
        "minutesActive": 181,
        "flightsOfStairs": 14
      },
      {
        "date": "28/06/2019",
        "numSteps": 10227,
        "minutesActive": 150,
        "flightsOfStairs": 28
      },
      {
        "date": "29/06/2019",
        "numSteps": 13498,
        "minutesActive": 227,
        "flightsOfStairs": 0
      },
      {
        "date": "30/06/2019",
        "numSteps": 5041,
        "minutesActive": 112,
        "flightsOfStairs": 24
      },
      {
        "date": "01/07/2019",
        "numSteps": 11864,
        "minutesActive": 199,
        "flightsOfStairs": 40
      },
      {
        "date": "02/07/2019",
        "numSteps": 14335,
        "minutesActive": 181,
        "flightsOfStairs": 10
      },
      {
        "date": "03/07/2019",
        "numSteps": 7111,
        "minutesActive": 278,
        "flightsOfStairs": 3
      },
      {
        "date": "04/07/2019",
        "numSteps": 5008,
        "minutesActive": 115,
        "flightsOfStairs": 25
      },
      {
        "date": "05/07/2019",
        "numSteps": 6926,
        "minutesActive": 117,
        "flightsOfStairs": 27
      },
      {
        "date": "06/07/2019",
        "numSteps": 6026,
        "minutesActive": 204,
        "flightsOfStairs": 6
      },
      {
        "date": "07/07/2019",
        "numSteps": 14358,
        "minutesActive": 89,
        "flightsOfStairs": 13
      },
      {
        "date": "08/07/2019",
        "numSteps": 11368,
        "minutesActive": 88,
        "flightsOfStairs": 48
      },
      {
        "date": "09/07/2019",
        "numSteps": 7822,
        "minutesActive": 105,
        "flightsOfStairs": 15
      },
      {
        "date": "10/07/2019",
        "numSteps": 3254,
        "minutesActive": 286,
        "flightsOfStairs": 30
      },
      {
        "date": "11/07/2019",
        "numSteps": 14666,
        "minutesActive": 286,
        "flightsOfStairs": 1
      },
      {
        "date": "12/07/2019",
        "numSteps": 5340,
        "minutesActive": 240,
        "flightsOfStairs": 44
      },
      {
        "date": "13/07/2019",
        "numSteps": 8617,
        "minutesActive": 247,
        "flightsOfStairs": 13
      },
      {
        "date": "14/07/2019",
        "numSteps": 14543,
        "minutesActive": 48,
        "flightsOfStairs": 36
      },
      {
        "date": "15/07/2019",
        "numSteps": 3381,
        "minutesActive": 112,
        "flightsOfStairs": 17
      },
      {
        "date": "16/07/2019",
        "numSteps": 5823,
        "minutesActive": 135,
        "flightsOfStairs": 18
      },
      {
        "date": "17/07/2019",
        "numSteps": 14633,
        "minutesActive": 48,
        "flightsOfStairs": 25
      },
      {
        "date": "18/07/2019",
        "numSteps": 7607,
        "minutesActive": 196,
        "flightsOfStairs": 40
      },
      {
        "date": "19/07/2019",
        "numSteps": 9784,
        "minutesActive": 61,
        "flightsOfStairs": 8
      },
      {
        "date": "20/07/2019",
        "numSteps": 7572,
        "minutesActive": 60,
        "flightsOfStairs": 13
      },
      {
        "date": "21/07/2019",
        "numSteps": 7421,
        "minutesActive": 80,
        "flightsOfStairs": 46
      },
      {
        "date": "22/07/2019",
        "numSteps": 7381,
        "minutesActive": 112,
        "flightsOfStairs": 27
      },
      {
        "date": "23/07/2019",
        "numSteps": 2818,
        "minutesActive": 177,
        "flightsOfStairs": 31
      },
      {
        "date": "24/07/2019",
        "numSteps": 11446,
        "minutesActive": 143,
        "flightsOfStairs": 32
      },
      {
        "date": "25/07/2019",
        "numSteps": 12293,
        "minutesActive": 223,
        "flightsOfStairs": 23
      },
      {
        "date": "26/07/2019",
        "numSteps": 4823,
        "minutesActive": 131,
        "flightsOfStairs": 4
      },
      {
        "date": "27/07/2019",
        "numSteps": 13619,
        "minutesActive": 194,
        "flightsOfStairs": 22
      },
      {
        "date": "28/07/2019",
        "numSteps": 4388,
        "minutesActive": 174,
        "flightsOfStairs": 16
      },
      {
        "date": "29/07/2019",
        "numSteps": 2551,
        "minutesActive": 295,
        "flightsOfStairs": 27
      },
      {
        "date": "30/07/2019",
        "numSteps": 10862,
        "minutesActive": 237,
        "flightsOfStairs": 14
      },
      {
        "date": "31/07/2019",
        "numSteps": 11557,
        "minutesActive": 151,
        "flightsOfStairs": 33
      },
      {
        "date": "01/08/2019",
        "numSteps": 14111,
        "minutesActive": 129,
        "flightsOfStairs": 17
      },
      {
        "date": "02/08/2019",
        "numSteps": 3668,
        "minutesActive": 30,
        "flightsOfStairs": 10
      },
      {
        "date": "03/08/2019",
        "numSteps": 2474,
        "minutesActive": 208,
        "flightsOfStairs": 16
      },
      {
        "date": "04/08/2019",
        "numSteps": 5924,
        "minutesActive": 83,
        "flightsOfStairs": 39
      },
      {
        "date": "05/08/2019",
        "numSteps": 7405,
        "minutesActive": 228,
        "flightsOfStairs": 33
      },
      {
        "date": "06/08/2019",
        "numSteps": 10189,
        "minutesActive": 146,
        "flightsOfStairs": 32
      },
      {
        "date": "07/08/2019",
        "numSteps": 4698,
        "minutesActive": 110,
        "flightsOfStairs": 39
      },
      {
        "date": "08/08/2019",
        "numSteps": 9620,
        "minutesActive": 207,
        "flightsOfStairs": 41
      },
      {
        "date": "09/08/2019",
        "numSteps": 14570,
        "minutesActive": 99,
        "flightsOfStairs": 49
      },
      {
        "date": "10/08/2019",
        "numSteps": 7161,
        "minutesActive": 69,
        "flightsOfStairs": 46
      },
      {
        "date": "11/08/2019",
        "numSteps": 11471,
        "minutesActive": 258,
        "flightsOfStairs": 33
      },
      {
        "date": "12/08/2019",
        "numSteps": 5011,
        "minutesActive": 289,
        "flightsOfStairs": 30
      },
      {
        "date": "13/08/2019",
        "numSteps": 12855,
        "minutesActive": 149,
        "flightsOfStairs": 17
      }
    ]
  }
]

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = mockData;
}