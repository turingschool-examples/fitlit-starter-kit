import { expect } from 'chai';
import User from '../src/User';
import  userData  from '../src/data/sampleData';

describe('User', () => {
    it('should be a function', function () {
      expect(User).to.be.a('function');
    });
    it('should instanciate a new user', function(){
        const newUser = new User(userData);
        expect(newUser).to.instanceOf(User);
    });
    it('should be able to return user\'s first name', function(){
        const newUser = new User(userData[0]);
        expect(newUser.returnFirstName()).to.equal('Luisa');
    })
});