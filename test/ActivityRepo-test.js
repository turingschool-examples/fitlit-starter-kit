const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const activityRepoSampleData = require('../sample-data/activity-sample')

let activityRepo1, activityRepo2, activityRepo3, activityRepo4,
activityRepo5, activityRepo6, activityRepo7, activityRepo8,
activityRepo9, activityRepo10, activityRepo11, activityRepo12,
activityRepo13, activityRepo14, activityRepo15, activityRepo16, activityRepo17, activityRepo18, activityRepo19, activityRepo20, activityRepo21, activityRepo22, activityRepo23, activityRepo24, activityRepo25, activityRepo26, activityRepo27, activityRepo28, activityRepo29, activityRepo30, activityRepo31, activityRepo32, activityRepo33, activityRepo34, activityRepo35, activityRepo36, activityRepo37, activityRepo38, activityRepo39, activityRepo40;

let activityRepoData;
let activityRepo;

describe('Activity Repository', () => {
  beforeEach(() => {
    activityRepo1 = activityRepoSampleData[0];
    activityRepo2 = activityRepoSampleData[1];
    activityRepo3 = activityRepoSampleData[2];
    activityRepo4 = activityRepoSampleData[3];
    activityRepo5 = activityRepoSampleData[4];
    activityRepo6 = activityRepoSampleData[5];
    activityRepo7 = activityRepoSampleData[6];
    activityRepo8 = activityRepoSampleData[7];
    activityRepo9 = activityRepoSampleData[8];
    activityRepo10 = activityRepoSampleData[9];
    activityRepo11 = activityRepoSampleData[10]; 
    activityRepo12 = activityRepoSampleData[11];
    activityRepo13 = activityRepoSampleData[12]; 
    activityRepo14 = activityRepoSampleData[13]; 
    activityRepo15 = activityRepoSampleData[14]; 
    activityRepo16 = activityRepoSampleData[15]; 
    activityRepo17 = activityRepoSampleData[16]; 
    activityRepo18 = activityRepoSampleData[17]; 
    activityRepo19 = activityRepoSampleData[18]; 
    activityRepo20 = activityRepoSampleData[19]; 
    activityRepo21 = activityRepoSampleData[20]; 
    activityRepo22 = activityRepoSampleData[21]; 
    activityRepo23 = activityRepoSampleData[22]; 
    activityRepo24 = activityRepoSampleData[23]; 
    activityRepo25 = activityRepoSampleData[24]; 
    activityRepo26 = activityRepoSampleData[25]; 
    activityRepo27 = activityRepoSampleData[26]; 
    activityRepo28 = activityRepoSampleData[27]; 
    activityRepo29 = activityRepoSampleData[28]; 
    activityRepo30 = activityRepoSampleData[29]; 
    activityRepo31 = activityRepoSampleData[30]; 
    activityRepo32 = activityRepoSampleData[31]; 
    activityRepo33 = activityRepoSampleData[32];
    activityRepo34 = activityRepoSampleData[33];
    activityRepo35 = activityRepoSampleData[34];
    activityRepo36 = activityRepoSampleData[35]; 
    activityRepo37 = activityRepoSampleData[36]; 
    activityRepo38 = activityRepoSampleData[37]; 
    activityRepo39 = activityRepoSampleData[38]; 
    activityRepo40 = activityRepoSampleData[39];

    activityRepoData = [activityRepo1, activityRepo2, activityRepo3, activityRepo4, activityRepo5, activityRepo6, activityRepo7, activityRepo8, activityRepo9, activityRepo10, activityRepo11, activityRepo12, activityRepo13, activityRepo14, activityRepo15, activityRepo16, activityRepo17, activityRepo18, activityRepo19, activityRepo20, activityRepo21, activityRepo22, activityRepo23, activityRepo24, activityRepo25, activityRepo26, activityRepo27, activityRepo28, activityRepo29, activityRepo30, activityRepo31, activityRepo32, activityRepo33, activityRepo34, activityRepo35, activityRepo36, activityRepo37, activityRepo38, activityRepo39, activityRepo40,];

    activityRepo = new ActivityRepo(activityRepoData);
  })
  
  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function')
  })

  it('should return new instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceOf(ActivityRepo);
  })

  it('should return all user Activity Data', () => {
    expect(activityRepo.activityRepoData.length).to.equal(40);
  })

  it('should throw an error if no arguments is passed as an argument', () => {
    expect(() => { new Activity() }).to.throw(Error);
  })

  it('should return the average number of stairs climbed for all users on a specific date', () => {
    expect(activityRepo.calculateAvgStairs('2019/06/15')).to.equal(27);
  })

  it('should only take a date as an argument', () => {
    expect(activityRepo.calculateAvgStairs('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activityRepo.calculateAvgStairs('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return the average number of steps taken for all users on a specific date', () => {
    expect(activityRepo.calculateAvgSteps('2019/06/15')).to.equal(6530);
  })

  it('should only take a date as an argument', () => {
    expect(activityRepo.calculateAvgSteps('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activityRepo.calculateAvgSteps('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return the average number of minutes active for all users on a specific date', () => {
    expect(activityRepo.calculateAvgMinActive('2019/06/15')).to.equal(98);
  })

  it('should only take a date as an argument', () => {
    expect(activityRepo.calculateAvgMinActive('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activityRepo.calculateAvgMinActive('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return the user with the highest number of minutes active out of all users on a specific date', () => {
    expect(activityRepo.calculateMaxMinActive('2019/06/15')).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      }
    ]);
  })

  it('should return the users with the highest number of minutes active out of all users on a specific date if there are multiple', () => {
    expect(activityRepo.calculateMaxMinActive('2019/06/16')).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/16",
        "numSteps": 9256,
        "minutesActive": 204,
        "flightsOfStairs": 2
      }, {
        "userID": 3,
        "date": "2019/06/16",
        "numSteps": 12304,
        "minutesActive": 204,
        "flightsOfStairs": 8
      }, {
        "userID": 4,
        "date": "2019/06/16",
        "numSteps": 10689,
        "minutesActive": 204,
        "flightsOfStairs": 10
      }
    ]);
  })

  it('should only take a date as an argument', () => {
    expect(activityRepo.calculateMaxMinActive('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(activityRepo.calculateMaxMinActive('2019-06-15')).to.equal('You must pass a valid date');
  })

  it('should return a date', () => {
    expect(activityRepo.checkDate('2019/06/15')).to.equal('2019/06/15');
  })
})