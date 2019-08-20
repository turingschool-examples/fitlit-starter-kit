const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/users-repository');
const { userData } = require('../data/test-data')


describe('UserRepository', function() {

  it('should be a function', () => {

    // let obj = {
    //   id: 1,
    //   name: "Luisa Hane",
    //   address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    //   email: "Diana.Hayes1@hotmail.com",
    //   strideLength: 4.3,
    //   dailyStepGoal: 10000,
    //   friends: [16, 4, 8]
    // };
    // console.log(userData);

    const userRepo = new UserRepository(obj);

    expect(UserRepository).to.be.a('function');
  })

})