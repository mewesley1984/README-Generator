// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Please enter the title of the project',
    name: 'title'
    },
    {
    type: 'input',
    message: 'Please enter your GitHub username',
    name: 'github'
    },
    {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email'
    },
    {
    type: 'input',
    message: 'Please describe the project',
    name: 'description' 
    },
    {
    type: 'input',
    message: 'What are the steps to install your project?',
    name: 'installation'
    },
    {
    type: 'input',
    message: 'Provide instructions and examples for use',
    name: 'usage'
    },
    {
    type: 'input',
    message: 'Who did you work with on this project?',
    name: 'credits'
    },
    {
    type: 'list',
    message: 'Please select your license',
    name: 'license',
    choices: ['Apache','MIT','GPL','None']
    },
    
    

];


// TODO: Create a function to initialize app
function init() {  
    inquirer
     .prompt(questions).then(response => {
    const readMeFile = generateMD(response)
    fs.writeFile('./dist/README.md', readMeFile, (err) =>
    err ? console.error(err) : console.log('Success!')
     );  

})}

// Function call to initialize app
init();

// comment