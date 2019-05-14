class Sleep {
  constructor(user, info){
    this.user = user,
    this.info = info
  }

  avgHoursSlept(){
    let sum = this.info.sleepData.map(date => date.hoursSlept);
    let avg = sum.reduce((acc, curr) => {
      return acc + curr
    }, 0)/sum.length
    return Math.round(avg)  
  }

  avgSleepQuality(){
    let sum = this.info.sleepData.map(date => date.sleepQuality);
    let avg = sum.reduce((acc, curr) => {
      return acc + curr
    }, 0)/sum.length
    return Math.round(avg) 
  }

  hoursSlept(day){
    let data = this.info.sleepData.filter(dates => {
      return dates.date === day    
     })
    return data.map(stuff => stuff.hoursSlept)[0]
  }

  sleepQuality(day){
    let data = this.info.sleepData.filter(dates => {
      return dates.date === day    
     })
    return data.map(stuff => stuff.sleepQuality)[0]
  }

  weekSleep(day){
    let sleepInfo = this.info.sleepData
    let workArray = sleepInfo.map(el => el.date)
    let index = workArray.indexOf(day)
    let data = sleepInfo.slice(index-6, index+1)
    return data
  }

  weekQuality(day){
    let sleepInfo = this.info.sleepData
    let workArray = sleepInfo.map(el => el.date)
    let index = workArray.indexOf(day)
    let data = sleepInfo.slice(index-6, index+1)
    return data
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
module.exports = Sleep;
}