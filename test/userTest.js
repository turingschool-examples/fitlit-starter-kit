const chai = require('chai')
const expect = chai.expect;


const User = require('../src/user');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');

describe('User', function() {

  it('should be a function', function() {

    expect(User).to.be.a('function')
  });


  it('should find a users id', function() {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.id).to.equal(1)
    expect(user2.id).to.equal(25)
  });

  it('should find a users name', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.name).to.equal('Luisa Hane')
    expect(user2.name).to.equal('Isobel Schmeler')
  });

  it('should find a users address', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    expect(user2.address).to.equal('5592 Donnelly Trail, Scottieport SC 35511')
  });

  it('should find a users address', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user2.email).to.equal('Name79@yahoo.com')
  });

  it('should find a users address', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.strideLength).to.equal(4.3)
    expect(user2.strideLength).to.equal(3.3)
  });

  it('should find a users daily step goal', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.dailyStepGoal).to.equal(10000)
    expect(user2.dailyStepGoal).to.equal(4000)
  });

  it('should find out who the users buddies are', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    expect(user1.friends).to.deep.equal([16, 4, 8])
    expect(user2.friends).to.deep.equal([37, 31, 43])
  });

  it('should be able to return just the users first name', function () {
    let repo1 = new UserRepository(fakeUsers, 1)
    let repo2 = new UserRepository(fakeUsers, 25)
    let object1 = repo1.getUserData()
    let object2 = repo2.getUserData()
    let user1 = new User(object1)
    let user2 = new User(object2)

    var firstName1 = user1.getFirstName()
    var firstName2 = user2.getFirstName()

    expect(firstName1).to.equal('Luisa')
    expect(firstName2).to.equal('Isobel')
  });


})