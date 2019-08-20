const userData = require('../data-subsets/users-subset')
const hydrationData = require('../data-subsets/hydration-subset');

class Hydration {
    constructor(userData) {
        this.userData = userData;
    }

    filterHydrationData() {
        return hydration.filter(hydObj => hydObj.id === this.userData.id)
    }

    calcAvgWaterAllTime() {

    }
}


if (typeof module !== 'undefined') {
    module.exports = Hydration;
}