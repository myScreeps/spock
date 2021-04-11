console.log("test");

// function(id) {
//     if(id) {
//         var _data = data(id);
//         globals.RoomObject.call(this, _data.x, _data.y, _data.room, _data.effects);
//         this.id = id;
//     }
// }

class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

    Person.prototype.nationality = "English";




class o {
    constructor() { }
    terminal(val) {
        return "terminal";
    }
};

o.__defineSetter__('value', function (val) {
    this.anotherValue = 13;
    this.valuex = val;
});

o.__defineGetter__("value", function () {
    return this.valuex;
});


Person.prototype.get = function () {
    this.teamName = this.firstName + this.lastName;
    return this.teamName;
}


Person.prototype.teamName = function () {
    this.teamName = this.firstName + this.lastName;
    return this.teamName;
}

Object.defineProperty(Person, 'gimmeFive', {
    get: function () {
        return this.firstName + this.lastName;
    }

});


// Person.__defineGetter__("fullName", function () { return this.firstName + " " + this.lastName; });
Person.__defineGetter__("getter", function () { return "__defineGetter__" });

//Person.__defineSetter__("year", function(y) { this.setFullYear(y); });

var myFather = new Person("John", "Doe", 50, "blue");

Object.defineProperty(Person, 'saySomething', {
    get: function () {
        return this.say;
    },
    set: function (val) {
        this.say = val;
        return this.say
    }
});

Object.defineProperty(Person, 'say', {
    get: function () {
        // this.fullName = this.firstName.concat(this.lastName);

        console.log(this.firstName);

        this.fullName = "Neal R. Noble"
        this.sayIt = this.fullName;
        return this.sayIt;
    },
    set: function (val) {
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Test is </>');
        this.sayIt = val + "The End";
    }
});


//myFather.say = "Hello World";
//myFather.saySomething = "Hello World";


console.log("JSON.stringify(myFather): " + JSON.stringify(myFather));
console.log("myFather.saySomething: " + myFather.saySomething);
console.log("myFather.nationality: " + myFather.nationality);
console.log("myFather.say: " + myFather.say);
console.log("myFather.fullName: " + myFather.fullName);
console.log("myFather.gimmeFive: " + myFather.gimmeFive);
console.log("myFather.getter: " + myFather.getter);


console.log("myFather.teamName: " + myFather.teamName());


Person.prototype = {
    get GetFullName() {
        // return this.firstName + " " + this.lastName;
        return "someName"
    },
    set GetFullName(value) {
        this._data = value
    },
}


console.log();
//o.value = 13;
console.log(o.terminal);
console.log("myFather.GetFullName: " + myFather.GetFullName);
// Using the get operator
o = { get gimme10() { return 10; } };
//o = {};
console.log("o.gimmeTen: " + o.gimme10); // 5

// Using Object.defineProperty

Object.defineProperty(Person, 'gimmeFive2', {
    get: function () {
        return 5;
    }
});
console.log("Person.gimmeFive: " + Person.gimmeFive2); // 5

Object.defineProperties(Person, {
    fullName: {

        get: function () {
            console.log("test")
            return this.firstName;
        },
        //       value: 42,

        //  writable: true
    },
    property2: {}
});
//Person.property1 = 1;


console.log("myFather.firstName: " + myFather.firstName);
console.log("myFather.fullName: " + myFather.fullName);
