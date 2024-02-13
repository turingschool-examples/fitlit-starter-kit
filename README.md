# Fitlit

[Try it out!](https://edwin-chalmers.github.io/fitlit/)

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

## Reflections

  ### Wins
    One of our most significant achievements in the FitLit project was the successful implementation of charts that dynamically populate with user information. By utilizing Chart.js, we were able to create visually appealing graphs and charts that update in real-time as new data is fetched from the server. This dynamic visualization of activity data, such as steps taken, water consumption, and sleep patterns, not only provides users with a clear and engaging overview of their health metrics but also encourages deeper engagement with their data. The ability to see their progress represented graphically allows users to easily identify trends, set goals, and monitor their achievements over time. This win significantly contributes to the overall user experience, making the FitLit dashboard not just a tool for tracking health metrics but also a motivational platform for users to improve their daily habits and overall well-being.

  ### Challenges
    Implementing network requests within the FitLit project presented a unique set of challenges that required careful consideration and strategic problem-solving. Managing the timing and dependencies between different data fetches was critical, as the dashboard's functionality heavily relied on the successful loading and synchronization of user activity data. This complexity was compounded by the need to gracefully handle potential errors or delays in network responses, ensuring the user experience remained unaffected by underlying data fetching processes. Moreover, integrating these network requests with the existing application logic and user interface updates demanded a deep understanding of promises and **Promice.all**.

  ### Up Next
    In the future, we aim to implement a more comprehensive error catching strategy to enhance the robustness and user experience of the FitLit project. Recognizing that seamless error handling is crucial for maintaining application stability and user trust, our goal is to develop a layered approach to catch and manage errors at various points in the application's workflow. This includes network request failures, data parsing issues, and unexpected user input. Additionally, we intend to implement custom error handling functions that can intelligently respond to different types of errors, guiding users with appropriate messages or corrective actions. By proactively managing errors and providing clear, helpful feedback, we can minimize user frustration and ensure that the FitLit dashboard remains a valuable tool for tracking and improving personal health metrics.

## Screenshots

## Contributors
- Edwin Chalmers : edwinchalmers@gmail.com : [github.com/edwin-chalmers](https://github.com/edwin-chalmers)
- Tom Coney : tom.ce.coney@gmail.com : [github.com/tconey23](https://github.com/tconey23)
- Theotis McCray : tlmccraycray@gmail.com : [github.com/Virulencies](https://github.com/Virulencies)