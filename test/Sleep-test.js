import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import { singleUserData }  from '../src/data/sleepData';


describe('Sleep', () => {
    let user1,user2,sleep1,sleep2
   

    beforeEach(() => {
     user1 = new User(singleUserData)
     user2 = new User(singleUserData)
     sleep1 = new Sleep(singleUserData)
     sleep2 = new Sleep(singleUserData)
    }) 
    
    
    
    it('should be a function',  () => {
        expect(Sleep).to.be.a('function')
    });
    
    it('should instantiate Sleep',() => {
        expect(sleep1).to.be.an.instanceOf(Sleep);
    })
    
    it('should return the average number of hours slept per day ', () => {
        ;
    })
    
    it('should return the average sleep quality per day over all time ', () => {
        ;
    })
    
    it('should return  how many hours they slept for a specific day (identified by a date)  ', () => {
        ;
    })
    
    it('should return  their sleep quality for a specific day (identified by a date)   ', () => {
        ;
    })
    
    it('should how many hours slept each day over the course of a given week (7 days)  ', () => {
        ;
    })
    
    it('should sleep quality each day over the course of a given week (7 days)  ', () => {
        ;
    })
    
    it('should return the average sleep quality ', () => {
        ;
    })


    
    

});