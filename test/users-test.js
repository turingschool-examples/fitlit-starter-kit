import { expect } from 'chai';
import { findUser } from '../src/users';

describe('User Repository', () => {
  it('should run tests', function () {
    expect(findUser).to.be.a('function');
  });
});