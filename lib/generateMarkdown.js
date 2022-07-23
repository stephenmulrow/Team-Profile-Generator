function generateMarkdown(answers){
  return `<h1>${answers.getName()}</h1>
  <h2>${answers.id}</h2>
  <a>${answers.email}</a>
  <a>https://github.com/${answers.username}</a>
  <h3>${answers.officeNumber}`
}

const manager = managerData => {
  return `
  <div id="${managerData.getRole()}-card" class="box card">
    <div class="box name-role manager-name">
      <h2>${managerData.getName()}</h2>
      <h3>Role: ${managerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
`}

module.exports = generateMarkdown;