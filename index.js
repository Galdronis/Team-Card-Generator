const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require("./classes/Employee.js")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")
employeeBucket = []

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the Manager name',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Enter Manager ID',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'Enter Manager email',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Enter Manager office number',
            name: 'managerNumber'
        }
    ]).then ((dataObject) => {
        // console.log(dataObject)
        const {managerName, managerID, managerEmail, managerNumber} = dataObject
        const manager = new Manager(managerName, managerID, managerEmail, managerNumber)
        employeeBucket.push(manager)
        // console.log(employeeBucket)
        anotherEmployee()
    })
}
const anotherEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to create another an engineer, an intern, or would you like to finish your team?',
            choices: [
                'Create engineer',
                'Create intern',
                'My team is finished',
            ],
            name: 'continue'
        }
    ]).then((answer) => {
        if (answer.continue === 'Create engineer') {
            createEngineer()
        } else if (answer.continue === "Create intern") {
            createIntern()
        }
    })
    
        
}
const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Engineer name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'Enter Engineer ID',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'Enter Engineer email',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'Enter Engineer Github username',
            name: 'userName'
        }
    ]).then ((dataObject) => {
        // console.log(dataObject)
        const {engineerName, engineerID, engineerEmail, userName} = dataObject
        const engineer = new Engineer(engineerName, engineerID, engineerEmail, userName)
        employeeBucket.push(engineer)
        // console.log(employeeBucket)
        anotherEmployee()
    })
}

const createIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Intern name',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Enter Intern ID',
            name: 'internID'
        },
        {
            type: 'input',
            message: 'Enter Intern email',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Enter Engineer school',
            name: 'school'
        }
    ]).then ((dataObject) => {
        // console.log(dataObject)
        const {internName, internID, internEmail, school} = dataObject
        const intern = new Intern(internName, internID, internEmail, school)
        employeeBucket.push(intern)
        console.log(employeeBucket)
        anotherEmployee()
    })
}

init()