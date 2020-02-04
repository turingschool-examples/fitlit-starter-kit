const testData = [
  {
    "id": 1,
    "name": "Hannah Hudson",
    "address": "1234 Fake Street, Townsville PR 00000-0000",
    "email": "HannahHudson@turing.io",
    "strideLength": 3.7,
    "dailyStepGoal": 2000,
    "friends": [1, 111]
  },
  {
    "id": 11,
    "name": "Khalid Williams",
    "address": "420 Snap Way, Metropolis KS 04038-3499",
    "email": "khalid.williams@outlook.com",
    "strideLength": 5.2,
    "dailyStepGoal": 6000,
    "friends": [1]
  },
  {
    "id": 111,
    "name": "Will Mitchell",
    "address": "1331 17th Street, Denver CO 80202-0274",
    "email": "wvmitchell@gmail.com",
    "strideLength": 4.0,
    "dailyStepGoal": 10000,
    "friends": []
  }
];

// module.exports = {
//   testData
// }

if (typeof module !== 'undefined') {
   module.exports = testData;
  }