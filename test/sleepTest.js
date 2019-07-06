const chai = require('chai')
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../fakeData/fakeSleep');
const Sleep = require('../src/sleep');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');

describe('Sleep', function () {

  it('should be a function', function () {

    expect(Sleep).to.be.a('function')
  })
})