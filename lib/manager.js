const Employee = require('./employee');

const managerQuestions = [
      {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'name'
      },
      {
        type: 'input',
        message: 'What is the team managers id?',
        name: 'id'
      },
      {
        type: 'input',
        message: 'What is the team managers email?',
        name: 'email'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }

]



class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber
  }
     getRole() {
    return 'Manager'
  }
  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = {Manager, managerQuestions}