import { expect } from 'chai';
import userData from '../src/data/users';
import User from '../src/User'

describe('User', function () {
  let user
  let user2

  beforeEach(() => {
    user = new User(userData[0])
  })

  it("Should be a function", function() {
    expect(user).to.be.a('function')
  })
})