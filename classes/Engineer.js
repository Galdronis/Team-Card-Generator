const Employee = require ("./Employee")


class Engineer extends Employee {
    constructor(name, id, email, userName) {
        super(name, id, email, 'Engineer')
        this.userName = userName
    }
}

// const test = new Engineer('Nich', 2, 'gmail@gmail.com', 'Galdronis')
// console.log(test)

module.exports = Engineer