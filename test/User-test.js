import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'
import User from '../src/User.js'
describe('User',() => {
    let user;
    beforeEach( () => {
     user = new User(userData[0]);
      });
    it('should be a function', () =>{
        expect(User).to.be.a('function');
    });
    it('should hold a users name', () =>{
        expect(user.name).to.equal("Luisa Hane")
    });
    it('should hold a users id', () =>{
        expect(user.id).to.equal(1);
    });
    it('should hold a users address', () =>{
        expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    });
    it('should hold a users email address', () =>{
        expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
    });
    it('should hold a users stride length', () =>{
        expect(user.strideLength).to.equal(4.3);
    });
    it('should hold a users daily step goal', () =>{
        expect(user.dailyStepGoal).to.equal(10000);
    });
})