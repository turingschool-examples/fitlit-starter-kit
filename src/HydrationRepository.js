class HydrationRepository {
   constructor(hydrationInstanceData) {
     this.hydrationInstanceData = hydrationInstanceData;
   }

   returnHydrationData(id) {
     return this.hydrationInstanceData.filter(hydration => hydration.userID === id);
   }

   calculateAverageDailyOuncesAllTime() {

   }

   returnOuncesByDate(date) {

   }

   returnOuncesByWeek(date) {

   }

 }

 if (typeof module !== 'undefined') {
   module.exports = HydrationRepository;
 }
