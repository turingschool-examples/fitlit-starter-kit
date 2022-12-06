class Hydration {
    constructor (currentUser, data) {
        this.userHydrationInfo = data.hydrationData.filter(day => day.userID === currentUser.id)
    } 
}

export default Hydration;