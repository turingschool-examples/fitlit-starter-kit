import { expect } from 'chai';
import userData from '../src/data/users'
import User from '../src/User'


describe('User', () => {
    let user1, user2, user3, hydrationData
    beforeEach(() => {
			user1 = new User({
					"id": 1,
					"name": "Luisa Hane",
					"address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
					"email": "Diana.Hayes1@hotmail.com",
					"strideLength": 4.3,
					"dailyStepGoal": 10000,
					"friends": [
							16,
							4,
							8
					]
			})
			user2 = new User({
					"id": 2,
					"name": "Jarvis Considine",
					"address": "30086 Kathryn Port, Ciceroland NE 07273",
					"email": "Dimitri.Bechtelar11@gmail.com",
					"strideLength": 4.5,
					"dailyStepGoal": 5000,
					"friends": [
							9,
							18,
							24,
							19
					]
			})
			user3 = new User({
					"id": 3,
					"name": "Herminia Witting",
					"address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
					"email": "Elwin.Tromp@yahoo.com",
					"strideLength": 4.4,
					"dailyStepGoal": 5000,
					"friends": [
							19,
							11,
							42,
							33
					]
			})
			hydrationData = {hydrationData: [
				{
				userID: 1,
				date: "2019/06/15",
				numOunces: 37
				},
				{
				userID: 2,
				date: "2019/06/15",
				numOunces: 75
				},
				{
				userID: 3,
				date: "2019/06/15",
				numOunces: 47
				},
				{
				userID: 1,
				date: "2019/06/16",
				numOunces: 85
				},
				{
				userID: 2,
				date: "2019/06/16",
				numOunces: 42
				}
			]}
    })

    it('should be a function', function () {

        expect(User).to.be.a('function');
    });

    it('should instantiate a new User', function () {

        expect(User).to.be.a('function');
    })

    it('should have a Userdata parameter', function () {

        expect(user1.userData).to.deep.equal({
            "id": 1,
            "name": "Luisa Hane",
            "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            "email": "Diana.Hayes1@hotmail.com",
            "strideLength": 4.3,
            "dailyStepGoal": 10000,
            "friends": [
                16,
                4,
                8
            ]
        });
    })

    it('should have an id', function () {

        expect(user1.userData.id).to.equal(1);
    })

    it('should have an name', function () {

        expect(user1.userData.name).to.equal("Luisa Hane");
    })

    it('should have an address', function () {

        expect(user1.userData.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    })

    it('should have an email', function () {

        expect(user1.userData.email).to.equal("Diana.Hayes1@hotmail.com");
    })

    it('should have a strideLength', function () {

        expect(user1.userData.strideLength).to.equal(4.3);
    })

    it('should have a step goal', function () {

        expect(user1.userData.dailyStepGoal).to.equal(10000);
    })

    it('should have friends', function () {

        expect(user1.userData.friends).to.deep.equal([16, 4, 8]);
    })

    it('should return users first name', function() {


        expect(user1.getFirstName()).to.equal("Luisa Hane");
    })

		it('should output the average fluid ounces of water consumed daily', function() {

			expect(user1.getAvgDailyWater()).to.equal(61);
		})

		it.skip('should identify how many ounces of water a user consumed on a specific day', function() {

			expect(user2.getWaterPerDay("2019/06/15")).to.equal(75);
		})

		it.skip('should calculate average ounces consumed daily over the course of one week', function() {

			expect().to.equal()
		})
});