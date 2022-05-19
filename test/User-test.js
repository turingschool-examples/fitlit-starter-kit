import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

    let eachUser;  
    
    beforeEach(() => {
        let user = {
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
          };
        eachUser = new User(user);
    })

    it('should be a function', function () {
        expect(User).to.be.a('function');
    });
    
    it('should be an instance of User Repository', () => {
        expect(eachUser).to.be.an.instanceOf(User);
    });

    it('should create an object', () => {
        expect(eachUser).to.be.a('object')
    });

    it('should return first name', () => {
        expect(eachUser.getUserFirstName()).to.equal('Luisa Hane')
    });
    
    it('should check id', () => {
       expect(eachUser.id).to.equal(1)
    });

    it('should check name', () => {
      expect(eachUser.name).to.equal('Luisa Hane')
    });

    it('should check email', () => {
      expect(eachUser.email).to.equal('Diana.Hayes1@hotmail.com')
    });

    it('should check stridelength', () => {
      expect(eachUser.strideLength).to.equal(4.3)
    });

    it('should check dailystepgoal', () => {
      expect(eachUser.dailyStepGoal).to.equal(10000)
    });

    it('should check friends', () => {
      expect(eachUser.friends).to.deep.equal([16,4,8])
    });
})