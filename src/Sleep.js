class Sleep {
  constructor(data){
    this.data = data;
  };
  
  getAverage(dataType) {
    if (dataType === "hoursSlept" || dataType === "sleepQuality") {
      let total = this.data.reduce((acc, currentValue) => {
        acc += currentValue[dataType];
        return acc;
        }, 0)
      return parseFloat((total / this.data.length).toFixed(4));
    } else {
      return `${dataType} is not a valid argument!`;
    };
  };

  getInfoForSpecificDate(date, infoType) {
    if (this.data.some(sleep => sleep.date === date)) {
      return this.data.find(sleep => sleep.date === date)[infoType];
    } else {
      return "There is no data for this date";
    };
  };

  getInfoForPastWeek(infoType) {
    if (infoType === "hoursSlept" || infoType === "sleepQuality") {
      return this.data
        .map(sleep => sleep[infoType])
        .slice(0,7);
    } else {
      return `${infoType} is not a valid argument!`;
    };
  };
};

export default Sleep;