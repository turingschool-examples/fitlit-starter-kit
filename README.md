# FitLit!
> Track and display your fitness data! (Or at least the data from these fake users we made up.)

FitLit is a fake fitness and activity tracker app. It displays users' data for steps, stairs, active minutes, hours slept, sleep quality, and ounces of water consumed. It displays data in text/numeric form as well as in charts.

## Getting started

If you just want to click around within our site, this will get you started.

```zsh
clone down this project
npm install
npm install chart.js
open index.html | or (click here)[https://elsafluss.github.io/fitlit-starter-kit/src/index.html]
```
You'll need to install both `npm` and `chartjs` in order to use the site.

### Initial Configuration

If you want to use `npm` to run our tests, you'll have to un-comment the require blocks at the top of `userRepo.js` and `user.js`. Then from within the main project folder, run `npm test test/user-test.js` (and the rest of the test files).

## Features

What can you do here?
* Choose any user and any date (within range), and display that user's activity data.
* Change between activity, sleep, and hydration stats.

## Contributing

If you want to update our project so that it uses D3 instead of chartjs, go for it! Fork this repo and use a feature branch! Let us know what you're working on; we'd love to learn D3 too!

## Links

- Project homepage: https://elsafluss.github.io/fitlit-starter-kit/src/index.html
- Repository: https://github.com/elsafluss/fitlit-starter-kit
- Issue tracker: https://github.com/elsafluss/fitlit-starter-kit/issues

## Creators

This project was created as a mod2 paired project by Kelsie Besinger Yeh and Elsa Fluss. The spec sheet can be found at https://frontend.turing.io/projects/fitlit.html in case you are wondering why we have methods in the code that are never displayed.
