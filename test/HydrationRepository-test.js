import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import  hydrationData  from '../src/data/sampleData-hydration';

describe('Hydration Repository', () => {
    it('should be a function', function () {
      expect(HydrationRepository).to.be.a('function');
    });
})
