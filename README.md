# 👟 FitLit 👟

## Table of Contents
- [Introduction](#introduction)
- [Links](#links)
- [Learning Goals](#learning-goals)
- [Features](#features)
- [Setup](#setup)
- [Future Additions](#future-additions)
- [Technologies](#Technologies)
- [Contributors](#contributors)

## Introduction
FitLit is an interactive website that tracks fitness activities, sleep, and hydration similar to "Fitbit." Our goal was to create a useful dashboard for a user to view and see their latest activity data, goals, milestones, and compare these data to other users as well. 

## Links
- [Project spec part 1](https://frontend.turing.edu/projects/Fitlit-part-one.html)
- [Project spec part 2](https://frontend.turing.edu/projects/Fitlit-part-two.html)
- [Project Board](https://github.com/users/piperjarrett/projects/1)
- [WireFrame- Home Page](https://user-images.githubusercontent.com/18154724/188244225-d1bef7e1-2ced-47ee-8cbc-9a1451f8f815.png)

## Learning Goals 
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (single responsibility principle).
- Use object and array prototype methods to perform data manipulation. 
- Implement a robust testing suite using TDD (test driven development).
- Make network requests to retrieve data. 
- Use GitHub Projects and Issues to track project management and progress amongst the team. 
- Use Webpack to bundle our files.
- Implement Chart.js package to display meaningful data to the user in a more visually appealing way. 

## Features
Athlete (user) is randomly generated upon FitLit page load and they are greeted with a welcoming dashboard of their own sleep, hydration, and step (activity) data. These data are also compared against all users to show the user how they stack up against the competition! They can see their user profile information such as email and address as well. The user can select a date to display relevant data for that date and the previous week. 

![fitlit-overview](add gif url here)

## Setup
1. Fork this repo - on the top right corner of this page, click the **Fork** button. 
2. Clone down the forked repo. To rename your project you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
4. Run `npm start` in the terminal to see the HTML page running in your browser on `http://localhost:8080/`. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use. 
5. Enjoy!

## Future Additions
- Adding data points using post to our data model such as a sleep data point or an activity for a current date. 

## Technologies
This project used JavaScript, HTML, and CSS primarily. Additional technologies learned specifically for this project included Webpack, Chart.js, and making network requests to fetch information from an API. 

## Contributors
This project was built by a group of three Front End Engineering students at Turing School of Software and Design: 
- [Jedeo Manirikumwenatwe](https://github.com/Jedeo)
- [Nicole Forseth](https://github.com/forsethnico)
- [Piper Jarrett](https://github.com/piperjarrett)

## Data Model

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```
