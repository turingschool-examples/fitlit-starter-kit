const chai = require('chai');
const expect = chai.expect;
const AcitivityRepository = require('../src/ActivityRepository');
const sampleActivity = require('./sampleActivity');
const User = require('../src/User');
const sampleDate = '2019/06/19'

describe('ActivityRepository', () => {
  it('should calculate the average number of stairs climbed for a specific day for all users', () => {
    const activeRepo = new AcitivityRepository(sampleActivity);
    expect(activeRepo.getAvgActivityStatsAllUsers(activeRepo.data, 'flightsOfStairs', sampleDate)).to.equal(20)
  })

it('should calculate the average number of steps take for a specific day for all users', () => {
  const activeRepo = new AcitivityRepository(sampleActivity);
  expect(activeRepo.getAvgActivityStatsAllUsers(activeRepo.data, 'numSteps', sampleDate)).to.equal(10725)
})
it('should calculate the average number of minutes active for a specific day for all users', () => {
  const activeRepo = new AcitivityRepository(sampleActivity);
  expect(activeRepo.getAvgActivityStatsAllUsers(activeRepo.data, 'minutesActive', sampleDate)).to.equal(233)
})

})