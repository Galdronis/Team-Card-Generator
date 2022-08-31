const Employee = require ("./Employee")


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern')
        this.school = school
    }
}

// const test = new Engineer('Nich', 2, 'gmail@gmail.com', 'Galdronis')
// console.log(test)

module.exports = Intern