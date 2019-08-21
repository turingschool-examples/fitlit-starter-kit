class HydrationRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  findHydrationUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

}







if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}