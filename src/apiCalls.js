const fetchData = (dataSet, key) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)  
    .then(response => response.json())
    .then(data => data[key]);
}

export default fetchData
