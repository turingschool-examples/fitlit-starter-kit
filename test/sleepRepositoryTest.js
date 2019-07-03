const chai = require('chai')
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../fakeData/fakeSleep');
const Sleep = require('../src/sleep');
const User = require('../src/user');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');