# FitLit Starter Kit

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
## DTR and Project Board

[DTR](https://gist.github.com/willhobson85/9b87733fbbcdf2ac97e2ea51780858f4)
[Project Board](https://github.com/users/Universal-Patois/projects/3/views/1)

## Design Inspirations

### FitBit
[FitBit View 1](https://files.slack.com/files-pri/T029P2S9M-F040DFQBC9F/img_6925.jpg)
[FitBit View 2](https://turingschool.slack.com/files/U0319FB0P2B/F040DFQBCD7/img_6926.jpg)

### Walk Tracker
[Walk Tracker View 1](https://files.slack.com/files-pri/T029P2S9M-F03V0AM55V5/img_0082.png)
[Walk Tracker View 2](https://files.slack.com/files-pri/T029P2S9M-F03V0AM567R/img_0083.png)

### Inside Tracker
[Inside Tracker View 1](https://cdn.shopify.com/s/files/1/0529/3185/4511/products/PDP_Ultimate_2_08cadef0-a3c1-48a1-a221-bf1efa3275ef.jpg?v=1652378104)
[Inside Tracker View 2](https://cdn.shopify.com/s/files/1/0529/3185/4511/products/PDP_Immunity_2.jpg?v=1652202430)

## Wireframe

[Wireframe Project Design](https://excalidraw.com/#room=d5bcd7fc206815d97f4f,Wwvp_8NbcDmcAcMSdIE89g)