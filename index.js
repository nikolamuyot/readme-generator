// Import required packages
const inquirer = require("inquirer");
const fs = require("fs");

// Questions array for inquirer prompts
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
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process:",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
];

// Function to generate README content based on user responses
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}
`;
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);

    // Write the README content to a file
    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) {
        console.error("An error occurred:", err);
        return;
      }
      console.log("README.md has been generated!");
    });
  });
}

// Call the init function to start the application
init();
