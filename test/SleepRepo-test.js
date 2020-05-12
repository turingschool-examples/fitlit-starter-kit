import { expect } from 'chai'
import SleepRepo from '../src/SleepRepo';

describe('Sleep Repository', () => {

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function')
  })
})