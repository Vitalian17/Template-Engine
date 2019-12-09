const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.title = "intern";
        this.school = school
    }
    getSchool() {
        return (this.school);
    }
    gtRole() {
        return ("intern");
    }
}
module.exports = Intern;