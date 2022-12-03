import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';



describe('User', () => {
    it('should be a function', function () { 
        expect(User).to.be.a('function');
    });
    it('should instantiate a new User', function () {
    var user = new User() 

    expect(User).to.be.a('function');
    })
    
        
  });


// Should be a function 
// Should represent a single player
// Should have a parameter to take in a userData object
//Each user should have id, name, address, email, stride length, daily step goal, friends   hydration/sleep?
// Should have method to return users first name