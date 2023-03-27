import { expect } from 'chai';
import User from '../src/User';
import userTestData from '../src/data/user-test-data.js';
import activityData from '..'

describe('User Repository', () => {
  beforeEach(() =>{
    // console.log(userTestData)
    let testUser = new User({
      "id": 1,
      "name": "Trystan Gorczany",
      "address": "9484 Lucas Flat, West Kittymouth WA 67504",
      "email": "Taurean_Pollich31@gmail.com",
      "strideLength": 4,
      "dailyStepGoal": 7000,
      "friends": [
        5,
        43,
        46,
        11
      ]
    })

    // get the data
    // then the filter then we set to a class
    // currentUser.hydrationData = new Hydration ([{info goes here}])
    // testUser.setData()
  })
  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should set all the properties using setData()', () => {
    expect(testUser.id).to.equal(1)
    expect(testUser.name).to.equal("Trystan Gorczany")
    expect(testUser.address).to.equal("9484 Lucas Flat, West Kittymouth WA 67504")
    expect(testUser.email).to.equal("Taurean_Pollich31@gmail.com")
    expect(testUser.strideLength).to.equal(4)
    expect(testUser.dailyStepGoal).to.equal(7000)
    expect(testUser.friends).to.deep.equal([ 5, 43, 46, 11 ])
  })

  expect(testUser.hydrationData).to.be.an.instanceOf(Hydration)
  expect(testUser.hydrationData.data).to.be.an.instanceOf()


});