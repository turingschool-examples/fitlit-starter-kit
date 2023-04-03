# FitLit

## Abstract
This web application creates a dashboard with easy to read information about users daily habits like sleep, hydration, and activity. Users are able to see the latest activity data, goals, and milestones.

## Setup
Fork and clone this [repo](https://github.com/tdmburr/fitlit).

Install the library dependencies. Run:

```npm install```

Run ```npm start``` in the terminal to see the HTML page

```Control + C``` is the command to stop running the local server

## Preview of App
![FitLit]()

## Reflections:

This is our first two-part group project, where we will be working together over an extended amount of time. We have currently gone through Module 1 and halfway through Module 2 of Turing School of Software and Design Front-End Engineering Program. This project allowed us to continue growing our cooperative learning skills, teammwork, communication, and our software developer skills. 

## Technologies Used:
Chai
Mocha
Javascript
API
CSS
HTML

## Countributors:
Winston Calhoun [LinkedIn](https://www.linkedin.com/in/winston-calhoun-9841bb256/) || [github](https://github.com/WinstonCalhoun)  
Devynne Marshall ([LinkedIn](https://www.linkedin.com/in/devynnemarshall/) || [github](https://github.com/Devynnem))  
Trey Marshall ([LinkedIn](https://www.linkedin.com/in/trey-marshall-32ab01260/) || [github](https://github.com/tdmburr))  
Sarah Moore [LinkedIn](https://www.linkedin.com/in/sarah-moore-a35196127/) || [github](https://github.com/sarahcatherine311)  
Mattheus Saqueli [LinkedIn](https://www.linkedin.com/in/mattheus-saqueli-409813250/) || [github](https://github.com/mattsaqueli)  










The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Setup

1. Within your group, decide on one person to have the project repository (repo) on their GitHub account. Then, that person should fork this repo - on the top right corner of this page, click the **Fork** button.
1. Both memebers of the group should clone down the _forked_ repo. Since you don't want to name your project "activity-tracker-starter", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `npm start` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page).  `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.   
1. Make sure both members of your team are collaborators on the forked repo.  
1. Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We need to be using `webpack-dev-server@3.11.2` which is not the latest version.  If you start to run into Webpack errors, first check that all group members are using the correct version.  

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).


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
