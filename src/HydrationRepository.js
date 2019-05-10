class HydrationRepository {
  constructor(dataFilepath) {
    this.dataFilepath = dataFilepath;
    this.hydrationData = this.findFilepath(dataFilepath)
    // this.currentUser;
    
  }
  getHydrationDataFromId(id) {
    return this.hydrationData.find(user => user.userID === id);
  }
  findFilepath(dataFilepath) {
    if(typeof module !== 'undefined') {
      return require(dataFilepath);
    } else {
      return hydrationData
    }
  }
  instantiateHydration() {
    return hydrationData.map(datum => datum = new Hydration(datum.userID, datum.hydrationData));
  }
}



if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}