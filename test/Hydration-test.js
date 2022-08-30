import { expect } from 'chai';
import { sampleHydration } from '../src/sample-data';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

    let hydrationArray;
    let hydration1;
    let hydration2;

    beforeEach(() => {
        hydrationArray = new Hydration(sampleHydration);
        hydration1 = hydrationArray.getUserHydration(1);
        hydration2 = hydrationArray.getUserHydration(4);
    })


    it('should be an instance of Hydration', () => {
        expect(hydrationArray).to.be.an.instanceOf(Hydration);
    })

    it('should be able to get user info by ID', () => {
        expect(hydration1).to.deep.equal(
            [{
                userID: 1,
                date: "2019/06/15",
                numOunces: 37
              },
              {
                userID: 1,
                date: "2019/06/16",
                numOunces: 69
              },
              {
                userID: 1,
                date: "2019/06/17",
                numOunces: 96
              },
              {
                userID: 1,
                date: "2019/06/18",
                numOunces: 61
              },
              {
                userID: 1,
                date: "2019/06/19",
                numOunces: 91
              },
              {
                userID: 1,
                date: "2019/06/20",
                numOunces: 50
              },
              {
                userID: 1,
                date: "2019/06/21",
                numOunces: 50
              },
              {
                userID: 1,
                date: "2019/06/22",
                numOunces: 43
              }]
        )
        expect(hydration2).to.deep.equal(
           [{
            userID: 4,
            date: "2019/06/15",
            numOunces: 85
          },
          {
            userID: 4,
            date: "2019/06/16",
            numOunces: 95
          },
          {
            userID: 4,
            date: "2019/06/17",
            numOunces: 82
          },
          {
            userID: 4,
            date: "2019/06/18",
            numOunces: 93
          },
          {
            userID: 4,
            date: "2019/06/19",
            numOunces: 21
          },
          {
            userID: 4,
            date: "2019/06/20",
            numOunces: 95
          },
          {
            userID: 4,
            date: "2019/06/21",
            numOunces: 91
          },
          {
            userID: 4,
            date: "2019/06/22",
            numOunces: 34
          }] 
        )
    })

    it('should be able to get a user\'s total average ounces', () => {
        expect(hydrationArray.userAverageOunces(hydration1)).to.equal(62);
        expect(hydrationArray.userAverageOunces(hydration2)).to.equal(75);
    })

    // it('should be able to find ounces for most recent date', () => {

    // })
    
})