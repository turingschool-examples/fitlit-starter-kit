import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import  userData  from '../src/data/sampleData';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('should be able to get user data by id', function(){
    const user1 = new UserRepository(userData)
    expect(user1.getUser(2)).to.deep.equal({
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
    });
  });
  it('should be able to return average step goal for all users', function(){
    const user = new UserRepository(userData)
    expect(user.averageStepGoal(userData)).to.equal(6667)
  })
});
