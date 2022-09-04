// Your fetch requests will live here!

const fetchAllData = (dataPath) => {
    return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataPath}`)
    .then(response => response.json())
    .catch(error => console.log(`Error: ${dataPath} fetch error`, error))
}


export { fetchAllData }