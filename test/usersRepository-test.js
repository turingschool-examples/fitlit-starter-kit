const chai = require('chai');
const expect = chai.expect;

const UsersRepository = require('../src/UsersRepository');

describe('UsersRepository', function() {

  it('should be a function', function() {
    const usersRepository = new UsersRepository();

    expect(UsersRepository).to.be.a('function');
  });

  it('should be an instance of UsersRepository', function() {
    const usersRepository = new UsersRepository();

    expect(usersRepository).to.be.an.instanceof(UsersRepository);
  });

});
