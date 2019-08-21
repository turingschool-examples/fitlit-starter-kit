const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const mockSleep = require('../mock-data/mock-sleep');

let sleep;

describe('Sleep', () => {

    beforeEach( () => {
        sleep = new Sleep(mockSleep[1]);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    });

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceof(Sleep);
    });

    it('should have a parameter to take in sleep data', () => {
        expect(sleep.sleepData).to.eql(mockSleep);
    });
})
