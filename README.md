# FitLit

Tracking and encouraging healthy habits is more important than ever, and FitLit gives a fun, 80's vibe for viewing your personal, community, and friend fitness goals!

We've created displays to show information regarding a user (and their community) goals and data for:
 - steps
 - minutes active
 - stairs climbed
 - hydration
 - sleep during
 - sleep quality
 - and even a step challenge between the user and their friends!
## Setup

This site is deployed on [GitHubPages](https://srslie.github.io/fitlit/src/index.html).

If you would like to look at the code itself or run our test suites:
  1. Clone down this repo with  `git clone https://github.com/srslie/fitlit.git [what you want to name the repo]`
  2. Change into the directory and run `npm install` to install project dependencies.
  3. Run `open src/index.html` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
  4. Run ```npm test [name of the test you want to run]``` to see our tests for any of the Class js files.

## Contributors

This site was coded by [Connie Hong](https://github.com/conconartist) and [Alice Ruppert](https://github.com/srslie).

[Project spec](http://frontend.turing.io/projects/fitlit.html) and design by [Turing School Staff](https://turing.io/)

Special thanks to our mentors [Scott Schipke](https://github.com/sschipke) and [Tiffany Bacher](https://github.com/tiffbacher).

## Technologies

During this project we gained experience with the following technologies:
- ES6 Javascript
- Testing with Mocha and Chai
- Linting with ESLint
- Chart.js
- Semantic HTML
- Responsive CSS with Media Queries
- Wave, ColorBlind, and ARIA Accessibility
- Git workflow using GitHub Issues and Project Kanban Board
- Mira MindMapping and WireFraming for Planning
- 
## Future Iterations

This project helped us practice working asynchronously with a partner on a project in a relatively short time-frame, and honed our communication and resourcefulness.

However, if time permitted, we would've loved to accomplish more. 

While no future work is planned on this project, we kept in mind ideas for building this out for further functionality.

Ideas for future iterations:
 - DRY up the code, specifically:
   - Make a helper function to populate the instances of the graphs. We did have a set of ```getData()``` and ```chartIt()``` helper functions to attempt to do this, where we created some objects that we then used to access the x and y axes, and the canvas area. However, since we had type and styling desires, we didn't have time to fully implement this.
   - Add a generic ```findAverage``` function as we saw a lot of code similiar to:
  ```  findAverage(date, whateverRepository, propertyName) {
    const allObjectsForDate = whateverRepository.filter(object => object.date === date)
    const total = allObjectsForDate.reduce((total, object) => total + object[propertyName], 0)

    return Math.round(total / allObjectsForDate.length)
  }
  ```
  - This generic averages function did not get implemented because we didn't quite know where to place it, in which class or to use as a pure function in scripts.js. Plus changing all the tests and calls for this was more time consuming than we were able to bite off.
  - We considered moving the ```parseInt(date.split('/').join(''))``` into the constructor of the Actvity, Sleep, and Hydration Classes, as well as the global date setting functions, which would make our functions filtering by date more streamlined and reduce repition. However if we did that, we would then need to convert the numbers back into dates when displaying the graphs.  We might look into that for a future iteration.
- We would like to add an ability to log in as a different user to see their data.
- We would like to have an administrator view of all user data and trends.
- We would like to display the friend step challenge graph more dynamically, as it's hard-coded for the current user right now. 
  - If we had time, we would've made a function that went through the array of user.friendsand populated an object, which would then get passed into the new Chart() to populate a dataSet. However, we choose to create a nicer display of the data we had as an example of how we would like to render this information were it more dynamic. If we had time, we would ensure this was functional for any user.
- This app lends itself to both mobile app development and hooking it up to a fitness tracker. While we don't currently have the knowledge to do that, we would look at that down the line as a natural progression of this project, and until then we would like to add manual input forms for the users to update any of their stats for the day and/or their profile information.
- While we kept accessibility in mind, we're new to the technology and can see areas of improvement for screen readers accessing our data, and we're excited to learn and grow more as developers to ensure we're reaching all audiences!

## In Action:

INSERT SCREENSHOTS/GIFS HERE