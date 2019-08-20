console.log(userData[16])

const dailySection = document.querySelector('.daily_section')

dailySection.insertAdjacentHTML('afterbegin', `<article class="user_info">
  <h2>${userData[16].name}</h2>
  <p>Address</p>
  <p>Email</p>
  <p>Stride Length</p>
  <p>Daily Step Goal</p>
</article>`)

//insertAdjecentHTML?
  //Interpolate inside of here for user's info
  //
//

