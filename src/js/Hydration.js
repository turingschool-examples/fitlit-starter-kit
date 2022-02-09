class Hydration {
  constructor(data, id) {
    this.id = id;
    this.days = data.filter(day => day.userID === this.id);
  }
  getAverage() {

  }
  getDaily() {

  }
  getWeekly() {

  }

  //43 50 50 91 61 96 69
}

export default Hydration;
