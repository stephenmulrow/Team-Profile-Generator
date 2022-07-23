const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./lib/generateMarkdown')
const Employee = require("./lib/employee");
const {Engineer, engineerQuestions} = require("./lib/engineer")
const {Manager, managerQuestions} = require("./lib/manager")
const {Intern, internQuestions} = require("./lib/intern");





function init() {
  inquirer.prompt(managerQuestions)
  .then((answers) => {
    answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    return newEmployee()
  })
}

function newEmployee(){
  inquirer.prompt(
  {
    type: 'list',
    message: 'What role would you like to add?',
    choices: [{name: 'Engineer', value: 'Engineer'}, 'Intern', 'I do not wish to add another role'],
    name: 'newEmployee'
  } 
  )
  .then((answers) => {
    if(answers.newEmployee === 'Engineer')
    return engineerQuestions2()
  
    if(answers.newEmployee === 'Intern')
    return internArr()

    if(answers.newEmployee === 'I do not wish to add another role')
    return buildTeam()

  })
}

function engineerQuestions2() {
  inquirer.prompt(engineerQuestions)
  .then(( answers ) => {
      answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
   
      return newEmployee();
  })
}

function internArr() {
  inquirer.prompt(internQuestions)
  .then((answers) => {
    answers = new Intern(answers.name, answers.id, answers.email, answers.school)

    return newEmployee()
  })
}


function buildTeam(){
fs.writeFile("./dist/index.html", generateMarkdown(answers), Employee , (err) => 
(err) ? console.error(err) : console.log("Success"))
}

init();


// const questions = [
//   {
//     type: 'input',
//     message: 'What is the team managers name?',
//     name: 'names'
//   },
//   {
//     type: 'input',
//     message: 'What is the team managers id?',
//     name: 'position'
//   },
//   {
//     type: 'input',
//     message: 'What is the team managers email?',
//     name: 'email'
//   },
//   {
//     type: 'input',
//     message: 'What is the team managers office nummber?',
//     name: 'username'
//   },
//   {
//     type: 'list',
//     message: 'Which type of team member would you like to add?',
//     choices: ['Engineer', 'Intern'],
//     name: 'newTeamMember'
//   }
// ]

// function init() {
//   inquirer.prompt(questions)
//   .then((answers) => {
// })
// };

// init();
