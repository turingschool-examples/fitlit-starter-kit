import { expect } from 'chai';

import { getUserData, getAverageSteps } from '../src/scripts';

describe("getUserData", function() {
    let users;
    beforeEach(() => {
        users = [
            {
              "id": 1,
              "name": "David Kwon",
              "address": "1234 E Stanford Place",
              "email": "dingus@gmail.com",
              "strideLength": 5,
              "dailyStepGoal": 4000,
              "friends": [
                2,
                3
              ]
            },
            {
              "id": 2,
              "name": "Cory Sanders",
              "address": "21312 Hello Ave",
              "email": "yuppers@yahoo.com",
              "strideLength": 4.5,
              "dailyStepGoal": 9000,
              "friends": [
                1, 
                3
              ]
            },
            {
              "id": 3,
              "name": "Ethan Duvall",
              "address": "48010 Balistreri Harbor, Cleobury IN 43317",
              "email": "wowza@gmail.com",
              "strideLength": 2.7,
              "dailyStepGoal": 3000,
              "friends": [
                1,
                2
              ]
            }
        ]; 
    })

    it("should be a function", function() {
        expect(getUserData).to.be.a("function");
    });

    it("should retrieve user data based on ID", function() {
        const coryData = getUserData(2, users);
        expect(coryData).to.deep.equal({
            "id": 2,
            "name": "Cory Sanders",
            "address": "21312 Hello Ave",
            "email": "yuppers@yahoo.com",
            "strideLength": 4.5,
            "dailyStepGoal": 9000,
            "friends": [
                13,
                19,
                3
            ]
        })
    });
})

describe("getAverageSteps", function() {
    let users;
    beforeEach(() => {
        users = [
            {
              "id": 1,
              "name": "David Kwon",
              "address": "1234 E Stanford Place",
              "email": "dingus@gmail.com",
              "strideLength": 5,
              "dailyStepGoal": 4000,
              "friends": [
                5,
                43,
                46,
                11
              ]
            },
            {
              "id": 2,
              "name": "Cory Sanders",
              "address": "21312 Hello Ave",
              "email": "yuppers@yahoo.com",
              "strideLength": 4.5,
              "dailyStepGoal": 9000,
              "friends": [
                13,
                19,
                3
              ]
            },
            {
              "id": 3,
              "name": "Ethan Duvall",
              "address": "48010 Balistreri Harbor, Cleobury IN 43317",
              "email": "wowza@gmail.com",
              "strideLength": 2.7,
              "dailyStepGoal": 3000,
              "friends": [
                31,
                16,
                15,
                7
              ]
            }
        ]; 
    })

    it("should be a function", function() {
        expect(getAverageSteps).to.be.a("function");
    });

    it("should return average step goals for users", function() {
        const averageSteps = getAverageSteps(users);
        expect(averageSteps).to.equal(5333); 
    })

})

