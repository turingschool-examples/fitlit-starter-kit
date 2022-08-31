import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  it('should be a function', () => {
    let hydration = new Hydration()
    expect(Hydration).to.be.a('function')
  })

  it('should take in a user ID', () => {
    let user1Data = {
      userID: 1,
      date: "2019/06/15",
      numOunces: 37
    }
    let hydration = new Hydration(userID)
  })
})

// describe('Hydration', () => {
//   let hydration;
//   let user1Data;
//   let user2Data;
//   let userID;
//
//   beforeEach(() => {
//     hydration = new Hydration(userID)
//     user1Data = {
//         userID: 1,
//         date: "2019/06/15",
//         numOunces: 37
//       }
//       user2Data = {
//         userID: 2,
//         date: "2019/06/15",
//         numOunces: 75
//       }
//   });
