// Packages needed for application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Inquirier questions
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: "What is github username?",
      },      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'repo',
        message: "What is your project's repo?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose an appropricate license for this project.',
        choices: [
            'Mozilla Public License 2.0', 
            'Open Software License 3.0', 
            'Apache 2.0', 
            'MIT', 
            'None'
        ],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Describe how to run a test on this project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
      },
      {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators',
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Where is this application deployed at?',
      },
])

// Writes data to readme.md
.then((data) => {
    fs.writeFile('readme.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("ReadMe Generated!"))
})