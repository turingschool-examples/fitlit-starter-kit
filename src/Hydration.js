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
}

export default Hydration