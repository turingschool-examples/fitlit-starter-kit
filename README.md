# Activity Tracker Starter

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/activity-tracker.html).

## Setup

1. Within your group, decide on one person to have the project repository (repo) on their GitHub account. Then, that person should fork this repo - on the top right corner of this page, click the **Fork** button.
1. Both memeber of the group should clone down the _forked_ repo. Since you don't want to name your project "activity-tracker-starter", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the library dependencies. Run `npm install` to install project dependencies.
1. Run `open src/index.html` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
1. Make sure both members of your team are collaborators on the forked repo.

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you have run `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).

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
    "dailyStepGoal": [number - steps]
  },
  ...more users
]
```

**Activity**

```
[
  {
    "userID": [number],
    "activityData": [
      {
        "date": [string DD/MM/YYY],
        "numSteps": [number - steps],
        "minutesActive": [number - minutes],
        "flightsOfStairs": [number - flights]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "hydrationData": [
      {
        "date": [string DD/MM/YYY],
        "numOunces": [number - ounces]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "sleepData": [
      {
        "date": [string DD/MM/YYY],
        "hoursSlept": [number - hours],
        "sleepQuality": [number - unitless]
      },
      ...more dates
    ]
  },
  ...more user data
]
```

DTR Link: https://gist.github.com/e12e4ce11b9a9ac170cec6e0a2bb9fa4.git
