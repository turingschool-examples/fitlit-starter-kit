import { expect } from 'chai';
import HydrationRepository from '../src/Hydration';

describe('Hydration Repository', () => {
    it('should be a function', function () {
      expect(HydrationRepository).to.be.a('function');
    });

})