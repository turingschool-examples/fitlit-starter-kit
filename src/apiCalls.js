// Your fetch requests will live here!


console.log('I will be a fetch request!')

const fetchData = (dataSet, key) => {
  fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)  
    .then(response => response.json())
    .then(data => console.log(data[key]));
}


export default fetchData