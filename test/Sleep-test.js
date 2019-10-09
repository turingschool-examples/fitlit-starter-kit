const expect = require('chai').expect;
const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep();
  });
  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });
})