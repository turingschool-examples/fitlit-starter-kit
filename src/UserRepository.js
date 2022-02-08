class UserRepository {
  constructor(data) {
    this.allData = [data];
  }

  addData(data) {
    this.allData.push(data);
  }

  dataByID(id) {
    this.allData.find()
  }

}

export default UserRepository;
