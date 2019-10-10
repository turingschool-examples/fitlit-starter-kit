var headerName = document.querySelector('#header-name');

var user = new User({
  'id': 1,
  'name': 'Luisa Hane',
  'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
  'email': 'Diana.Hayes1@hotmail.com',
  'strideLength': 4.3,
  'dailyStepGoal': 10000,
  'friends': [
    16,
    4,
    8
  ]
});

headerName.innerText = `${user.getFirstName()}'S `;
