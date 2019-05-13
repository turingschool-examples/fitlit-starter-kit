if(typeof module !== 'undefined') {
  userData = require('../data/users');
  hydrationData = require('../data/sample-hydration')
  hydration = require('../src/hydration')
 }


class HydrationRepository {
	constructor(dataFilePath,userId) {
    this.userHydrationData = this.findFilePath(dataFilePath);
    this.currentUser = (this.findUserHydration(userId))
	}

	 findFilePath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return hydrationData;
    } 
  }

  findUserHydration(userId) {
    let currentUser = this.userHydrationData.find(function(element){
    return element.userID === userId 
    })
   
    return currentUser; 
    }
};

if(typeof module !== 'undefined') {
	module.exports = HydrationRepository;
}