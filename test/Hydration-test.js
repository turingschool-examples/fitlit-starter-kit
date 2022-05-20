import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/sampleData-hydration';

describe('Hydration', () => {
    it('should be a function', function () {
      expect(Hydration).to.be.a('function');
    });
    it('should be able to get water data by id', function(){
      const hydration1 = new Hydration(hydrationData[0]);
      expect(hydration1.id).to.be.a('number');
      expect(hydration1.id).to.equal(1);
    });
    it('should be able to get water data by date', function(){
      const hydration1 = new Hydration(hydrationData[0]);
      expect(hydration1.date).to.be.a('string');
      expect(hydration1.date).to.equal('2019/06/15');
    });
    it('should be able to get water data by ounces', function(){
      const hydration1 = new Hydration(hydrationData[0]);
      expect(hydration1.ounces).to.be.a('number');
      expect(hydration1.ounces).to.equal(37);
    });
})
