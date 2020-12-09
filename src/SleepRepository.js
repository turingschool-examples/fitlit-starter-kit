class SleepRepository {
   constructor(sleepInstanceData) {
     this.sleepInstanceData = sleepInstanceData;
   }

   returnSleepData(id) {
     return this.sleepInstanceData.filter(sleep => sleep.userID === id);
   }

   calculateUserAverageHoursSleptAllTime(id) {
     const allUserSleep = this.returnSleepData(id);
     const userTotalHoursSleptAllTime = allUserSleep.reduce((totalHours, sleep) => {
       return totalHours + sleep.hoursSlept;
     }, 0);
     const userAverageNightlyHoursSlept = userTotalHoursSleptAllTime / allUserSleep.length;
     return Math.round(userAverageNightlyHoursSlept * 10) / 10;
   }

   calculateUserAverageSleepQualityAllTime(id) {
     const allUserSleep = this.returnSleepData(id);
     const userTotalSleepQualityAllTime = allUserSleep.reduce((totalSleepQuality, sleep) => {
       return totalSleepQuality + sleep.sleepQuality;
     }, 0);
     const userAverageNightlySleepQuality = userTotalSleepQualityAllTime / allUserSleep.length;
     return Math.round(userAverageNightlySleepQuality * 10) / 10;
   }

   returnSleepHoursByDate(id, date) {
     const allUserSleep = this.returnSleepData(id);
     const hoursSleptByDate = allUserSleep.find(sleep => sleep.date === date);
     return hoursSleptByDate.hoursSlept;
   }

   returnSleepQualityByDate(id, date) {
     const allUserSleep = this.returnSleepData(id);
     const ozByDate = allUserSleep.find(sleep => sleep.date === date);
     return ozByDate.sleepQuality;
   }

   returnNightlyHoursSleptByWeek(id, date) {
     // const allUserHydration = this.returnHydrationData(id);
   }

   returnNightlySleepQualityByWeek(id, date) {
     // const allUserHydration = this.returnHydrationData(id);
   }

   returnNightlySleepQualityByWeek(id, date) {
     // const allUserHydration = this.returnHydrationData(id);
   }

   calculateAllUsersAverageSleepQualityAllTime() {
     // const allUserHydration = this.returnHydrationData(id);
     // const userTotalOzAllTime = allUserHydration.reduce((totalOz, water) => {
     //   return totalOz + water.numOunces;
     // }, 0);
     // return Math.floor(userTotalOzAllTime / allUserHydration.length);
   }

   calculateUsersWithSleepQualityGreaterThan3() {

   }

   returnUsersWhoSleptMostOnDate() {

   }

 }

 if (typeof module !== 'undefined') {
   module.exports = SleepRepository;
 }
