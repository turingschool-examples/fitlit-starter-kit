import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
});