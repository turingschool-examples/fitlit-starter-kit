import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'
import User from '../src/User.js'
describe('User',() => {
    let user;
    beforeEach( () => {
     user = new User(userData[0]);
      });
})