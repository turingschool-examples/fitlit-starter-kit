const calcAverage = (data, property) => {
  const total = data.reduce((total, dataPoint) => {
    return total + dataPoint[property]
  }, 0)
  const avg = total / data.length
  return avg
}


if (typeof module !== "undefined") {
  module.exports = calcAverage;
}
