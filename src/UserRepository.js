class UserRepository {
    constructor(userData,hydrationData,sleepData) {
        this.selectedUserId = userData.id
        this.selectedHydrationData = hydrationData
        this.selectedSleepData = sleepData
    }
returnNumOunces() {
    return this.selectedHydrationData.numOunces
}
}

export default UserRepository;