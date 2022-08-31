const Employee = require ("./Employee")


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager')
        this.officeNumber = officeNumber
    }
}

// const test = new Manager('Nich', 1, 'gmail@gmail.com', 1)

// console.log(test)

module.exports = Manager