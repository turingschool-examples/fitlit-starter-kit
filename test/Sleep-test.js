import { expect } from 'chai';
import userData from '../src/data/users'
import User from '../src/User'
import Sleep from '../src/Sleep'
// import {getAPIData} from './apiCalls'

describe('User', () => {
    let user1, user2, user3
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
            ]
        })
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
            ]
        })
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
            ]
        })
    })
    
    it('should be a function', function () {

      expect(Sleep).to.be.a('function');
  });

  it('should instantiate a new User', function () {

      expect(Sleep).to.be.a('function');
  })
  
  })