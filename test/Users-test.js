const expect = require('chai').expect;
const Users = require('../src/Users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
  });
  it('should be a function', () => {
    expect(Users).to.be.a('function');
  });
})