class SleepRepository {
  constructor(sleepData){
    this.data = sleepData;
  }
  getUserData(userId) {
    const foundData = this.data.find(user => user.userID === userId);
      return foundData;
  }
}

export default SleepRepository;
