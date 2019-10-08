class Hydro {
  constructor(hydroData, id) {
    this.data = hydroData;
    this.userID = id
    this.dates = []
  }

  findAllDate(id) {
    this.data.filter(user => {
      if(user.id === id) {
       this.dates.push(user)
      }
      return this.dates
    });
  }
}

module.exports = Hydro;