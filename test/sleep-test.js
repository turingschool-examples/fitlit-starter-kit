// import { expect } from 'chai';
// import SleepRepository from '../src/sleep-repository';
// import Sleep from '../src/Sleep';
//
// describe('Sleep', () => {
//
// let sleepData;
// let sleepRepo;
// let sleep;
//
// beforeEach( () => {
//   sleepData = [
//     {
//       "userID":1,
//       "date":"2019/06/15",
//       "hoursSlept":6.1,
//       "sleepQuality":2.2
//     },
//     {
//       "userID":2,
//       "date":"2019/06/15",
//       "hoursSlept":7,
//       "sleepQuality":4.7
//     },
//     {
//       "userID":3,
//       "date":"2019/06/15",
//       "hoursSlept":10.8,
//       "sleepQuality":4.7
//     },
//     {
//       "userID":1,
//       "date":"2019/06/16",
//       "hoursSlept":4.1,
//       "sleepQuality":3.8
//     },
//     {
//       "userID":2,
//       "date":"2019/06/16",
//       "hoursSlept":7.5,
//       "sleepQuality":3.8
//     },
//     {
//       "userID":3,
//     "date":"2019/06/16",
//     "hoursSlept":10.7,
//     "sleepQuality":3.4
//     },
//   ];
//
//     sleepRepo = new SleepRepository(sleepData);
//     sleep = new Sleep(1);
//
//   });
//   it('should be a function', function () {
//     expect(Sleep).to.be.a('function');
//   });
//
//   it('should be an instance of Sleep', () => {
//     expect(sleep).to.be.an.instanceOf(Sleep);
//   });
//
//   it('should return the average hours slept per day when given a userID', () => {
//     expect(sleepRepo.calculateAvgHoursSlept(1)).to.equal();
//   });
//
// });
