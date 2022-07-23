const Employee = require('./employee');

const internQuestions = [
  {
    type: 'input',
    message: 'What is the interns name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is the interns id?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is the iterns email?',
    name: 'email'
  },
  {
    type: 'input',
    name: 'school',
    message: "What school does the intern attend?"
} 
]



class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school
  }
  
  getSchool(){
    return this.school
  }

  getRole() {
    return "Intern"
  }

}

module.exports = {Intern, internQuestions}