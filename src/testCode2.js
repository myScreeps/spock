class Name {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        console.log("this.first: " + this.first);
        console.log("this.last: " + this.last);

    }

    fullName(name) {
        get: fullName(); {
            console.log("1111this.last: " + this.last);

            return this.first + " " + this.last;
        }

        set: fullName(name); {
            var names = name.split(" ");
            this.first = names[0];
            this.last = names[1];
        }
    }
};


var myName = new Name("neal", "Noble");
console.log(JSON.stringify(myName));


const obj = {
    log: ['example', 'test'],
    get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
    }
}

console.log(obj.latest); // "test"


class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName; // validation could be checked here such as only allowing non numerical values
    }

    walk() {
        console.log(this._name + ' is walking.');
    }
}

// Person.prototype = {
//     /**
//      * @param {any} last
//      */
//     get lastName() {
//         return this._lastName + " test2";
//     },

//      set lastName(last) {
//         this._lastName = last.toUpperCase();
//     }

// }

Object.defineProperty(Person.prototype, "lastName", {
    set: function (val) {
        this._lastName = val.toUpperCase();
        return this._lastName;
        //   console.log("this._lastName: " + this._lastName);
    },

    get: function () {
        return this._lastName;

    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        this._fullName = this.name + " " + this._lastName;
        return this._fullName
    },
    enumerable: true,
    configurable: true
});



let bob = new Person('Bob');
bob.name = "neal";
bob.lastName = "Noble";
console.log(bob.name); // Outputs 'BOB'
console.log(bob.lastName); // Outputs 'BOB'
console.log(bob.fullName); // Outputs 'BOB'

function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
    return `${this.FirstName} ${this.LastName}`;
}
class Student {
    constructor(firstName, lastName, schoolName, grade) {
        Person.call(this, firstName, lastName);

        this.SchoolName = schoolName || "unknown";
        this.Grade = grade || 0;
    }
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
;

