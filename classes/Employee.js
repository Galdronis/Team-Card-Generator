class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }

    getRole() {
        return "Employee"
    }
}

// const test = new Employee('Nich', 1, 'nich.oettinger@gmail.com', "CEO")
// console.log(test)

module.exports = Employee