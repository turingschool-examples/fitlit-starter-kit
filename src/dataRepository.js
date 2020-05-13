class DataRepository {
    constructor(usersData) {
        this.usersData = usersData
        this.users = []
    }


}

if (typeof module !== 'undefined') {
    module.exports = DataRepository;
  }