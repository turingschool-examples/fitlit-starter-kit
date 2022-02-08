import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import userData from '../src/data/users';

describe('User Repository', () => {

  let data1, data2;

    beforeEach(() => {
      data1 = new User(userData[0]);
      data2 = new User(userData[1]);
    });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should hold all of the user objects', () => {
    const repository = new UserRepository(data1);
    expect(repository.allData[0]).to.equal(data1);
    repository.addData(data2);
    expect(repository.allData[1]).to.equal(data2);
  })

});
