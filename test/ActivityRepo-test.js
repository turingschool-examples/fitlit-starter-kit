import { expect } from 'chai'
import ActivityRepo from '../src/ActivityRepo';

describe('Activity Repository', () => {
  
  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function')
  })
})