const calcAverage = (data, property) => {
  let numUndefined = 0;
  const total = data.reduce((total, dataPoint) => {
    if (dataPoint[property] !== undefined) {
      console.log(dataPoint[property])
      return total + dataPoint[property]
    } else {
      numUndefined += 1;
      return total
    }
  }, 0)
  const avg = total / (data.length - numUndefined)
  return avg
}


if (typeof module !== "undefined") {
  module.exports = calcAverage;
}
