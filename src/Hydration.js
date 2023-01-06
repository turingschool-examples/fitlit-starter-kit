import { userDataForDate, checkID, weeklyData } from './helperFunctions'

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
    return weeklyData(this.data, 'numOunces', "Water Consumption", id, date)
  }
}

export default Hydration;
