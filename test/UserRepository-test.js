import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
});


//test the data being passed in -> test this.data

//test the output of the get user data method, make sure the id argument works

//test the output of the average step goals -> make sure the math is solid