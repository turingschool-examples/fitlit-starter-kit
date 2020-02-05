const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {
  it('should be a function', function() {
   //  let user = {
   //   "id": 4,
   //   "name": "Mae Connelly",
   //   "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
   //   "email": "Marcos_Pollich@hotmail.com",
   //   "strideLength": 3.1,
   //   "dailyStepGoal": 4000,
   //   "friends": [
   //     48,
   //     7,
   //     44,
   //     8
   //   ]
   // }
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
  let user1 = {
     "id": 4,
     "name": "Mae Connelly",
     "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
     "email": "Marcos_Pollich@hotmail.com",
     "strideLength": 3.1,
     "dailyStepGoal": 4000,
     "friends": [
       48,
       7,
       44,
       8
     ]
   }
  const user = new User(user1);
  expect(user).to.be.an.instanceof(User);
  });

  it('should return Users first name', function() {
    let user1 = {
       "id": 4,
       "name": "Mae Connelly",
       "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
       "email": "Marcos_Pollich@hotmail.com",
       "strideLength": 3.1,
       "dailyStepGoal": 4000,
       "friends": [
         48,
         7,
         44,
         8
       ]
     }
    const user = new User(user1);
    expect(user.returnUserFirstName()).to.equal("Mae");

  });
});
