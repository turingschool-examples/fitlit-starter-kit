
import { expect } from 'chai';
import { getUserInfo, getRandomUser, calculateAverageSteps } from '../test/userInfo';
import userData from './usersSampleData';

describe('find user info', () => {
    let userInfo;
    let trystanId;

  beforeEach(() => {
      userInfo = userData
      trystanId = 1
  })

  it('should return user info based on ID', function () {
      let userID = trystanId

      expect(userInfo.users[0].id === userID).to.equal(true)
      expect(userInfo.users[1].id === userID).to.equal(false)
    
      expect(getUserInfo(userID)).to.deep.equal({
        "id": 1,
        "name": "Trystan Gorczany",
        "address": "9484 Lucas Flat, West Kittymouth WA 67504",
        "email": "Taurean_Pollich31@gmail.com",
        "strideLength": 4,
        "dailyStepGoal": 7000,
        "friends": [ 5, 43, 46, 11 ]
    })
  }) 

  it('should randomly generate a userID', function () {
      const randomUser1 = getRandomUser(userInfo.users)
      const randomUser2 = getRandomUser(userInfo.users)

      expect(randomUser1).to.be.a('number')
      expect(randomUser2).to.be.a('number')
      expect(randomUser1).to.not.equal(randomUser2) 
  })
  
  it('should calculate average steps among all users', function () {

      expect(calculateAverageSteps(userInfo)).to.be.a('number')
      expect(calculateAverageSteps(userInfo)).to.deep.equal(6600)
  })
});
