import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration'


describe('Hydration', () => {
    let hydration, currentUser;

    beforeEach(() => {
        hydration = new Hydration(hydrationData[0])
        currentUser = hydration.findUserID(1)
    });

    console.log(currentUser)
    it('Should be a function', () => {
        expect(Hydration).to.be.a('function');
    });

    // it('Should be able to take in data', () => {
    //     expect(hydration.userID).to.equal(1);
    //     expect(hydration.date).to.equal("2023/03/24");
    //     expect(hydration.numOunces).to.equal(28)
    // });

})

