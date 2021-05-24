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
    console.log(err);
    throw err;
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
  //console.log("add department function called");

  inquirer
    .prompt({
      type: "input",
      message: "Enter department name:",
      name: "newDepartment",
    })
    .then((res) => {
      connection.query("INSERT INTO department SET ?", {
        name: res.newDepartment,
      });

      console.log("Department added");

      start();
    });
}

//add role function
function addRole() {
  //console.log("add role function called");

  inquirer
    .prompt(
      {
        type: "input",
        message: "Enter job title:",
        name: "newTitle",
      },
      {
        type: "input",
        message: "Enter annual salary:",
        name: "newSalary",
      },
      {
        type: "list",
        message: "Enter department:",
        name: "dept",
        choices: function () {
          //store current list of departments in this array
          var departmentArray = [];

          //push each value from the name column of the department into departmentArray which will populate list choices.
          for (var i = 0; i < response.length; i++) {
            departmentArray.push(response[i].name);
          }

          return departmentArray;
        },
      }
    )
    .then((res) => {
      var dept;
      for (var i = 0; i < response.length; i++) {
        if (response[i].name === res.dept) {
          dept = response[i].id;
        }
      }
      connection.query("INSERT INTO role SET ?", {
        title: res.newTitle,
        salary: res.newSalary,
        department_id: dept,
      });
      console.log("Role added");
      start();
    });
}

//add employee function
function addEmployee() {
  //console.log("add employee function called");
  start();
}

//view department function
function viewDepartment() {
  //console.log("add department function called");

  connection.query(`SELECT * FROM  department`, (err, res) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.table(res);
      start();
    }
  });
}

//view role function
function viewRoles() {
  //console.log("view role function called");

  connection.query(
    `SELECT role.id, title, name, salary FROM role INNER JOIN department ON role.department_id = department.id ORDER BY id ASC`,
    function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.table(res);
        start();
      }
    }
  );
}

//view employee function
function viewEmployees() {
  //console.log("view employees function called");
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.id = employee.role_id LEFT JOIN employee manager ON employee.manager_id = manager.id ORDER BY employee.id ASC",
    (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.table(res);
        start();
      }
    }
  );
}

//update employee role function
function updateRole() {
  //console.log("update role function called");
  start();
}
