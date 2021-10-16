import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';


describe('User Repository', () => {
  let userData, user, userRepository;
  beforeEach(function(){
    userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    user = new User(userData);
    userRepository = new UserRepository(user);
  });
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should store user data',function () {
    expect(userRepository.users[0]).to.be.an.instanceof(User);
  });

  it('should display user data based on user id', function () {
    expect(userRepository.showData(1)).to.deep.equal(userData);
    expect(userRepository.showData(0)).to.deep.equal(undefined);
  });

  it('should display average step goal amongst all users',function () {
    const userData1 = {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    }
    const userData2 = {
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 3000,
      "friends": [19, 11, 42, 33]
    }
    const user1 = new User(userData1);
    const user2 = new User(userData2);
    userRepository.users.push(user1,user2);
    expect(userRepository.calculateAvgStepGoal()).to.equal(6000);

  })


});
