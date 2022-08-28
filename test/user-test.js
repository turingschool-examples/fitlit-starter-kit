import { expect } from 'chai';
import User from '../src/user';


describe('User', function() {
    let user1;
    let user2;
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
        });
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
        });
    });


    it('should be a function', function() {
    
        expect(User).to.be.a('function');
    })
    it('should have an ID', function() {
        expect(user1.id).to.equal(1);
        expect(user2.id).to.equal(2);
    })
    it('should be able to have a name', function() {
        expect(user1.name).to.equal("Luisa Hane");
        expect(user2.name).to.equal("Jarvis Considine");
    })
    it('should be able to have an address', function() {
        expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
        expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
    })
    it('should be able tohave an email', function() {
        expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
        expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
    })
    it('should be able to have a stride length', function() {
        expect(user1.strideLength).to.equal(4.3);
        expect(user2.strideLength).to.equal(4.5);
    })
    it('should be able to have a daily step goal', function() {
        expect(user1.dailyStepGoal).to.equal(10000);
        expect(user2.dailyStepGoal).to.equal(5000);
    })
    it('should be able to have friends', function() {
        expect(user1.userFriends).to.deep.equal([16, 4, 8]);
        expect(user2.userFriends).to.deep.equal([9, 18, 24, 19]);
    })
    it('should return a user\'s first name', function() {  
        expect(user1.returnName()).to.equal("Luisa");
        expect(user2.returnName()).to.equal("Jarvis")      
    })


})