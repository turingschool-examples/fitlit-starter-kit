<a name="readme-top"></a>

# FitLit

## Table of Contents
- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)
- [Reflections](#reflections)

---

## About The Project
<p align="center">
  <img width="600" alt="FitLit logo" src="https://user-images.githubusercontent.com/94808267/188324820-0027eff1-424d-4e2c-8dd9-13404c3ed30d.png">
</p>

FitLit is a health tracking application. This program can help you set healthy habbits as it tracks your hydration, sleep, and activity. You can view your daily and weekly progress! You can set goals that will improve the quality of your sleep and overall physical health. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec
FitLit is an application built in week 10 of the [Turing School of Software and Design](https://turing.edu/) front-end engineering program. The goals of this [group project](https://frontend.turing.edu/projects/Fitlit-part-one.html) were to:

* Create a robust testing suite using TDD
* Generate user data and charts through data manipulation
* Utilize Lighthouse and Wave for accessibility
* Make network requests to API endpoints to retrieve and manipulate data
* Implement third party packages


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![ChartJS](	https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
# Getting Started
You can find the project [here](https://github.com/emilyjmiles/fitlit-group-project.git) and follow the instructions below to get started.
  

### Installation
1. Clone the repo
   ```sh
   git clone git@github.com:emilyjmiles/fitlit-group-project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm start
   ``` 
3. Enter the following url in your browser: http://localhost:8080/
4. Explore the website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
* The program displays user data through text and charts when the page loads
<!-- <img width="1428" alt="Screen Shot 2022-09-04 at 12 14 24 PM" src="https://user-images.githubusercontent.com/94808267/188327742-03ee3310-d07a-498b-8213-637de49ab7ef.png"> -->

| Destktop View | Mobile View |
|---------------|-----------------|
<img src="https://media.giphy.com/media/6QMupVufGnhGwmbZpj/giphy.gif" width=100%>|<p align="center"><br/><img src="https://media.giphy.com/media/5D3KvzWgqlYy7nBR5x/giphy.gif" width=77%></p>

New feature ideas: 
- [ ] During Part Two of the project:
    - [ ] The activity box will contain a chart that displays the user's daily activity.
    - [ ] Add a weekly graph of the users activity.
    - [ ] A user will be able to add data to their hydration, sleep, or activity.
    - [ ] A user will be able to see the comparison of their data to all the users average data.
- [ ] The friends buttons will be clickable to display their information instead of the user that appeared when the page loaded. 
- [ ] The friends hydration and sleep information can be displayed in a box as an average between them.
- [ ] The user will be able to toggle between different sets of charts.
- [ ] The user will be able to change the weekly data projected in the charts.
- [ ] The user details is hidden and viewable after a click on their profile icon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing
We utilized TDD to create our project using [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
[![Contributors][contributors-shield]][contributors-url]

Emily Miles - [LinkedIn](https://www.linkedin.com/in/emilyjmiles/) - ms.emily.j.miles@gmail.com

Hannah Celemen - [LinkedIn](https://www.linkedin.com/in/hannah-celemen/) - hclaire.celemen@gmail.com

Cole Anthony - [LinkedIn](https://www.linkedin.com/in/cole-edwin-anthony/) - cole.edwin.anthony@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
The following resources helped us build this project:

[![MDN Docs][MDN-shield]][MDN]
[![Chart.js][Charts]][charts-url]
[![Chart.js-tutorials][youtube-shield]][charts-youtube-link]
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://turing.edu/)
[![Chai Assertion Library](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)](https://www.chaijs.com/api/bdd/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections
We worked on making the UI/UX design of our page to be responsive to ensure that it is easy to navigate and viewable on any device. We wanted our page to be user accessible by carefully choosing the font and color scheme, as well as using semantic html for screen reader accessibilty. 

In Part 1, we learned how to retrieve data from provided Endpoints to create our bar charts. It required a lot of research and  how to properly configure them to look uniform with our page. We hope to project user data in other chart forms that will more concisely show the user their progress.

At the start of this project, we were all concerned about the size and complexity of the work that needed to be done. To our surprise, the experience was much smoother and less stressful than we had anticipated. We feel this was due to our continuous communication and supportive teamwork throughout the project. 

In Part 2, we learned how to work with more clomplex data sets, how to post data to a server and we built upon our knowledge of how to display the data we worked with in charts. As our styling was mostly finished by part 1, this time for part 2 was mostly spent improving functionality and making sure our validations were working properly.

We continued our excellent communication and support of one another to enhance our working conditions. We are all very proud of the work we did with this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
