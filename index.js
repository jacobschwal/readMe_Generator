// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for the user to answer
const questions = [
    {
        message:'What is the title of your project?',
        name:'title',
        type:'input',
    },
    {
        message:'What is a description of your project?',
        name:'description',
        type:'input',
    },
    {
        message:'What command should the user run to install dependencies?',
        name:'installation',
        type:'input',
    },
    {
        message:'What information should be known about your repository?',
        name:'usage',
        type:'input',
    },
    {
        message:'What command should the user use to run test?',
        name:'test',
        type:'input',
    },
    {
        message:'What should users or other devs know about contributing to the project?',
        name:'contribute',
        type:'input',
    },
    {
        message:'Does your project have a license?',
        name:'license',
        type:'list',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What is your github username?',
        name:'githubUser',
        type:'input',
    },
    {
        message:'What is your email?',
        name:'userEmail',
        type:'input',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};
// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'README.md';
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
