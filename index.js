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
    message: "What is the project usage information?",
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
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// Function to generate README content based on user responses
function generateREADME(answers) {
  const licenseBadge =
    answers.license !== "None"
      ? `![License](https://img.shields.io/badge/license-${answers.license.replace(
          " ",
          "_"
        )}-blue.svg)\n`
      : "";

  return `
# ${answers.title}
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions, please reach out via email at ${answers.email}.

To view more projects, visit [${answers.github}](https://github.com/${answers.github}).
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
