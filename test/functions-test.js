import { expect } from 'chai';

import {
    generateRandomUser, 
    getAverageStepGoal
} from '..src/functions'

describe('scripts', () => {

    
    beforeEach(function() {

    });

    it('should should not return -1', function () {
        expect(generateRandomUser()).to.not.equal(-1);
    });
});
