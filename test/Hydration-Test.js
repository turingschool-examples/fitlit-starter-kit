import { expect } from 'chai';
import Hydration from '../src/Hydration';
import mock from '../src/data/mock';


describe('Hydration', () => {
    let hydration1;

    beforeEach(() => {
        hydration1 = new Hydration(mock.hydrationData)
        //currentUser = hydration.findUserID(1)
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

    it('Should be able to find hydration data of each user', () => {
        expect(hydration1.findUserID(2)).to.deep.equal([{
            "userID": 2,
            "date": "2023/03/24",
            "numOunces": 35
        },
        {
            "userID": 2,
            "date": "2023/03/25",
            "numOunces": 92
        }])
    })

    it('Should be able to calculate the daily fluid intake of a user, based on a specific date', () => {
        expect(hydration1.findDailyFluidIntake(1, '2023/03/24')).to.equal(28)
    })



})
