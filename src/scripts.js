const User = require ('../src/User');
const UserRepository = require ('../src/UserRepository');

const userInfoButton = document.querySelector('#userinfo-button');
const userInfoDropdown = document.querySelector('#user-info-page');

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}

  userInfoButton.addEventListener('click', showDropdown);