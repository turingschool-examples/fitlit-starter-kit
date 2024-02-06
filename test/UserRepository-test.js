
import { expect } from 'chai';
import { getUserInfo } from '../src/scripts';
// import { users } from './usersSampleData'

// import userData from './usersSampleData';
// const { users } = require('./usersSampleData')



describe('User Repository', () => {
  it('should run tests', function () {
    expect(true).to.equal(true);
  });
});

describe('get user info', () => {
  it('should be a function', function () {
    expect(getUserInfo()).to.be.a('function')
  })
} )

// describe('display user data', () => {
//   it.skip('should be able to find user data using a user ID', function () {
//     const userID = 2
  
//     expect(getUserInfo(userID).be.equal.to({
//       "id": 2,
//       "name": "Tyreek VonRueden",
//       "address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
//       "email": "Nicolette_Halvorson43@yahoo.com",
//       "strideLength": 4.5,
//       "dailyStepGoal": 9000,
//       "friends": [
//         13,
//         19,
//         3
//       ]
//     },))

//   })
// })