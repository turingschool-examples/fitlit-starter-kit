import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe("User Hydration", () => {
    let userHydration;

    beforeEach(() => {
        let currentUser = {
            id: 1,
            name: "Luisa Hane",
            address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            email: "Diana.Hayes1@hotmail.com",
            strideLength: 4.3,
            dailyStepGoal: 10000,
            friends: [16, 4, 8],
        }

        let allHydrationInfo = {
            hydrationData: [
            {
                userID: 1,
                date: "2019/06/15",
                numOunces: 37
            },
            {
                userID: 1,
                date: "2019/06/16",
                numOunces: 69
            },
            {
                userID: 1,
                date: "2019/06/17",
                numOunces: 96
            },
            {
                userID: 1,
                date: "2019/06/18",
                numOunces: 61
            },
            {
                userID: 2,
                date: "2019/06/18",
                numOunces: 70
            },
            {
                userID: 1,
                date: "2019/06/19",
                numOunces: 91
            },
            {
                userID: 1,
                date: "2019/06/20",
                numOunces: 50
            },
            {
                userID: 1,
                date: "2019/06/21",
                numOunces: 50
            },
            {
                userID: 1,
                date: "2019/06/22",
                numOunces: 43
            }

            ]
        }


        userHydration = new Hydration(currentUser, allHydrationInfo)
    });

    it("should be a function", function () {
        expect(Hydration).to.be.a("function");
    });

    it("should be a Hydration Class", function () {
        expect(userHydration).to.be.an.instanceOf(Hydration);
    });

    it("should store all of a users hydration events in a single array property", function () {
        expect(userHydration.userHydrationInfo).to.deep.equal([
            {
                userID: 1,
                date: "2019/06/15",
                numOunces: 37
            },
            {
                userID: 1,
                date: "2019/06/16",
                numOunces: 69
            },
            {
                userID: 1,
                date: "2019/06/17",
                numOunces: 96
            },
            {
                userID: 1,
                date: "2019/06/18",
                numOunces: 61
            },
            {
                userID: 1,
                date: "2019/06/19",
                numOunces: 91
            },
            {
                userID: 1,
                date: "2019/06/20",
                numOunces: 50
            },
            {
                userID: 1,
                date: "2019/06/21",
                numOunces: 50
            },
            {
                userID: 1,
                date: "2019/06/22",
                numOunces: 43
            }
        ]);
    });

    it("should have a method that returns the avg ounces of water consumed all time for the user", function () {
        expect(userHydration.averageUserHydrationAllTime()).to.equal(62.125);
    });

    it("should have a method to return the num ounces of water consumed on a given day", function () {
        expect(userHydration.givenDayHydration("2019/06/20")).to.equal(50);
        expect(userHydration.givenDayHydration("2019/06/22")).to.equal(43);
    });

    it("should have a method to return the num ounces of water consumed on a per day for a week", function () {
        let weekBeginDate = "2019/06/16"
        expect(userHydration.weekHydration("2019/06/20")).to.deep.equal(69,96,61,91,50,50,43);
    });
});