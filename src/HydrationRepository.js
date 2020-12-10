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

   returnOuncesByDate(id, date) {
     const allUserHydration = this.returnHydrationData(id);
     const ozByDate = allUserHydration.find(water => water.date === date);
     return ozByDate.numOunces;
   }

   returnOuncesByWeek(id, date) {
     const allUserHydration = this.returnHydrationData(id);
     const hydrationDates = allUserHydration.map(hydration => hydration.date)
     const indexOfMatchingHydrationDate = hydrationDates.indexOf(date)

     return allUserHydration.slice(indexOfMatchingHydrationDate - 6, indexOfMatchingHydrationDate);

     // const ozByWeek = allUserHydration.
     // we have an array of hydration objects for 1 user id
     // we want an object w/ key of date and value of oz for that date
     // given one date, how do we make the key (Date) increase 7 times (6 times?)
     // date is a string, we need to .split("/") to make it an array so we can just increase the last number
   }

 }

 if (typeof module !== 'undefined') {
   module.exports = HydrationRepository;
 }
