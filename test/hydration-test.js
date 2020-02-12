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
    hydration = new Hydration(usersRepository, hydrationData);

  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return the average fluid ounces intake for a user for all time',
    function() {
      expect(hydration.calculateAverageFluidIntakeForUser(hydrationData)).to
        .equal(53);
    })

  it('should return fluid intake for a selected date', function() {
    expect(hydration.calculateFluidIntakeForDay('2019/06/16')).to.equal(69);
  })

  it('should return daily ounce intake for a week', function() {
    const hydrationData1 = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 91
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 71
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 43
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 58
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 39
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numOunces": 44
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 61
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "numOunces": 33
      }
    ]

    const userDateRange = ["2019/06/16", "2019/06/17", "2019/06/18",
      "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/22"];

    hydration = new Hydration(usersRepository, hydrationData1);

    expect(hydration.calculateDailyIntakeForWeek(userDateRange)).to.deep.equal(
      [{date: "2019/06/16", intake: 69},
        {date: "2019/06/17", intake: 96},
        {date: "2019/06/18", intake: 61},
        {date: "2019/06/19", intake: 91},
        {date: "2019/06/20", intake: 50},
        {date: "2019/06/21", intake: 50},
        {date: "2019/06/22", intake: 43}]);
  });

});
