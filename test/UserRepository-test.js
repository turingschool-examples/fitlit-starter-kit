import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function () {

    expect(userRepository).to.be.a('function');
    })
    
  it('should take in user data', function() {

    expect(user.data).to.equal({})
    })
    
  it('should supply user data when given id', function() {
  
    userRepository.getData()
  
    expect(user.id).to.equal(user.userData)
    })
  
});


//test the data being passed in -> test this.data

//test the output of the get user data method, make sure the id argument works

//test the output of the average step goals -> make sure the math is solid