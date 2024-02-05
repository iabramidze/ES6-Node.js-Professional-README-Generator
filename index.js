const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: "input",
        name: "title",
        message: "Name of your project:"
    },

    {
        type: "input",
        name: "description",
        message: "Description of your project:"
    },

    {
        type: "list",
        name: "license",
        message: "Choose license:",
        choices: ["APACHE2.0", "GNU3.0", "MIT", "Boost1.0", "BSD2", "BSD3", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "How to install dependencies:",
        default: "npm i"
    },

    {
        type: "input",
        name: "tests",
        message: "How to run tests:"
    },

    {
        type: "input",
        name: "usage",
        message: "Usage:"
    },

    {
        type: "input",
        name: "contributors",
        message: "Contributors:"
    },

    {
        type: "input",
        name: "github",
        message: "Your GitHub username:"
    },

    {
        type: "input",
        name: "email",
        message: "Your email:"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log("Generating results...");
        writeToFile("./utils/README-example.md", generateMarkdown({ ...userInput }));
    })
}

// function call to initialize program
init();
