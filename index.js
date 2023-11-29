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
    }
    
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const addToReadme = `
# ${answers.title}`

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
