// Installing required dependancies 
const inquirer = require("inquirer")
const table = require("console.table")
const input = require("./input.js");
const mysql = require("mysql")
const { addAdepartment } = require("./input.js");


appStart()
// connecting to the database
const connection = mysql.createConnection({
    host:"localhost", 
    user: "root",
    password: "!DhZ96jmp77",
    database: "employee_managmentdb"
})
// Starting the application
async function appStart(){
    const selectedOption = await inquirer.prompt(input.firstQuestions)
    // Switch cases for different user options\
    switch (selectedOption.first) {
        case "view all departments":
            showDepartments();
            break;
        
        case "view all roles":
            showRoles();
            break;

        case "view all employees":
            showEmployees();
            break;

        case "add a department":
            addDepartment();
            break;

        case "add a role":
            addRole();
            break;

        case "add an employee":
            addEmployee();
            break;

            case "update an employee role":
                updateEmployee();
                break;
    
        default:
            connection.end();
    }
}

// function for adding a department
function addDepartment(){
const departmentInfo = inquirer.prompt(addAdepartment)
connection.query("insert department name", {
    name: departmentInfo.departmentName 
},
function(err){
    if(err) throw err;
    console.log("department added")
    appStart()
})
}


// function for adding a role
function addRole(){
    const roleInfo = inquirer.prompt(addArole)
    connection.query("insert role name", {
        name: roleInfo.roleName,
      salary: roleInfo.roleSalary,
      department: roleInfo.roleDepartment
    },
    function(err){
        if(err) throw err;
        console.log(" role added")
        appStart()
    })
    }

    // function for adding an employee
function addEmployee(){
    const employeeInfo = inquirer.prompt(addAnemployee)
    connection.query("insert employee info", {
        f_name: employeeInfo.firstName,
      l_name: employeeInfo.lastName,
      role_name: employeeInfo.roleName,
      managerName: employeeInfo.managerName,
    },
    function(err){
        if(err) throw err;
        console.log(" role added")
        appStart()
    })
    }


       // Updating an employee
function updateEmployee(){
    connection.query("update employee info", async()=> {
        const{
            e_name, e_role
        } 
        = inquirer.prompt([{
            type: "list", 
            message: "select the employee you want to update",
            name: "e_name",
            choices: ()=>{
            return emp.map((emp)=>emp.lastName)
        },
        },
        // To do employee role 
        {
            type: "list", 
            message: "select the new employee role",
            name: "e_role",
            choices: ()=>{
            return emp.map((emp)=>emp.r_id)
        }}
        
    ])
    connection.query("update employee SET ? WHERE ?",
    [{
        r_id: e_role,
    },
    {
        lastName: e_name
    },
],
function(err, table_data){
    if (err) throw err 
        console.table(emp)
        appStart()
    
}
)
})
}

//function for displaying all departments
function showDepartments(){
    connection.query("", function(err,table_data){
        if (err) throw err 
        console.table(table_data)
        appStart()
    })
}

// function to show employees
function showEmployees(){
    connection.query("", function(err,table_data){
        if (err) throw err 
        console.table(table_data)
        appStart()
    })
}
// function to show roles
function showRoles(){
    connection.query("", function(err,table_data){
        if (err) throw err 
        console.table(table_data)
        appStart()
    })
}
