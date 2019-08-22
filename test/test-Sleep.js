const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const sampleHydration = require('./sampleHydratation');
const User = require('../src/User');

const SleepRepository = require('../src/SleepRepository');
const sampleSleep = require('./sampleSleep');

describe('Sleep', () => {

  it('should be an instance of class Sleep', () => {
    const sleepyPerson = new SleepRepository(sampleSleep);
    expect(sleepyPerson).to.be.an.instanceOf(SleepRepository)
  })

  
})