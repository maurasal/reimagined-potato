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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const addToReadme = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;

    fs.writeFile('User-Created-Readme/UserREADME.md', addToReadme, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('UserREADME.md file generated successfully!');
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
