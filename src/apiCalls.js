// Your fetch requests will live here!

console.log('I will be a fetch request!')

export function fetchUserData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        });
}

export function fetchAllData() {
    return Promise.all([fetchUserData()])
        .then(([userData]) => {
            return {
                userData,
            };
        });
}

export default {
    fetchUserData,
    fetchAllData
}