import { expect } from 'chai';
import User from '../src/User';
import mock from '../src/data/mock';

describe('User', function () {
    let user1, user2, user3
    beforeEach(function () {
        user1 = new User(mock.users[0])
        user2 = new User(mock.users[1])
        user3 = new User(mock.users[2])
    })
    it('should be a function', function () {
        expect(User).to.be.a('function')
    });

    it('should be a instance of new User', function () {
        expect(user1).to.be.instanceOf(User)
    });

    it('should be able to store a number for user id', function () {
        expect(user1.id).to.equal(1)
        expect(user2.id).to.equal(2)
    });

    it('should be able to store a user name', function () {
        expect(user1.name).to.equal('Trystan Gorczany')
        expect(user2.name).to.equal('Tyreek VonRueden')
    });

    it('should be to store a user address ', function () {
        expect(user1.address).to.equal('9484 Lucas Flat, West Kittymouth WA 67504')
        expect(user2.address).to.equal('623 Koelpin Skyway, Lake Luigichester MN 77576-1678')
    });

    it('should be able to store a user email', function () {
        expect(user1.email).to.equal('Taurean_Pollich31@gmail.com')
        expect(user2.email).to.equal('Nicolette_Halvorson43@yahoo.com')
    });

    it('should be able to store a users stride length', function () {
        expect(user1.strideLength).to.equal(4)
        expect(user2.strideLength).to.equal(4.5)
    });

    it('should be able to store a daily step goal', function () {
        expect(user1.dailyStepGoal).to.equal(7000)
        expect(user2.dailyStepGoal).to.equal(9000)
    });

    it('should be able to store an array of friends id numbers', function () {
        expect(user1.friends).to.deep.equal([5, 43, 46, 11])
    });

    it('should be able to return the users first name', function () {
        expect(user1.getFirstName()).to.equal('Trystan')
    })

    it('should be able to return the average step goal of all users', function () {
        expect(user1.usersAvgDailyStep(mock.users)).to.equal(6333)
    })
})
