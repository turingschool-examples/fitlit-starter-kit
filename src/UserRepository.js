class UserRepository {
  constructor(data) {
    this.allData = data;
  }

  dataByID(idInput) {
    const output = this.allData.find(data => {
      if (data.id === idInput) {
      return data;
      }
    });
    return output;
  }

}

export default UserRepository;
