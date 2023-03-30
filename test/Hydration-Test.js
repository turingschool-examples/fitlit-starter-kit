import { expect } from 'chai';
import Hydration from '../src/Hydration';
import mock from '../src/data/mock';


describe('Hydration', () => {
    let hydration1;

    beforeEach(() => {
        hydration1 = new Hydration(mock.hydrationData)
    });


    it('Should be a function', () => {
        expect(Hydration).to.be.a('function');
    });

    it('Should be an instance of Hydration', () => {
        expect(hydration1).to.be.an.instanceOf(Hydration)
    })

    it('Should be able to store data', () => {
        expect(hydration1.hydration).to.equal(mock.hydrationData)
    })

    it('Should be able to find hydration data of each user, filtered by date', () => {
        expect(hydration1.findUserData(2)).to.deep.equal([{
            "userID": 2,
            "date": "2023/03/25",
            "numOunces": 92
        },
        {
            "userID": 2,
            "date": "2023/03/24",
            "numOunces": 35
        }])
    })



    it('Should be able to calculate the daily fluid intake of a user, based on a specific date', () => {
        expect(hydration1.findDailyFluidIntake(1, '2023/03/24')).to.equal(28)
    })

    it('Should be able to return the amount of water consumed per day for the last week', () => {
        expect(hydration1.calculateFluidWeekly(1)).to.deep.equal([28, 50])
    })

    it('Should have a method to calculate all time daily average of water consumption', () => {
        expect(hydration1.calculateAllTimeAverage(1)).to.equal(39)

    })



})
