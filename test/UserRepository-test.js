const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  let users, userRepo, hydrationData, sleepData, activityData;

  beforeEach(() => {
    users = [ {"id": 1, "name": "Luisa Hane", "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697", "email": "Diana.Hayes1@hotmail.com", "strideLength": 4.3, "dailyStepGoal": 10000, "numOunces": 96, "friends": [16, 4, 8] },
              {"id": 2, "name": "Jarvis Considine", "address": "30086 Kathryn Port, Ciceroland NE 07273", "email": "Dimitri.Bechtelar11@gmail.com", "strideLength": 4.5, "dailyStepGoal": 5000, "friends": [9, 18, 24, 19] },
              {"id": 3, "name": "Herminia Witting", "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660", "email": "Elwin.Tromp@yahoo.com", "strideLength": 4.4, "dailyStepGoal": 5000, "friends": [19, 11, 42, 33] } ];
    userRepo = new UserRepository();
    hydrationData = [ {"userID": 1, "date": "2019/06/15", "numOunces": 37}, {"userID": 2, "date": "2019/06/15", "numOunces": 75}, {"userID": 3, "date": "2019/06/15", "numOunces": 47} ];
    sleepData = [ {"userID": 1, "date": "2019/06/15", "hoursSlept": 6.1, "sleepQuality": 2.2 }, {"userID": 2, "date": "2019/06/15", "hoursSlept": 7, "sleepQuality": 4.7 }, {"userID": 3, "date": "2019/06/15", "hoursSlept": 10.8, "sleepQuality": 4.7} ];
    activityData = [ {"userID": 1, "date": "2019/06/15", "numSteps": 3577, "minutesActive": 140, "flightsOfStairs": 1}, {"userID": 2, "date": "2019/06/15", "numSteps": 4294, "minutesActive": 138, "flightsOfStairs": 10}, {"userID": 3, "date": "2019/06/15", "numSteps": 7402, "minutesActive": 116, "flightsOfStairs": 33} ];
  });

  it("should be a function", function() {
    expect(UserRepository).to.be.a('function');
  });
  
  it("should be an instance of User", function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it("should store a userData array", function() {
    expect(userRepo.userData).to.deep.equal([]);
  });

  it("should be able to store a User object", function() {
    userRepo.populateUserData(users);

    expect(userRepo.userData[0]).to.deep.equal({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', stride: 4.3, dailyStepGoal: 10000, friends: [ 16, 4, 8 ]});
  });

  it("should be able to retrieve a User object", function() {
    userRepo.populateUserData(users);

    expect(userRepo.retrieveUserData(1)).to.deep.equal({ id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', stride: 4.3, dailyStepGoal: 10000, friends: [ 16, 4, 8 ] });
  });

  it("should store a hydrationData array", function() {
    expect(userRepo.hydrationData).to.deep.equal([]);
  });

  it("should be able to store a HydrationEntry instance", function() {
    userRepo.populateHydrationData(hydrationData);

    expect(userRepo.hydrationData[0]).to.deep.equal({ id: 1, date: '2019/06/15', numOz: 37 });
  });

  it("should store a sleepData array", function() {
    expect(userRepo.sleepData).to.deep.equal([]);
  });

  it("should be able to store a sleepEntry instance", function() {
    userRepo.populateSleepData(sleepData);
    
    expect(userRepo.sleepData[0]).to.deep.equal({ id: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 });
  });

  it("should store an activityData array", function() {
    expect(userRepo.activityData).to.deep.equal([]);
  });

  it("should be able to store an activityEntry instance", function() {
    userRepo.populateActivityData(activityData);

    expect(userRepo.activityData[0]).to.deep.equal({ id: 1, date: '2019/06/15', numSteps: 3577, minutesActive: 140, flightsOfStairs: 1 });
  });

  it("should have an average step goal property", function() {
    expect(userRepo.avgStepGoal).to.equal(null);
  });

  it("should calculate the average daily step goal for all users", function() {
    userRepo.populateUserData(users);
    const avgStepGoal = userRepo.retrieveAvgStepGoal();

    expect(avgStepGoal).to.equal(6667);
  });


});