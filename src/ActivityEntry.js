class ActivityEntry {
    constructor(entry) {
        this.id = entry.userID;
        this.date = entry.date;
        this.numSteps = entry.numSteps;
        this.minutesActive = entry.minutesActive;
        this.flightsOfStairs = entry.flightsOfStairs;
    }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityEntry;
}

// NEW CODE