class HydrationEntry {
    constructor(entry) {
        this.id = entry.userID;
        this.date = entry.date;
        this.numOz = entry.numOunces;
    }
}

module.exports = HydrationEntry;