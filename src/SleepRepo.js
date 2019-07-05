if (typeof module !== 'undefined') {
    Sleep = require('./Sleep');
    sleepData = require('../data/sleep-test-data');
	userData = require('../data/users-test-data')
	user = require('./User')
  } 

class SleepRepo {
    constructor(id){
        this.sleepData = sleepData;
        this.users = new Sleep(id);
    };

    findUserData(id){
        this.users.filter(user => user.id === id); 
    };

    findAverageSleep(){
        let allQuality = this.sleepData.map(user => user.sleepQuality);
        let AllQualityReduced = allQuality.reduce((a,b)=> a += b)
        return Math.round(AllQualityReduced/this.sleepData.length)
    };

    
};

if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  }
