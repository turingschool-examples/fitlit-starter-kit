class Sleep {
   constructor(sleepData) {
     this.userID = sleepData.userID;
     this.date = sleepData.date;
     this.hoursSlept = sleepData.hoursSlept;
     this.sleepQuality = sleepData.sleepQuality;
   }

   returnHoursSlept() {
     return sleepData.hoursSlept;
   }

   returnSleepQuality() {
     return sleepData.sleepQuality;
   }

 }

 if (typeof module !== 'undefined') {
   module.exports = Sleep;
 }
