import { expect } from 'chai';
import Hydration from '../src/Hydration.js';
import hydrationData from './MockHydroData.js';
​
​
// "hydrationData": line 3 is a declaration
​
describe ("Hydration", function() {
    let hydration;
    let hydrationData;
    let id;
    let miniHydrationData = [{
        userID: 3,
        date: "2019/06/15",
        numOunces: 47
        },
        {
        userID: 3,
        date: "2019/06/16",
        numOunces: 99
        },
        {
        userID: 3,
        date: "2019/06/17",
        numOunces: 28
        },
        {
        userID: 3,
        date: "2019/06/18",
        numOunces: 40
        },    
        {
        userID: 3,
        date: "2019/06/19",
        numOunces: 85
        },    
        {
        userID: 3,
        date: "2019/06/20",
        numOunces: 51
        },  
        {
        userID: 3,
        date: "2019/06/21",
        numOunces: 41
        },
    ];
    beforeEach(function() {
        id = 3;
        hydration = new Hydration(3, miniHydrationData);
    });
//is it a function?
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });
//is it deep equal a Class instance?
    it('should instantiate our good friend Hydration', function() {
        expect(hydration.dataSet).to.deep.equal(hydrationData);
    });
//test property userID
    it('should have a userID', function() {
        expect(hydration.userID).to.equal(1);
    });
//test property date
    it('should have a date', function() {
        expect(hydration.date).to.equal("2019/06/15");
    });
//test property numOunces
    it('should have the number of fluid ounces of water consumed on a particular day', function() {
        expect(hydration.numOunces).to.equal(37);
    });
//test property dataSet
    it
//test property oneUserDataSet
    it
//-------methods------------
//method0
    it('should have a method to create a hydration data set for a particular user', function() {
​
    })
//method1
    it('should have a method to return the average fluid ounces consumed per day by a user for all time', function() {
        expect(returnAverageOuncesConsumed()).to.equal(66)
​
        //happy and sad paths in these methods?
    });
//method2
    it('should have a method to return the ounces water consumed for a particular date passed as an argument', function() {
​
    })
//method3
    it('should have a method to return the user hydration for the most recent 7 days', function() {
​
    })
});
//revisit: are there different possible outcomes to test for based on different arguments being passed in?
//I think most of these methods are manipulate user data, return one thing, so mainly test 'does it return the thing' or not