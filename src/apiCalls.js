// Your fetch requests will live here!


console.log('I will be a fetch request!')

const fetchData = (dataSet) => {
  fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataSet}`)  
    .then(response => response.json())
    .then(data => console.log(data));
}


export default fetchData