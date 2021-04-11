function Person(firstName: string, lastName: string) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
};

function Student(firstName: string, lastName: string, schoolName: string, grade: number) {
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person("Neal", "Noble");
Student.prototype.constructor = Student;
var std = new Student("James", "Bond", "XYZ", 10);

alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true
