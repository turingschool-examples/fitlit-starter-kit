const userDataFetch = (data) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${data}`)
    .then(data => data.json())
    .catch(err => console.log(`Error at: ${err}`))
}


console.log('I will be a fetch request!')

export { userDataFetch };


