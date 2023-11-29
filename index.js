// TODO: Include packages needed for this application
const package = require('./package.json')
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input' ,
        name: 'title' ,
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions:'
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const addToReadme = `
# ${answers.title}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}
`

    fs.writeFile('README.md', addToReadme, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('README.md file generated successfully!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers);
    })
}

// Function call to initialize app
init();
