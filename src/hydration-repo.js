class HydrationRepo {
	constructor(dataFilePath) {
		this.dataFilePath = dataFilePath;
		this.userHydrationData = this.findFilepath(dataFilePath);

	}

	 findFilepath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return hydrationData;
    }
  }
}