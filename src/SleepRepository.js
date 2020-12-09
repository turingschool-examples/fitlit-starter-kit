class SleepRepository {
   constructor(sleepInstanceData) {
     this.sleepInstanceData = sleepInstanceData;
   }

   returnSleepData(id) {
     return this.sleepInstanceData.filter(sleep => sleep.userID === id);
   }

   calculateUserAverageHoursSleptAllTime(id) {
     // const allUserHydration = this.returnHydrationData(id);
     // const userTotalOzAllTime = allUserHydration.reduce((totalOz, water) => {
     //   return totalOz + water.numOunces;
     // }, 0);
     // return Math.floor(userTotalOzAllTime / allUserHydration.length);
   }

   calculateUserAverageSleepQualityAllTime(id) {
     // const allUserHydration = this.returnHydrationData(id);
     // const userTotalOzAllTime = allUserHydration.reduce((totalOz, water) => {
     //   return totalOz + water.numOunces;
     // }, 0);
     // return Math.floor(userTotalOzAllTime / allUserHydration.length);
   }

   returnSleepHoursByDate(id, date) {
     // const allUserHydration = this.returnHydrationData(id);
     // const ozByDate = allUserHydration.find(water => water.date === date);
     // return ozByDate.numOunces;
   }

   returnSleepQualityByDate(id, date) {
     // const allUserHydration = this.returnHydrationData(id);
     // const ozByDate = allUserHydration.find(water => water.date === date);
     // return ozByDate.numOunces;
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

   calculateAllUsersAverageSleepQualityAllTime(id) {
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
