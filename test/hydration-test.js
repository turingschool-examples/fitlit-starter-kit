const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UsersRepository = require('../src/UsersRepository');

describe('Hydration', function() {
  let hydrationData;
  let usersRepository;
  let hydration;

  beforeEach(function() {
    hydrationData = [{
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {"userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      }
    ]

    usersRepository = new UsersRepository(1);
    hydration = new Hydration(usersRepository);

  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return the average fluid ounces intake for a user for all time', function() {
    expect(hydration.calculateAverageFluidIntakeForUser(hydrationData)).to.equal(53);
  })

  it('should return fluid intake for a selected date', function() {
    expect(hydration.calculateFluidIntakeForDay(hydrationData, '2019/06/16')).to.equal(69);
  })

});
