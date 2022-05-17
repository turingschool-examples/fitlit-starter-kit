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
        expect(user.name).to.deeply.equal("Luisa Hane")
    });
})