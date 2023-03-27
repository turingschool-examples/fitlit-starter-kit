import { expect } from 'chai';
import User from '../src/User';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });
});