const chai = require("chai");
const expect = chai.expect;

const User = require('../src/User');
const userData = require('../data/user-test-data');

let user;


describe('User', () => {

  beforeEach(() => {
    user = new User(userData[0]);
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of the user user', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should have a unique id', () => {
    expect(user.id).to.equal(userData[0].id);
  })

  it('should have a unique name', () => {
    expect(user.name).to.equal(userData[0].name);
  })

  it('should have a unique address', () => {
    expect(user.address).to.equal(userData[0].address);
  })

  it('should have a unique email', () => {
    expect(user.email).to.equal(userData[0].email);
  })

  it('should have a strideLength', () => {
    expect(user.strideLength).to.equal(userData[0].strideLength);
  })

  it('should have a dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(userData[0].dailyStepGoal);
  })

  it('should have a list of friends', () => {
    expect(user.friends).to.equal(userData[0].friends);
  })
  it('should return the first name', () => {
    expect(user.returnUserName()).to.deep.equal('Luisa');
  })

  it('should return list of friends', () => {
    expect(user.findFriendsNames(userData)).to.deep.equal([
  { name: 'Mae Connelly', stepGoal: 4000 },
  { name: 'Laney Abshire', stepGoal: 2000 }
]);
  })
})
