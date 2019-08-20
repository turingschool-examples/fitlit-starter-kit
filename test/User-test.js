const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockData = require('../mock-data/mock-users');

let user;

describe('User', () => {

    beforeEach( () => {
        user = new User(mockData[1]); 
    });
    
    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
        expect(user).to.be.an.instanceof(User);
    });

    it('should have a parameter to take in a user/s data', () => {
        expect(user.userData).to.eql(mockData[1]);
    });

    it('should have a property of id', () => {
        expect(user.id).to.equal(2);
    });

    it('should have a property of name', () => {
        expect(user.name).to.equal("Jarvis Considine");
    });

    it('should have a property of address', () => {
        expect(user.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
    });

    it('should have a property of email', () => {
        expect(user.email).to.equal("Dimitri.Bechtelar11@gmail.com");
    });

    it('should have a property of stride length', () => {
        expect(user.strideLength).to.equal(4.5);
    });

    it('should have a property of daily step goal', () => {
        expect(user.dailyStepGoal).to.equal(5000);
    });

    it('should have a property of friends', () => {
        expect(user.friends).to.eql(mockData[1].friends);
    });

    describe("findUserFirstName", () => {
        it('should find a user/s first name', () => {
            expect(user.findUserFirstName()).to.equal("Jarvis")
        })
    })









});