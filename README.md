# FitLit 

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Contributors

Brandy Mello <br>
Amanda Sierra Lopez

### Contributor comments
<em><small>I really enjoyed this project. It was a challenge, but I learned much more from this project than from any of other project at Turing. I would like to go back and take some time to work on it further. It was a simulation of a current useful and viable application on the market today and I appreciated working on a relevant product. -Brandy Mello</small></em>


## Objectives

This Turing Mod 2 paired project was designed for students to utilize and practice skills in writing tests with Mocha and Chai, transitioning in JavaScript from ES5 to ES6 syntax while creating classes and methods to access data from several datasets, and using jQuery to append the data to the DOM. The project was additional practice in HTML and CSS. We also incorporated charts.js into our project. There was no comp provided.

## FitLit

FitLit simulates a health tracker. The site iterates through data to calculate various health metrics, goals, and comparisons for each user being accessed onload and their friends. Check it out here:  https://brandymello.github.io/fitlit/

![Image description](link-to-image)

### Issues
1. We would like to have additional hover buttons for each of the data bars on the left side of the page so that they present and respond in a similar fashion to the current graphs and buttons at the bottom of the page.
1. We also had an issue with one of the functions we reused several times in that it was behaving differently. We were using the array prototype method slice to put a week's worth of values in an array and it was continually returning a different number of values eventhough we expected seven days. One would return 9, one 7, and most recently one returned 5. It is something we want to look into and find out why. We suspect it may have something to do with the dataset dates, because of a previous issue that has sice been resolved.
