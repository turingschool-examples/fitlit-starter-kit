import { expect } from 'chai';
import { sampleHydration } from '../src/sample-data';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

    let hydration1;
    let hydration2;
    let hydration3;
    let hydration4;
    let hydration5;
    let hydration6;
    let hydration7;
    let hydration8;
    let hydration9;
    let hydrationArray

    beforeEach(() => {
        hydration1 = new Hydration({
            userID: 1,
            date: "2019/06/22",
            numOunces: 43
        });
        hydration2 = new Hydration({
            userID: 4,
            date: "2019/06/15",
            numOunces: 85
        });
        hydration3 = new Hydration({
            userID: 4,
            date: "2019/06/16",
            numOunces: 95
        });
        hydration4 = new Hydration({
            userID: 4,
            date: "2019/06/17",
            numOunces: 82
        });
        hydration5 = new Hydration({
            userID: 4,
            date: "2019/06/18",
            numOunces: 93
        });
        hydration6 = new Hydration({
            userID: 4,
            date: "2019/06/19",
            numOunces: 21
        });
        hydration7 = new Hydration({
            userID: 4,
            date: "2019/06/20",
            numOunces: 95
        });
        hydration8 = new Hydration({
            userID: 4,
            date: "2019/06/21",
            numOunces: 91
        });
        hydration9 = new Hydration({
            userID: 4,
            date: "2019/06/22",
            numOunces: 34
        });
        hydrationArray = [hydration1, hydration2, hydration3, hydration4, hydration5, hydration6, hydration7, hydration8, hydration9]
    })

    it('should be an instance of Hydration', () => {
        expect(hydration1).to.be.an.instanceOf(Hydration);
        expect(hydration7).to.be.an.instanceOf(Hydration);
    })

    it('Should return a user by ID', () => {
        expect(hydration1.getUserHydration(hydrationArray, 1
        )).to.deep.equal([{
            userID: 1,
            date: '2019/06/22',
            numOunces: 43
        }])
    })


    it('Should return an error if no data available', () => {

        expect(hydration1.getUserHydration(hydrationArray, 55)).to.equal("Invalid user ID. Please verify user ID and try again.")
    })

    it('Should return a user\'s total average ounces', () => {
        expect(hydration1.userAverageOunces(hydrationArray, 1)).to.equal(43);
        expect(hydration4.userAverageOunces(hydrationArray, 4)).to.equal(75);
    });

    it('Should return the total number of ounces a user consumed on a specific date', () => {
        expect(hydration1.findOuncesByDate(hydrationArray, 4, '2019/06/18')).to.equal(93);
    });
    
    it('Should return a week\'s data for a user', () => {
        expect(hydration1.userOuncesPerWeek(hydrationArray, 4)).to.deep.equal([
        "85oz (2019/06/15) \n",
        "95oz (2019/06/16) \n",
        "82oz (2019/06/17) \n",
        "93oz (2019/06/18) \n",
        "21oz (2019/06/19) \n",
        "95oz (2019/06/20) \n",
        "91oz (2019/06/21) \n"])
    });
})