class Sleep {
  constructor(obj) {
    console.log('obj', obj)
  }
}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
