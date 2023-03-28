import * as dayjs from 'dayjs'

class Sleep {
  constructor(data){
    this.data = data
      .map((sleep) => {
        sleep.date = dayjs(sleep.date, 'YYYY/MM/DD')
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
    console.log(date, this.data)
    return this.data.find(sleep => sleep.date === date)[dataType]
  }

  hoursSleptInWeek() {
    return this.data
      .map(sleep => sleep.hoursSlept)
      .slice(1,6)
  }

  qualitySleptInWeek() {

  }

  sortData() {
    this.data = this.data
      .sort((a,b) => a.date - b.date)
    this.data.map((sleep) => {
      sleep.date = dayjs(sleep.date, 'YYYY/MM/D').format('YYYY/MM/DD')
      return sleep
    })
  }

}

export default Sleep