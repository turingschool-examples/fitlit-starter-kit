class UserRepository {
    constructor(data) {
        this.data = data
    }
    findUsersData(id) {
        const wholeUser = this.data.reduce((acc, person) => {
            if (person.id === id) {
                acc.push(person)
                return acc
            }
            return acc
        },[])
    }
    avgStepGoal() {
        const stepGoal = this.data.reduce((acc, person) => {
            acc += parseInt(person.dailyStepGoal)
            return acc
        },0) / this.data.length
    }

}

export default UserRepository;