const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }

  getGitHub() {
    return this.github
  }

  getRole() {
    return "Engineer"
  }

}

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the engineers name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is the engineers id?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is the engineers email?',
    name: 'email'
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineers github username?"
} 
]





module.exports = {Engineer, engineerQuestions}
