class ActivityRepository{
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  getUserData(id) {
    return this.data.filter(element => 
      element.id === id)
  }



}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}