import { expect } from 'chai';

const { createCalendar } = require('../src/data/calendar')

describe('calendar creation', () => {
    it('should be a function', function () {
      expect(createCalendar).to.be.a('function');
    });

    it('should create a calendar object', function () {
      const day1 = createCalendar(3, 24, 2023)

      expect(day1).to.deep.equal({month: 3, day: 24, year: 2023})
    })
  });

  it.skip('should display user data for a given day', function () {

  })


//should initialize a calendar object

//should automatically select the correct day

//should log sleep from previous day

//should log activity goal
//should display average activity for comparison

//should log hydration goal
//should display average hydration for comparison
