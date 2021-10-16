import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';


describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should store user data',function () {
    const user = new User(data)
    const userRepository = new UserRepository(user)
    expect(userRepository.user[0]).to.be.an.instanceof(User);
  });


});
