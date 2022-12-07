import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users';

describe('UserRepository', () => {
  let user1, user2, user3, userRepository;

beforeEach(() => {
  user1 = new User({
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
    ],
  },
    {sleepData: [
    {userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2},
    {userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8},
    {userID: 1, date: '2019/06/17', hoursSlept: 5.4, sleepQuality: 3.6}
  ]},

    {hydrationData: [
    {userID: 1, date: '2019/06/15', numOunces: 70},
    {userID: 1, date: '2019/06/16', numOunces: 65},
    {userID: 1, date: '2019/06/17', numOunces: 73}
  ]})
  user2 = new User({
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
        9,
        18,
        24,
        19
    ],
},
    {sleepData: [
    {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7},
    {userID: 2, date: '2019/06/16', hoursSlept: 3.1, sleepQuality: 3.1},
    {userID: 2, date: '2019/06/17', hoursSlept: 5.8, sleepQuality: 3.3}
  ]},
    
    {hydrationData: [
    {userID: 2, date: '2019/06/15', numOunces: 65},
    {userID: 2, date: '2019/06/16', numOunces: 60},
    {userID: 2, date: '2019/06/17', numOunces: 71}
  ]}
)
  user3 = new User({
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
        19,
        11,
        42,
        33
    ],
},
    
  {sleepData: [
  {userID: 3, date: '2019/06/15', hoursSlept: 6.3, sleepQuality: 3.7},
  {userID: 3, date: '2019/06/16', hoursSlept: 4.7, sleepQuality: 4.1},
  {userID: 3, date: '2019/06/17', hoursSlept: 5.8, sleepQuality: 3.9}
  ]},

  {hydrationData: [
  {userID: 3, date: '2019/06/15', numOunces: 78},
  {userID: 3, date: '2019/06/16', numOunces: 40},
  {userID: 3, date: '2019/06/17', numOunces: 60}
  ]}
  )
  userRepository = new UserRepository([user1, user2, user3])
  })

  it('should be a function', function () {

    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function () {
   
    expect(userRepository.data).to.deep.equal([user1, user2, user3]);
    })
    
  it('should take in user data', function() {

    expect(user1.userData).to.deep.equal(
      {"id": 1,
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
      })
    })
    
  it('should supply user data when given id', function() {

    console.log(userRepository.data[1].userData.id)
    expect(userRepository.getData(userRepository.data[1].userData.id)).to.deep.equal(user2)
    
    })
    
  it('should give the average step goal of all users', function () {
  
    expect(userRepository.data.stepGoalAverage()).to.equal(6666)
  })
})

//test the data being passed in -> test this.data

//test the output of the get user data method, make sure the id argument works

//test the output of the average step goals -> make sure the math is solid