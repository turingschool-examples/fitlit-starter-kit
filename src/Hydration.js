import { userDataForDate } from './helperFunctions'
import { checkID } from "./helperFunctions"

class Hydration {
  constructor(data) {
    this.data = data;
    
  }
  
  calcAvgWaterConsumption(id) {
    if(!checkID(id,this.data)) {
      return 'User Not Found'
    }
    const result = this.data
      .reduce(
        (total, waterLog) => {
          if(waterLog.userID === id) {
            total.ounces += waterLog.numOunces
            total.count +=1
            return total 
          }
          return total
  },{ounces: 0, count: 0});
    return Math.round(result.ounces / result.count);
  }

  consumeBydate(id, date) {
    if(!checkID(id,this.data)) {
      return 'User Not Found'
    }
    
    const ounceForDate = userDataForDate(this.data, id, date);

    if(ounceForDate) {
      return  ounceForDate.numOunces
    } else {
      return 'No data found for date selected'
    }
  }

  returnWeeklyWaterConsumption(id, date) {
    const userData = this.data.filter((waterLog) => waterLog.userID === id);
    const ounces = userData.map((el) => el.numOunces);
    const dates = userData.map((el) => el.date);
    const index = userData.findIndex(
      (el) => el.date === date && el.userID === id
    );
    if(index === -1 ) {
      return 'No data found for date selected'
    }
    if (!ounces[index + 6]) {
      return {
        count: ounces.slice(-7),
        label: "Water Consumption",
        dates: dates.slice(-7),
      };
    }
    return {
      count: ounces.slice(index, index + 7),
      label: "Water Consumption",
      dates: dates.slice(index, index + 7),
    };
  }
}

export default Hydration;
