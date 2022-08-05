const Employee = require('./employee');

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
   super(name, id, email)
   this.officeNumber = officeNumber
  }
    getName() {
    return this.name
  }
 
    getId() {
    return this.id
}

    getEmail() {
    return this.email
}
    getRole() {
    return 'Manager'
  }
    getOfficeNumber() {
    return this.officeNumber
  }
}
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




module.exports = {Manager, managerQuestions}
