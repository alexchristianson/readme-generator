// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions for installation if any: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give instuctions for the use of this project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for this project: ',
        choices: ['Apache',
         'Mozilla', 
         'MIT', 
         'GNU',
         'Boost',
         'None'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What are the guidelines for contributing?"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give instructions on how to run tests if any?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Give instructions on how to reach you with questions: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    }
];

function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFile("./dist/README.md", generateMarkdown(data), err => console.log(err));
        console.log("Your README was created!")
    }); 
};

// Function call to initialize app
init();