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

  getInfoForSpecificDate(date, infoType){
    return this.data.find(sleep => sleep.date === date)[infoType]
  }

  getInfoForPastWeek(infoType) {
    return this.data
      .map(sleep => sleep[infoType])
      .slice(0,7)
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