class HydrationRepository {
   constructor(hydrationInstanceData) {
     this.hydrationInstanceData = hydrationInstanceData;
   }

   returnHydrationData(id) {
     return this.hydrationInstanceData.filter(hydration => hydration.userID === id);
   }

   calculateAverageDailyOuncesAllTime(id) {
     const allUserHydration = this.returnHydrationData(id);
     const userTotalOzAllTime = allUserHydration.reduce((totalOz, water) => {
       return totalOz + water.numOunces;
     }, 0);
     return Math.floor(userTotalOzAllTime / allUserHydration.length);
   }

   returnOuncesByDate(date) {

   }

   returnOuncesByWeek(date) {

   }

 }

 if (typeof module !== 'undefined') {
   module.exports = HydrationRepository;
 }
