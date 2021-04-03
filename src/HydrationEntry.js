class HydrationEntry {
    constructor(entry) {
        this.id = entry.userID;
        this.date = entry.date;
        this.numOunces = entry.numOunces;
    }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationEntry;
}

// NEW CODE