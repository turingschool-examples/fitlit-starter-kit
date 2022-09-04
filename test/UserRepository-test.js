import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';


describe('UserRepository', () => {
  let userRepository;
  let users;

  beforeEach(() => {
    userRepository = new UserRepository(users);

    users = [
      new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [
      16,
      4,
      8
      ]
    }),

    new User({
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [
      9,
      18,
      24,
      19
      ]
      }),

      new User({
      id: 3,
      name: "Herminia Witting",
      address: "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      email: "Elwin.Tromp@yahoo.com",
      strideLength: 4.4,
      dailyStepGoal: 5000,
      friends: [
      19,
      11,
      42,
      33
      ]
      }),
    ];
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  });

  it('should be an instance of User Repository', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  });

  it('should store an array of users', () => {
    expect(userRepository.users).to.deep.equal(users)
  });

  it('should determine which user information to retrieve by ID', () => {
    expect(userRepository.findUserData(1)).to.deep.equal();
    expect(userRepository.findUserData(2)).to.deep.equal();
  });

  it('should return average of all user step goals', () => {
    expect(userRepository.calculateAvgStepGoal()).to.equal(6667)
  });

  it("should return today's date", () => {
    expect(userRepository.findToday(1)).to.deep.equal(users[1])
  })
});
