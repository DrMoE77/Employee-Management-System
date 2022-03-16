//Exporting all the questions
module.exports = {
    // First Questions
    firstQuestions: {
        type: "list", 
        message: "select the task you want to perform", 
        name:"first",
        choices: [
            "view all departments", 
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role"
        ]
    },
    
    // When add a department is selected
    addAdepartment: {
        type:"input",
        message: "enter the name of the department",
        name: "departmentName"
    },

    // when add a role is selected
    addArole:[ {
        type:"input",
        message: "enter the name of the role",
        name: "roleName"
    },
    {
        type:"input",
        message: "enter the salary for this role",
        name: "roleSalary"
    },
    { 
    type:"input",
    message: "enter the department for this role",
    name: "roleDepartment"

    }
    ],

    // when add an emplyee is selected
    addAnemployee: (roles, employees) => [
        {
            type:"input",
        message: "enter first name",
        name: "firstName"
        },
        {
            type:"input",
        message: "enter last name",
        name: "lastName"
        },
        {
            type:"list",
        message: "select the role for this employee",
        name: "roleName", 
        choices: roles
        },
        {
            type:"list",
        message: "enter manager name",
        name: "managerName",
        choices: employees
        }
    ],

    //when update an emplyee is selected
    updateEmployee: (employees, roles)=> [
        {
            type:"list",
        message: "select the employee you want to update",
        name: "updateEmployee",
        choices: employees
        },
        {
            type:"list",
        message: "select a new role for the employee",
        name: "updateEmployee",
        choices: roles
        }
    ]
}






