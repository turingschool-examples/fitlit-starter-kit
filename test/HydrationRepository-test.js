const chai = require('chai');
const expect = chai.expect;
const hydrationTestDataFile = require('../data/hydration-test-data');
const hydrationTestDataArray = hydrationTestDataFile.testHydration;
const Hydration = require('../src/Hydration');
const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  // let users, userRepository;

  beforeEach(() => {
    // users = userTestData.map(userObject => {
    //   const user = new User(userObject);
    //   return user;
    // });
    // userRepository = new UserRepository(users);
  })

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  })

  // it('should be an instance of User', () => {
  //   expect(userRepository).to.be.an.instanceof(UserRepository);
  // })
  //
  // it('should hold all User objects', () => {
  //   expect(userRepository.userInstanceData[0]).to.deep.equal(users[0]);
  // })
  //
  // it('should return a users data given their user ID', () => {
  //   expect(userRepository.returnUserData(1)).to.deep.equal({
  //     id: 1,
  //     name: "Cole Fiscus",
  //     address: "7362 Gonzaga Blvd, Spokane WA 19982",
  //     email: "gonzagasucks@hotmail.com",
  //     strideLength: 5.8,
  //     dailyStepGoal: 400,
  //     friends: [
  //       2,
  //       3
  //     ]
  //   });
  // })
  //
  // it('should calculate the average step goal amongst all users', () => {
  //   expect(userRepository.calculateAverageStepGoal()).to.equal(7973);
  // })

})
