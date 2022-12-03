import { expect } from 'chai';
import User from '../src/User';
// import UserRepository from '../src/UserRepository';
import users from '../src/data/users';



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

    expect(user.id).to.equal(user.id);
    })
    
    it('should have an name', function () {
    let user = new User(userData);

    expect(user.name).to.equal(user.name);
    })
        
    it('should have an address', function () {
    let user = new User(userData);

    expect(user.address).to.equal(user.address);
    })
    
    it('should have an email', function () {
    let user = new User(userData);

    expect(user.email).to.equal(user.email);
    })

    it('should have a strideLength', function () {
    let user = new User(userData);

    expect(user.strideLength).to.equal(user.strideLength);
    })
    
    it('should have a step goal', function () {
    let user = new User(userData);

    expect(user.dailyStepGoal).to.equal(user.dailyStepGoal);
    })

    it('should have friends', function () {
    let user = new User(userData);

    expect(user.friends).to.equal(user.friends);
    })

  });


// Should be a function 
// Should represent a single player
// Should have a parameter to take in a userData object
//Each user should have id, name, address, email, stride length, daily step goal, friends   hydration/sleep?
// Should have method to return users first name


// Let user1 = new User({"id": 1,
//     "name": "Luisa Hane",
//     "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//     "email": "Diana.Hayes1@hotmail.com",
//     "strideLength": 4.3,
//     "dailyStepGoal": 10000,
//     "friends": [
//       16,
//       4,
//       8
//     ]})