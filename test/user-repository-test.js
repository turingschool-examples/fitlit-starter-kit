const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../class/user-repository');


describe('UserRepository', function() {
  let data = [];

  beforeEach( () => {
    data = new UserRepository([{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }])
  }); //for each

 it('should have a parameter to take in user data', function() {
   expect(data.allUsers).to.deep.equal([{
     "id": 1,
     "name": "Luisa Hane",
     "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
     "email": "Diana.Hayes1@hotmail.com",
     "strideLength": 4.3,
     "dailyStepGoal": 10000,
     "friends": [
       16,
       4,
       8
     ]
   }]);
 });

 it('should have a method: Given a user ID, what is their user data', function(){
   expect(data.findUserData(0)).to.deep.equal(1);
 });

 it('should have a method: The average step goal amongst all users', function() {

   // console.log(dataStep.allUsers[0].dailyStepGoal, dataStep.calculateUsersStepGoal());
   expect(data.calculateUsersStepGoal()).to.deep.equal(10000);

 });

}); //end
