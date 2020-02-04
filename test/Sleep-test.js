const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  let sleep;

  beforeEach(function() {
    sleep = new Sleep(1, '2019/06/15', 6.1, 2.2);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });
});
