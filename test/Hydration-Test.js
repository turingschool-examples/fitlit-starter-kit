import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from 'src/data/hydration.js'

describe('Hydration', () => {
    let hydration;

    beforeEach(() => {
        hydration = new Hydration(hydrationData[0])
    });

    it('Should be a function', () => {
        expect(Hydration).to.be.a('function');
    });

    it('Should be able to take in data', () => {
        expect(hydration.userID).to.equal(1);
    });

})