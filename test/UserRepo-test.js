import { expect } from 'chai'
import UsersRepo from '../src/UsersRepo';

describe('User Repository', () => {

  it('should be a function', () => {
    expect(UsersRepo).to.be.a('function')
  })
})