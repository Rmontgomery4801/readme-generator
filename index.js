// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username'
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your GitHub profile'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter the name of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description about your project'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which license should your project have? (Choose one)',
    choices: ['Apache 2.0', 'MIT', 'GPLv2', 'ISC']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions to run your project'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information of the repository for the user'
  },
  // {
  //   type: 'input',
  //   name: 'tests',
  //   message: 'Enter commands that should be used to run tests'
  // },
  {
    type: 'input',
    name: 'contribute',
    message: 'Enter any guidelines on how users can further contribute to your repository'
  }
];

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
      .then((data) => {
          const markDown = generateMarkdown(data)
          fs.writeFile('generated-README.md', markDown, function(err) {
              if (err) {
                  console.log('File could not be created', err)
              } else {
                  console.log('New README.md file created!')
              }
          })
      })
      .catch((error) => {
          console.log(error)
      })
} 

// Function call to initialize app
init();
