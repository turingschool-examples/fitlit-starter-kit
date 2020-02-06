const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UsersRepository = require('../src/UsersRepository');

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration();

    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration();

    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return the average fluid ounces intake for a user for all time', function() {
    const hydrationData = [{
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

    const usersRepository = new UsersRepository(1);
    const hydration = new Hydration(usersRepository.id);

    expect(hydration.calculateAverageFluidIntakeForUser(hydrationData)).to.equal(53);
  })

});
