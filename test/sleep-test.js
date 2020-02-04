const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', function() {

  it('should be a function', function() {
    const sleep = new Sleep();

    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    const sleep = new Sleep();

    expect(sleep).to.be.an.instanceof(Sleep);
  });

});
