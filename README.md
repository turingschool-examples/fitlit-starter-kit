# Fitlit

![giphy](https://user-images.githubusercontent.com/63027000/113958315-183b3780-97de-11eb-9752-61b906b54b1d.gif)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Reflection](#reflection)
* [Authors](#authors)
* [Technologies](#technologies)

## Description
The objective of this pair project was to build out a fitness app that used object and array prototype methods to perform data manipulation and display data clearly on differently sized screens. We used provided example data for this project. The focus was being on data manipulation, class communication, writing DRY code, and TDD rather than an interactive webpage, so while there is little to interact with as a user on the page, there are multiple examples of data manipulation to view on the page.

Responsibilities were divided between project team members with Riley being primarily responsible for the JavaScript class building and TDD while Nichele was primarily responsible for the design and display of the page, including the HTML, CSS and displaying data to the DOM.

### Features
* The chart.js Third Party Library was used to render data in graphs on the web page to more easily see a user's step goal compared to others, water intake over a week, sleep quality data, and hours slept over a week.
* Not yet displayed to the DOM, there are class methods built in that manipulate data for a variety of purposes. It can calculate averages for water intake, sleep quality and hours slept. It can gather user information for any given day in regards to their hydration and sleep. It can calculate which users have above average sleep quality and it can calculate who on any given date clocked the most hours of sleep.


### Code Architecture
* The scripts.js file contains all of the app rendering functionality.
* The src directory contains all Javascript files having to do with class build and DOM manipulation while the testing files are in their own test directory.
* Within the src directory is a helpers directory containing files for helper methods which are used across multiple classes.


### Deployed At
* https://rmartin0717.github.io/fitlit/

![Screen Shot 2021-04-07 at 8 19 37 PM (2)](https://user-images.githubusercontent.com/63027000/113958749-d8c11b00-97de-11eb-93f0-4fd66edf81fc.png)

## Installation
1. Fork this repo
2. Clone down to your machine
3. Access cloned directory
4. Run npm install
5. Run `open index.html`


## Reflection
#### Riley's Reflection:

My goal going into this project was to build a strong foundation in using object and array prototype methods, develop comfort with implement ES6 classes that could communicate to each other, and become more proficient in implementing testing suites using TDD. Over the course of this project, I noticed opportunities to practice SRP when multiple classes oftentimes needed to be able to execute very similar methods. With the support of my mentor, I found a way to nest helper methods in a separate directory for each of the class files to access as needed. This really streamlined each of the classes and made them much more readable and organized while minimizing repetitive code. I am really proud of how DRY I was able to make my code as well as some of the sad path testing that I was able to implement.

Given more time on this project, there are several things I would like to address in the code that could make it better. I would like to write some more sad path testing and update the code to handle requests for data for days where this is no data stored. There is also currently an issue in which in order for the data to display to the DOM, there is an if conditional at the beginning of all files requiring exported functionality. Unfortunately, this particular line inhibits use of npm test. Everything is tested and passing, but as the code is currently written to include the if conditional in the main branch of the code file, it is difficult to run the tests. I would also like to make full use of the helper methods by using them to manipulate data pertaining to user activity, an interation that we did not reach in the twelve days we worked on this project.


#### Nichele's Reflection:

I had a few goals with this project. My desire was to continue developing an understanding of TDD and class structures within large applications, how they interact with one another, and how or why to use different JavaScript methods. I was also excited to be able to design a project from scratch. I'm very interested in design, as well as user experience and interaction, and found that this process was more challenging than expected.

There is a lot to think about when it comes to design. I learned several things throughout this process:
  * There is a lot to think about when it comes to what a user truly needs in an application, from both a usability and design perspective. This comes with challenges of its own as there is an endless variety of user needs and desired experiences.
  * Accessibility is a big part of designing for websites and applications
  * There is a lot to be said for simplicity in design
  * implementing packages in a project can introduce unexpected challenges

If I had more time to work on this project, I would like to adjust the design to be more flexible, easier to read, and fit better within the pages. I would approach the design with accessibility in mind first (mobile and accessible)!

* 🚧 Note that there is currently a bug in the GH deployment that is preventing several of the charts from displaying properly. If you clone the repo to your machine and `open index.html` in the terminal, the app should work properly 


## Authors
<table>
    <tr>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GH</td>
        <td> Nichele Dunn <a href="https://github.com/nichelicorn">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/63027000?v=4" alt="N. Dunn" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="./images/README/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./images/README/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./images/README/css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>
