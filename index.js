const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
{
    type: 'input',
    message: "Project Title:",
    name: "title"
},
{
    type: "input",
    message: "Description",
    name: "description"
},
{
    type: "input",
    message: "Installation Instructions:",
    name: "instructions"
},
{
    type: "input",
    message: "Usage Information:",
    name: "usageinfo"
},
{
    type: "input",
    message: "Contribution Guidelines:",
    name: "contribution"
},
{
    type: "input",
    message: "Test Instructions:",
    name: "test"
},
{
    type: "input",
    message: "Github Username:",
    name: "github"
},
{
    type: "input",
    message: "Email Address:",
    name: "email"
},
{
    type: "list",
    message: "License Options",
    name: "license",
    choices: ["MIT","ISC","Mozilla","Perl","IBM", "Apache", "No License"]
}];

function init (){
inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        newReadme(response)
    })
};


function newReadme(response){
    fs.writeFile(`./${response.title}.md`, generateMarkdown(response), (err) => err ? console.error(err) : console.log(`Successfully created ${response.title}.md`));
}

init();
