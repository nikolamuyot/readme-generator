// Import the inquirer package
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  // Add more questions as needed
];

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // Here you will call a function to generate your README
    // using the 'answers' object
  });
}

// Function call to initialize the application
init();
