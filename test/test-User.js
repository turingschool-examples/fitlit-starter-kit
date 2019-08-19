const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const sampleData = require('../test/sampleData');
const sampleUser = sampleData[3];

describe('User', () => {
  it('should be a instance of the class User', () => {
    const user = new User(sampleUser);
    expect(user).to.be.an.instanceOf(User); 
  });

  it('should hold onto the user properties from the data file', () => {
    const user = new User(sampleUser);
    expect(user.name).to.equal('Mae Connelly')
    expect(user.strideLength).to.equal(3.1)
  });

  it('should be able to return user\'s first name', () => {
    const user = new User(sampleUser);
    expect(user.getUserFirstName()).to.equal('Mae');  
  });
})

