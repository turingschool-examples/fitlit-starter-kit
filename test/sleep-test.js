import {
  expect
} from 'chai';
import Sleep from '../src/classes/Sleep.js';
import sleepTestData from "./sleep-test-data";

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(sleepTestData);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a('function');
  });

  it("should be an instance of Sleep", () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it("should have a property that holds the sleep data object", () => {
    sleep = new Sleep(sleepTestData[0]);
    expect(sleep.data).to.deep.equal({
      "userID": 1,
      "date": "2023/06/28",
      "hoursSlept": 8.4,
      "sleepQuality": 1.8,
    }, );
  });

  it('should be able to calculate average sleep hours', () => {
    expect(sleep.calculateAverageSleepHours(1)).to.be.equal(8.48);
  });

  it('should be able to calculate average sleep quality', () => {
    expect(sleep.calculateAverageSleepQuality(1)).to.be.equal(2.52);
  });

  it('should be able to find sleep hours on a specific date', () => {
    expect(sleep.findSleepHoursOnDate(1, "2023/06/28")).to.be.equal(8.4);
  });

  it("should be able to find a user's sleep quality on a specified date", () => {
    expect(sleep.findSleepQualityOnDate(1, "2023/06/28")).to.equal(1.8);
    expect(sleep.findSleepQualityOnDate(3, "2023/06/28")).to.equal(4.6);
    expect(sleep.findSleepQualityOnDate(4, "2023/06/30")).to.equal(3.4);
  });

  it("should return an object storing all the sleep data given a specified date", () => {
    expect(sleep.calculateWeeklySleepObject(3, "2023/03/23")).to.deep.equal([{
        userID: 3,
        date: "2023/03/29",
        hoursSlept: 5.6,
        sleepQuality: 1.4
      },
      {
        userID: 3,
        date: "2023/03/28",
        hoursSlept: 5.2,
        sleepQuality: 4.6
      },
      {
        userID: 3,
        date: "2023/03/27",
        hoursSlept: 8.5,
        sleepQuality: 2.9
      },
      {
        userID: 3,
        date: "2023/03/26",
        hoursSlept: 4.1,
        sleepQuality: 2
      },
      {
        userID: 3,
        date: "2023/03/25",
        hoursSlept: 9.5,
        sleepQuality: 1.8
      },
      {
        userID: 3,
        date: "2023/03/24",
        hoursSlept: 9.7,
        sleepQuality: 4.7
      },
    ]);
  });
  it("should return the hours slept over a week given a specified date", () => {
    expect(sleep.calculateWeeklyHoursSlept(3, "2023/03/23")).to.deep.equal([{
        date: "2023/03/29",
        hoursSlept: 5.6
      },
      {
        date: "2023/03/28",
        hoursSlept: 5.2
      },
      {
        date: "2023/03/27",
        hoursSlept: 8.5
      },
      {
        date: "2023/03/26",
        hoursSlept: 4.1
      },
      {
        date: "2023/03/25",
        hoursSlept: 9.5
      },
      {
        date: "2023/03/24",
        hoursSlept: 9.7
      },
    ]);
  });
  it("should return the sleep quality over a week given a specified date", () => {
    expect(sleep.calculateWeeklySleepQuality(3, "2023/03/23")).to.deep.equal(
      [{
          date: "2023/03/29",
          sleepQuality: 1.4
        },
        {
          date: "2023/03/28",
          sleepQuality: 4.6
        },
        {
          date: "2023/03/27",
          sleepQuality: 2.9
        },
        {
          date: "2023/03/26",
          sleepQuality: 2
        },
        {
          date: "2023/03/25",
          sleepQuality: 1.8
        },
        {
          date: "2023/03/24",
          sleepQuality: 4.7
        },
      ]
    );
  });

});