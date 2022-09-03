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
newStuff: 
<a name="readme-top"></a>

## Table of Contents
---
- [About The Project](#About-the-Project)
- [Technologies](#Technologies)
- [Getting Started](#Getting-Started)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contact](#Contact)
- [Acknowledgments](#Acknowledgments)
- [Reflections](#Reflections)
- [Project Spec](#Project-Spec)


## About The Project
---

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Technologies
---
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You can find the project [here](https://github.com/emilyjmiles/fitlit-group-project.git) and follow the instructions below to get started.
  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This app will display the hydration and sleep information for a given user. Charts are used to display this information as well as just text.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing
---
We tested our code using [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/).

<!-- CONTACT -->
## Contact
[![Contributors][contributors-shield]][contributors-url]

Emily Miles - [LinkedIn](https://www.linkedin.com/in/emilyjmiles/) - ms.emily.j.miles@gmail.com

Hannah Celemen - [LinkedIn](https://www.linkedin.com/in/hannah-celemen/) - hclaire.celemen@gmail.com

Cole Anthony - [LinkedIn](https://www.linkedin.com/in/cole-edwin-anthony/) - cole.edwin.anthony@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

These resources helped us with this project:

[![MDN Docs][MDN-shield]][MDN]
[![Chart.js][Charts]][charts-url]
[![Chart.js-tutorials][youtube-shield]][charts-youtube-link]
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://https://turing.edu/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections


## Project Spec
The project spec can be found [here](https://frontend.turing.edu/projects/Fitlit-part-one.html)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[youtube-shield]: https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white
[charts-youtube-link]: https://www.youtube.com/c/ChartJS-tutorials
[MDN-shield]: https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white
[MDN]:https://developer.mozilla.org/en-US/
[charts-url]: https://www.chartjs.org/docs/latest/
[Charts]: https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white
[contributors-shield]: https://img.shields.io/badge/Contributors-3-2ea44f?style=for-the-badge
[contributors-url]: https://github.com/emilyjmiles/fitlit-group-project/graphs/contributors

[product-screenshot]: images/screenshot.png
