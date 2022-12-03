import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';



describe('User', () => {
    it('should be a function', function () { 
        expect(User).to.be.a('function');
    });

    it('should instantiate a new User', function () {
    let user = new User() 

    expect(User).to.be.a('function');
    })

    it('should have a Userdata parameter', function () {
    let user = new User(userData);

    expect(userData).to.equal({});
    })

    it('should have an id', function () {
    let user = new User(userData);

    expect(user.id).to.equal(userData[id]);
    })
    
    it('should have an name', function () {
    let user = new User(userData);

    expect(user.name).to.equal(userData[name]);
    })
        
    it('should have an address', function () {
    let user = new User(userData);

    expect(user.address).to.equal(userData[address]);
    })
    
    it('should have an email', function () {
    let user = new User(userData);

    expect(user.email).to.equal(userData[email]);
    })

    it('should have a strideLength', function () {
    let user = new User(userData);

    expect(user.strideLength).to.equal(userData[strideLength]);
    })
    
  });


// Should be a function 
// Should represent a single player
// Should have a parameter to take in a userData object
//Each user should have id, name, address, email, stride length, daily step goal, friends   hydration/sleep?
// Should have method to return users first name