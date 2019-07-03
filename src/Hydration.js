if (typeof module !== 'undefined') {
	hydrationData = require('../data/hydration-test-data')
	User = require('./User')
	userData = require('../data/users-test-data')

}

class Hydration{
	constructor(){
		this.data = hydrationData;

	}

	
}

module.exports = Hydration;