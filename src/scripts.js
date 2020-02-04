

window.addEventListener('load', getUserInfo);

var wrapper = document.querySelector('main');

function getUserInfo() {
  wrapper.insertAdjacentHTML('beforeend', `
  <section class='one'>
    <h2 class='users-name'>Welcome User 1!</h2>
  </section>
  <section class='two'>
    <h2 class='users-name'>Welcome User 2!</h2>
  </section>
  <section class='three'>
    <h2 class='users-name'>Welcome User 3!</h2>
  </section>
  `);
}

//
