class HydrationRepository{
	constructor(dataset, id){
		this.dataset = dataset;
		this.id = id;
		this.userHydration = this.findHydrationUser();
	}

	findHydrationUser() {
		return this.dataset.filter(user => user.userID === this.id)
	}

	findHydrationAverage() {
		return Math.floor(this.userHydration.reduce((a,b) => a + b.numOunces, 0)/this.userHydration.length)
	}

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}