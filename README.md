# Fitlit

[Try it here!](https://edwin-chalmers.github.io/fitlit/)

## About
FitLit is a dynamic and interactive dashboard project designed to emulate the functionality of activity tracking apps like Fitbit or Strava. The core objective of this project is to provide users with a comprehensive view of their personal activity data, including steps taken, water consumption, sleep patterns, and more, over various time frames. This project is executed with a focus on several key goals:

  - Data Manipulation: Utilize object and array prototype methods to effectively manipulate user activity data.
  - User Interface: Develop a user-friendly interface that clearly displays information, making it accessible and easy to understand.
  - Testing: Implement a thorough testing suite using Test-Driven Development (TDD) to ensure code reliability and functionality.
  - Network Requests: Make network requests to fetch data, providing a real-world application scenario and dynamic user experience.
  - Collaboration: Work collaboratively within a team to ensure all members contribute meaningfully, with a professional approach to project management and communication.

## Install

1. Check Node.js Installation: 
    * Ensure you have Node.js installed on your computer. If not, download and install it from the official Node.js website.

2. Clone the Repository: 
    * Clone the FitLit repository to your local machine by running the following command in your terminal:
```
git clone <repository-URL>
```
3. Navigate to Project Directory:

    * Change into the cloned project directory with:
```
cd FitLit
```
4. Install Dependencies:

    * Install all necessary dependencies by running:
```
npm install
```
5. Start the Application:

    * Launch the application by running:
```
npm start
```
6. Explore FitLit:
    * You should now see the FitLit dashboard loaded in your browser, ready for you to explore the features and functionality.


## Tech
  - Jacascript ES6+
  - HTML
  - CSS
  - Webpack
  - Mocha and Chai
  - Fetch API
  - Git and GitHub
  - chart.js

## Reflections

  ### Wins
One of our most significant achievements in the FitLit project was the successful implementation of charts that dynamically populate with user information. By utilizing Chart.js, we were able to create visually appealing graphs and charts that update in real-time as new data is fetched from the server. This dynamic visualization of activity data, such as steps taken, water consumption, and sleep patterns, not only provides users with a clear and engaging overview of their health metrics but also encourages deeper engagement with their data. The ability to see their progress represented graphically allows users to easily identify trends, set goals, and monitor their achievements over time. This win significantly contributes to the overall user experience, making the FitLit dashboard not just a tool for tracking health metrics but also a motivational platform for users to improve their daily habits and overall well-being.

  ### Challenges
Implementing network requests within the FitLit project presented a unique set of challenges that required careful consideration and strategic problem-solving. Managing the timing and dependencies between different data fetches was critical, as the dashboard's functionality heavily relied on the successful loading and synchronization of user activity data. This complexity was compounded by the need to gracefully handle potential errors or delays in network responses, ensuring the user experience remained unaffected by underlying data fetching processes. Moreover, integrating these network requests with the existing application logic and user interface updates demanded a deep understanding of promises and **Promice.all**.

  ### How the new feature was handled
In developing a new feature for the FitLit project, our team conducted a brainstorming session to identify potential enhancements. We decided to add a drag and drop section for average user statistics, along with a 'select user' function that includes fuzzy search for finding specific user stats. These features were developed to provide straightforward mechanisms for users to interact with and access data, aiming to improve functionality and user experience without excessive complexity. The implementation process focused on ensuring these additions were integrated smoothly, enhancing the app's utility.

  ### What was done to address accessibility
In the development of the FitLit project, we prioritized accessibility to ensure an inclusive user experience, implementing keyboard navigation, testing with colorblind extensions for visual clarity, and achieving near-perfect scores in "Lighthouse" and "WAVE" accessibility audits. Our efforts extended to the use of semantic HTML and ARIA tags to enhance readability for screen readers and navigability for users with assistive technologies. These measures underscore our commitment to making FitLit universally accessible, enabling all users to engage with their health data effectively and comfortably, thereby fostering an environment of inclusivity and empowerment.

  ### How usability testing was implemented
Usability testing for the FitLit project was implemented through a structured, user-centric approach to ensure an intuitive and engaging user experience. We started the process with a diverse group of participants, ranging from tech-savvy individuals to those with minimal digital interaction, to cover a wide spectrum of user types. Data collected from these sessions was analyzed to identify common usability issues, user needs, and areas for improvement. Insights gained from this testing were implemented into the design and development processes, enhancing the overall usability of the FitLit project.

  ### Up Next
In future iterations, we aim to implement a dynamic chart system that enhances user interactivity and data exploration capabilities. This advanced system will empower users to tailor their data visualization experience by allowing them to select the chart type that best represents the information they wish to analyze. Users will have the flexibility to compare any set of data, enabling them to uncover unique insights and patterns by juxtaposing different data metrics side by side. Additionally, the system will feature a customizable time frame selection, granting users the ability to specify the period over which their data is sampled. This level of customization and control ensures that users can derive meaningful conclusions from their data, tailored precisely to their analytical needs and temporal interests, thereby maximizing the utility and accessibility of data visualization.

## Screenshots
<img width="1407" alt="image" src="https://github.com/edwin-chalmers/fitlit/assets/149631946/c8ae73c4-4ab5-4201-94e1-c5ca2a88c256">
<img width="1407" alt="image" src="https://github.com/edwin-chalmers/fitlit/assets/149631946/e9f605f3-a010-4e2f-954b-379746f5fd73">

## Project Board
[See it here!](https://github.com/users/edwin-chalmers/projects/1)


## Contributors
- Edwin Chalmers : edwinchalmers@gmail.com : [github.com/edwin-chalmers](https://github.com/edwin-chalmers)
- Tom Coney : tom.ce.coney@gmail.com : [github.com/tconey23](https://github.com/tconey23)
- Theotis McCray : tlmccraycray@gmail.com : [github.com/Virulencies](https://github.com/Virulencies)
