import { expect } from 'chai';
// import { getUserDataById } from './src/scripts.js'
const { getUserDataById } = require('../src/scripts.js');

// import userData from './data/users';



describe('User Repository', () => {
  it('should run tests', function () {
    expect(true).to.equal(true);
  });
});

// describe('User Data', () => {
//   it('should return user data based on ID', function (){
//     const user1 = getUserDataById(userData)
//     expect(user1.id).to.equal(1)
//   })
// })