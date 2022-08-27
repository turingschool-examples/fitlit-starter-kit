import { expect } from 'chai';
import { sampleUsers } from '../src/sample-data';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let allSampleData
  let sampleIndividual
  beforeEach(() => {
    allSampleData = new UserRepository(sampleUsers)
    sampleIndividual = new User(allSampleData.userData[0])
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user repository', () => {
    expect(allSampleData).to.be.an.instanceOf(UserRepository)
  })

  it('should hold all user data', () => {
    expect(allSampleData.userData).to.equal(sampleUsers)
  })

  it('should get users data by ID', () => {
    expect(allSampleData.getUserById(1)).to.deep.equal(sampleIndividual)
  })
});