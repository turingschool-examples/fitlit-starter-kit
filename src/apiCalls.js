const fetchData = (fileName, dataKey) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${fileName}`)  
    .then(response => response.json())
    .then(data => data[dataKey])
}

export default fetchData
