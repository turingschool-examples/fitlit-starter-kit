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
        let potato = this.sleepData.map(user => user.sleepQuality);
        let squash = potato.reduce((a,b)=> a += b)
        return Math.round(squash/this.sleepData.length)
    };

    
};

module.exports = SleepRepo;
