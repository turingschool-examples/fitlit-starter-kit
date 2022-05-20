// Your fetch requests will live here!
import UserRepository from './UserRepository';


const userFetchData = fetch("https:fitlit-api.herokuapp.com/api/v1/users")

Promise.all([userFetchData])
  .then(files => {
      files.forEach(file => {
          process(file.json())
      })
  })

const userData = [];
let process = (prom) => {
  prom.then(data => {
    let repo = new UserRepository(data)
    userData.push(repo)
  })
}

export default userData;
