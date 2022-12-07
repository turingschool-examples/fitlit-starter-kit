class Hydration{
    constructor(data){
        this.data = data


    }
    calcAvgWaterConsumption(id){
        const result = this.data.filter(waterLog => waterLog.userID === id).reduce((total,waterLog,_,arr) => total + waterLog.numOunces  / arr.length  ,0)
        return Math.round(result)
    }

    consumeBydate(id,date){
        return this.data.find(waterLog => waterLog.userID === id && waterLog.date === date).numOunces
    }

    returnWeeklyWaterConsumption(id, date) {
        const userData = this.data.filter(waterLog => waterLog.userID === id)
        const ounces = userData.map(el => el.numOunces)
        const index = userData.findIndex(el => el.date === date && el.userID === id)
        // This is where we'll need to set a conditional for whether userData[index + 7]
        if (ounces.length < 7) {
          return ounces
        } 
        if (!ounces[index + 6]) {
          return ounces.slice(-7)
        }
        return ounces.slice(index, index + 7)
    }
}

export default Hydration