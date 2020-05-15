const chai = require('chai');
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');
const sleepSampleData = require('../sample-data/sleep-sample')

describe('Sleep Repository', () => {
  let sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9, sleep10,
  sleep11, sleep12, sleep13, sleep14, sleep15, sleep16, sleep17, sleep18, sleep19, sleep20,
  sleep21, sleep22, sleep23, sleep24, sleep25, sleep26, sleep27, sleep28, sleep29, sleep30,
  sleep31, sleep32, sleep33, sleep34, sleep35, sleep36, sleep37, sleep38, sleep39, sleep40

  let sleepData;
  let sleepRepo;

  beforeEach(() => {
    sleep1 = sleepSampleData[0]  
    sleep2 = sleepSampleData[1]  
    sleep3 = sleepSampleData[2]  
    sleep4 = sleepSampleData[3]  
    sleep5 = sleepSampleData[4]  
    sleep6 = sleepSampleData[5]  
    sleep7 = sleepSampleData[6]  
    sleep8 = sleepSampleData[7]  
    sleep9 = sleepSampleData[8]  
    sleep10 = sleepSampleData[9]
    sleep11 = sleepSampleData[10]
    sleep12 = sleepSampleData[11]
    sleep13 = sleepSampleData[12]
    sleep14 = sleepSampleData[13]
    sleep15 = sleepSampleData[14]
    sleep16 = sleepSampleData[15]
    sleep17 = sleepSampleData[16]
    sleep18 = sleepSampleData[17]
    sleep19 = sleepSampleData[18]
    sleep20 = sleepSampleData[19]
    sleep21 = sleepSampleData[20]
    sleep22 = sleepSampleData[21]
    sleep23 = sleepSampleData[22]
    sleep24 = sleepSampleData[23]
    sleep25 = sleepSampleData[24]
    sleep26 = sleepSampleData[25]
    sleep27 = sleepSampleData[26]
    sleep28 = sleepSampleData[27]
    sleep29 = sleepSampleData[28]
    sleep30 = sleepSampleData[29]
    sleep31 = sleepSampleData[30]
    sleep32 = sleepSampleData[31]
    sleep33 = sleepSampleData[32]
    sleep34 = sleepSampleData[33]
    sleep35 = sleepSampleData[34]
    sleep36 = sleepSampleData[35]
    sleep37 = sleepSampleData[36]
    sleep38 = sleepSampleData[37]
    sleep39 = sleepSampleData[38]
    sleep40 = sleepSampleData[39]

    sleepData = [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9, sleep10,
      sleep11, sleep12, sleep13, sleep14, sleep15, sleep16, sleep17, sleep18, sleep19, sleep20,
      sleep21, sleep22, sleep23, sleep24, sleep25, sleep26, sleep27, sleep28, sleep29, sleep30,
      sleep31, sleep32, sleep33, sleep34, sleep35, sleep36, sleep37, sleep38, sleep39, sleep40]
    
    sleepRepo = new SleepRepo(sleepData)
  })

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function')
  })

  it('should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepo)
  })

  it('should organize sleep entries by user', () => {
    sleepRepo.getDataByUser()
    expect(sleepRepo.dataByUser).to.be.an('object')
  })

  it('should calculate the average sleep quality for all users', () => {
    expect(sleepRepo.calculateAverageSleep()).to.equal(3.3)
  })

  it('should return average sleep quality greater than 3 for a given week', () => {
    expect(sleepRepo.getAllQualitySleepers("2019/06/15")).to.deep.equal([1, 2, 4])
  })

  it('should return user who slept the most on a given day', () => {
    expect(sleepRepo.getLongestSleepers("2019/06/17")).to.deep.equal([
      {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 11,
        "sleepQuality": 2.4
      }
    ])
  })

  it('should return users who slept the most on a given day if there are more than one', () => {
    expect(sleepRepo.getLongestSleepers("2019/06/15")).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 5
      },{
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 5
      }
    ])
  })

  it('should return user who had best sleep quality on a given day', () => {
    expect(sleepRepo.getHighestQualitySleepers("2019/06/19")).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 4.9,
        "sleepQuality": 4.6
      }
    ])
  })

  it('should return users who had best sleep quality on a given day if there are more than one', () => {
    expect(sleepRepo.getHighestQualitySleepers("2019/06/15")).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 5
      },{
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 5
      }
    ])
  })
})