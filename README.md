# FitLit -- Being Fit is Lit

## Description

FitLit is a project that simulates an activity tracker, allowing a given user to see their health statistics.  Statistics include steps taken, water consumed, quality and quantity of sleep, and stairs climbed.  To make it even more dynamic, the user can see other users' stats, both the friends that are linked to their profile and averages of all users in the database.

Part of this project was also designing a UI/UX comp.  We used Canva to make a mock-up and used that for wireframming and writing/implementing our CSS.

Technically, this project incorporated designing the architecture of the project, which included multiple classes to handle various small databases.  Code implementation focused on using information from various databases in the same classes and how those can talk to each other.

## Testing

Testing was done 

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the `src` and the `test` directories.

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
