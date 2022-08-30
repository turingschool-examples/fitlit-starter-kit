class UserRepository {
    constructor(data) {
        this.data = data
        this.currentUser
        this.averageStepGoal
    }
    findUsersData(id) {
        const wholeUser = this.data.reduce((acc, person) => {
            if (person.id === id) {
                acc.push(person)
                return acc
            }
            return acc
        },[])
        this.currentUser = wholeUser
    }
    avgStepGoal() {
        const stepGoal = this.data.reduce((acc, person) => {
            acc += parseInt(person.dailyStepGoal)
            return acc
        },0) / this.data.length
        this.averageStepGoal = stepGoal
    }

}

export default UserRepository;