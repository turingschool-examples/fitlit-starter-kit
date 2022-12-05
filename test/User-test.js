import { expect } from 'chai';
import userData from '../src/data/users';

describe('User', function () {
  let user
  let user2

  beforeEach(() => {
    user = new User(userData[0])
  })
})