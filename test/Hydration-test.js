const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const mockHydrationData = require('../mock-data/mock-hydration');

let hydration;

describe('Hydration', () => {

  beforeEach( () => {
    hydration = new Hydration(mockHydrationData[1]); 
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

});

    
