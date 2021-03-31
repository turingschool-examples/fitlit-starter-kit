class HydrationEntry {
    constructor(entry) {
        this.id = entry.userID;
        this.date = entry.date;
        this.numOunces = entry.numOunces;
    }
}

module.exports = HydrationEntry;