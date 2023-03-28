const dayjs = require('dayjs')

class Sleep {
  constructor(data){
    this.data = data
      .map((sleep) => {
        sleep.date = dayjs(sleep.date, 'YYYY/MM/D').format('YYYY/MM/D')
        return sleep
      })
  }
  
  getAverage(dataType) {
    let total = this.data.reduce((acc, currentValue) => {
      acc += currentValue[dataType]
      return acc
      }, 0)
    return parseFloat((total / this.data.length).toFixed(4))
  }

  getSleepInfoForSpecificDate(date, dataType){
    return this.data.find(sleep => sleep.date === date)[dataType]
  }

  // hoursSlept(date) {
  //   return this.data.find(sleep => sleep.date === date).hoursSlept
  // }

  // qualityOfSleep(date) {
  //   return this.data.find(sleep => sleep.date === date).sleepQuality
  // }

  hoursSleptInWeek(date) {
    let sevenDaysEarlier = dayjs(date, 'YYYY/MM/D')
      .subtract(7, "day")
      .format('YYYY/MM/D')
    let targetObject = this.data.find(sleep => sleep.date === sevenDaysEarlier)
    return targetObject
  }

  qualitySleptInWeek() {

  }

  sortData() {
    this.data = this.data
      .sort((a,b) => a.date - b.date)
    console.log(this.data)
  }

}

export default Sleep