const chai = require('chai');
const expect = chai.expect;

const UsersRepository = require('../src/UsersRepository');

describe('UsersRepository', function() {
  let userData;
  let usersRepository;

  beforeEach(function() {
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];

    usersRepository = new UsersRepository(1);

  });

  it('should be a function', function() {
    expect(UsersRepository).to.be.a('function');
  });

  it('should be an instance of UsersRepository', function() {
    expect(usersRepository).to.be.an.instanceof(UsersRepository);
  });

  it('should return user data by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData)).to.deep.equal({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    });
  });

  it('should return user\'s name by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).name).to
      .equal("Luisa Hane");
  });

  it('should return user\'s address by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).address).to
      .equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it('should return user\'s email by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).email).to
      .equal("Diana.Hayes1@hotmail.com");
  });

  it('should return user\'s stride length by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).strideLength).to
      .equal(4.3);
  });

  it('should return user\'s daily step goal by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).dailyStepGoal).to
      .equal(10000);
  });

  it('should return user\'s friends IDs by corresponding ID', function() {
    expect(usersRepository.getUserDataById(userData).friends).to.deep.equal([
      16,
      4,
      8
    ]);
  });

  it('should calculate average step goals of all users', function() {
    expect(usersRepository.calculateAverageStepGoal(userData)).to.equal(6666);
  });

});
