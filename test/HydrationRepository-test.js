const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const Hydration = require('../src/Hydration.js');



describe('HydrationRepository', function() {

  let hydrationDataSample;
  beforeEach(function() {
    hydrationDataSample =   
    
    {
      "userID": 1,
      "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 64
      },
      {
        "date": "07/05/2019",
        "numOunces": 80
      },
      {
        "date": "08/05/2019",
        "numOunces": 39
      },
      {
        "date": "09/05/2019",
        "numOunces": 40
      },
      {
        "date": "10/05/2019",
        "numOunces": 65
      },
      {
        "date": "11/05/2019",
        "numOunces": 84
      },
      {
        "date": "12/05/2019",
        "numOunces": 33
      },
      {
        "date": "13/05/2019",
        "numOunces": 60
      },
      {
        "date": "14/05/2019",
        "numOunces": 30
      },
      {
        "date": "15/05/2019",
        "numOunces": 59
      },
      {
        "date": "16/05/2019",
        "numOunces": 86
      },
      {
        "date": "17/05/2019",
        "numOunces": 73
      },
      {
        "date": "18/05/2019",
        "numOunces": 40
      },
      {
        "date": "19/05/2019",
        "numOunces": 77
      },
      {
        "date": "20/05/2019",
        "numOunces": 97
      },
      {
        "date": "21/05/2019",
        "numOunces": 76
      }
    ]
  }});

  it('should be an instance of HydrationRepository', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository);
  });
  it('should be able to take in a dataFilepath as a parameter', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    expect(hydrationRepository.dataFilepath).to.equal('../data/sample-Hydration-data')
  });

  it('should retrieve user data from id', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    expect(hydrationRepository.getHydrationDataFromId(1)).to.eql(hydrationDataSample)    
  });

  it('should instantiate Hydration', function() {
    const hydrationRepository = new HydrationRepository(hydrationDataSample);
    const hydration = new Hydration(hydrationDataSample.userID, hydrationDataSample);

    hydrationRepository.instantiateHydration()

    expect(hydration).to.be.an.instanceOf(Hydration)
  });
  
});