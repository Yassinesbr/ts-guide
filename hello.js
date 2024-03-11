"use strict";
// Declare a variable temperature of type number and assign it a value.
// Create a variable welcomeMessage of type string that contains a greeting.
// Make a variable isLoggedIn of type boolean to check if a user is logged in.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var temperature = 30;
var welcomeMessage = "Hello, TypeScript!";
var isLoggedIn = false;
// Create an array colors of type string[] and initialize it with a few colors.
// Define a tuple userInfo that contains a string (for user name) and a number (for user age).
var colors = ["red", "green", "blue"];
var userInfo = ["John", 30];
// Define an enum Season with values for Spring, Summer, Autumn, and Winter. Use it in a variable declaration.
// Create a function logValue that takes an any type argument and logs it to the console.
// Write a function noReturn that returns void and logs "No return" to the console.
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
var currentSeason = Season.Summer;
var logValue = function (value) {
    console.log(value);
};
var noReturn = function () {
    console.log("No return");
};
// Write a function greet that takes a string as an argument and returns a string with a greeting message.
// Create a function multiply that takes two number arguments and returns their product as a number.
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
var multiply = function (a, b) {
    return a * b;
};
// Write a function createEmail with two parameters: to (string) and subject (string, optional). If subject is not provided, it should default to "No Subject".
// Modify the add function to include a third optional parameter z of type number. If z is provided, add it to the result of x and y.
var createEmail = function (to, subject) {
    return "Email to ".concat(to, ", ").concat(subject ? "Subject: ".concat(subject) : "No Subject");
};
var add = function (x, y, z) {
    return x + y + (z || 0);
};
// Create a function concatenateStrings that takes a rest parameter of type string[] and returns all the strings concatenated together.
// Implement a function maxNumber that takes a rest parameter of numbers and returns the maximum number from the list.
var concatenateStrings = function () {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join("");
};
var maxNumber = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
};
var createVehicle = function (vehicle) {
    return vehicle;
};
var moveCircle = function (circle, x, y) {
    return __assign(__assign({}, circle), { centerX: x, centerY: y });
};
// Extend the Animal class with a Dog class that overrides the move method.
// Create an instance of the Dog class and call its move method.
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog("Hachiko");
// Try to access the name property from outside the Person class and observe the TypeScript error.
// Add a public method to the Person class that returns the name property.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("John");
//console.log(person.getName());
// Use the identity function with different types and observe the inferred return type.
// Extend the identity function to log the type of arg using typeof.
function identity(arg) {
    console.log(typeof arg);
    return arg;
}
var genericIdentity = function (arg) {
    return arg;
};
//Create a numeric enum Response with values No = 0, Yes = 1, and use it in a function.
var response;
(function (response) {
    response[response["No"] = 0] = "No";
    response[response["Yes"] = 1] = "Yes";
})(response || (response = {}));
var getResponse = function (response) {
    console.log(response);
};
//getResponse(response.Yes);
// Define a string enum Message with values Success = "SUCCESS", Failure = "FAILURE" and use it to return function results.
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
var getMessage = function (message) {
    return message;
};
// getMessage(Message.Success);
// Use the padLeft function with both a string and a number as the padding parameter.
function padLeft(value, padding) {
    // function body
}
padLeft("Hello", 4);
padLeft("Hello", "something");
var customer = {
    name: "John",
    credit: 1000,
    email: "test@test.com",
    phone: "123456789",
};
// Create a module stringUtils with a function capitalize that takes a string and returns it with the first letter capitalized.
// Import and use it in another file.
var stringUtils_1 = require("./stringUtils");
(0, stringUtils_1.capitalize)("hello");
var updateTodo = function (todo, updates) {
    return __assign(__assign({}, todo), updates);
};
var user = {
    name: "John",
    age: 30,
};
