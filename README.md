# Quiz-App

## GitHup Pages Site
https://lwolbrink23.github.io/Quiz-App/ 


## Explanation

This Quiz App is a react native application that accepts user input from different questions, calculates the correct answers, and displays the results after the user completes the quiz. This app accepts an array of data pertaining to a prompt, type of question, and choices then displays the data in a format according to the type of question it is. This application uses React hooks to remember user input and React Native elements to display the information on the screen. 

There are five components used: Home.jsx, Question.jsx, Summary.jsx, Survey.jsx, and FinalPage.jsx, and each has a specific purpose. Every component can be rendered through App.js.

The Home page includes three fields for user input and the values saved in state are later passed into the other components as properties. The question page displays each question one by one. As the user clicks an answer, a button becomes enabled, and the user is able to move onto the next question, and each answer they click is saved in state. When the user completes all of their questions, they’re sent to the Summary component where all of the saved answers are displayed and the app calculates if they got a correct score or not. The user can also go to a Survey page where they can type a response and submit it to the application. After submitting the survey response, they can view their answer in the FinalPage component and can navigate back to the Home Screen if they wish.
