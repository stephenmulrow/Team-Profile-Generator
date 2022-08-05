const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./lib/generateHTML')
const Employee = require("./lib/employee");
const { Intern, internQuestions } = require('./lib/intern')
const { Engineer, engineerQuestions} = require('./lib/engineer')
const { Manager, managerQuestions} = require("./lib/manager")

const employeeArr = []



function init() {
  inquirer.prompt(managerQuestions)
  .then((answers) => {
    answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employeeArr.push(answers)
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
      employeeArr.push(answers)
      return newEmployee();
  })
}



const internArr = () => {
  inquirer.prompt(internQuestions)
  .then(( answers ) => {
      answers = new Intern(answers.name, answers.id, answers.email, answers.school)
      employeeArr.push(answers);
      return newEmployee();
  })
}


function buildTeam(employeeArr){
  fs.writeFile("./dist/index.html", generateMarkdown(employeeArr) , (err) => 
  (err) ? console.error(err) : console.log("Success"))
}


init();


