if (typeof module !== 'undefined') {
    // Sleep = require('./Sleep');
    sleepData = require('../data/sleep-test-data');
	userData = require('../data/users-test-data')
	user = require('./User')
  } 

class Sleep {
    constructor(data){
        this.id = sleepData.userID;
        this.data = sleepData;
        this.specificUser = []
        
    };

	findSleepData(id){
        console.log(this.sleepData)
		let filteredSleepData = this.data.filter(sleep => sleep.userID === id); 
        filteredSleepData.forEach(user => this.specificUser.push(user));
    };
    
    findAverageSleepQualityForUser(){
        let allQualityForOneUser = this.specificUser.map(user => user.sleepQuality);
        let reducedQualityForOneUser = allQualityForOneUser.reduce((a,b) => a += b)
        return Math.round(reducedQualityForOneUser/this.specificUser.length)
    };

    findAverageHoursSleptForUser() {
        let allHoursForOneUser = this.specificUser.map(user => user.hoursSlept);
        let reducedHoursForOneUser = allHoursForOneUser.reduce((a,b) => a += b);
        return Math.round(reducedHoursForOneUser/this.specificUser.length);
    };


};

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }