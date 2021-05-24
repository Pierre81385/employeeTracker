var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "company_db",
});

connection.connect((err) => {
  if (err) {
    throw err;
    console.log(err);
  } else {
    start();
  }
});

//user input to select function to runzxza
function start() {
  inquirer
    .prompt({
      type: "list",
      message: "What do you want to do?",
      name: "start",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Role",
        "Quit",
      ],
    })
    .then((res) => {
      switch (res.start) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "Quit":
          console.log("Goodbye!");
          connection.end();
          break;
      }
    });
}

//add department function
function addDepartment() {
  console.log("add department function called");
  start();
}

//add role function
function addRole() {
  console.log("add role function called");
  start();
}

//add employee function
function addEmployee() {
  console.log("add employee function called");
  start();
}

//view department function
function viewDepartment() {
  console.log("add department function called");
  start();
}

//view role function
function viewRole() {
  console.log("view role function called");
  start();
}

//view employee function
function viewEmployees() {
  console.log("view employees function called");
  start();
}

//update employee role function
function updateRole() {
  console.log("update role function called");
  start();
}
