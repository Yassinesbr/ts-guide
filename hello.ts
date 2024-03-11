// Declare a variable temperature of type number and assign it a value.
// Create a variable welcomeMessage of type string that contains a greeting.
// Make a variable isLoggedIn of type boolean to check if a user is logged in.

const temperature: number = 30;
const welcomeMessage: string = "Hello, TypeScript!";
const isLoggedIn: boolean = false;

// Create an array colors of type string[] and initialize it with a few colors.
// Define a tuple userInfo that contains a string (for user name) and a number (for user age).

const colors: string[] = ["red", "green", "blue"];
const userInfo: [string, number] = ["John", 30];

// Define an enum Season with values for Spring, Summer, Autumn, and Winter. Use it in a variable declaration.
// Create a function logValue that takes an any type argument and logs it to the console.
// Write a function noReturn that returns void and logs "No return" to the console.

enum Season {
  Spring,
  Summer,
  Autumn,
  Winter,
}
const currentSeason: Season = Season.Summer;

const logValue = (value: any) => {
  console.log(value);
};

const noReturn = (): void => {
  console.log("No return");
};

// Write a function greet that takes a string as an argument and returns a string with a greeting message.
// Create a function multiply that takes two number arguments and returns their product as a number.

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

// Write a function createEmail with two parameters: to (string) and subject (string, optional). If subject is not provided, it should default to "No Subject".
// Modify the add function to include a third optional parameter z of type number. If z is provided, add it to the result of x and y.

const createEmail = (to: string, subject?: string): string => {
  return `Email to ${to}, ${subject ? `Subject: ${subject}` : "No Subject"}`;
};

const add = (x: number, y: number, z?: number): number => {
  return x + y + (z || 0);
};

// Create a function concatenateStrings that takes a rest parameter of type string[] and returns all the strings concatenated together.
// Implement a function maxNumber that takes a rest parameter of numbers and returns the maximum number from the list.

const concatenateStrings = (...strings: string[]): string => {
  return strings.join("");
};

const maxNumber = (...numbers: number[]): number => {
  return Math.max(...numbers);
};

// Define an interface Vehicle with properties make, model, and an optional property year.
// Write a function createVehicle that takes an object of type Vehicle as an argument and returns it.

interface Vehicle {
  make: string;
  model: string;
  year?: number;
}

const createVehicle = (vehicle: Vehicle): Vehicle => {
  return vehicle;
};

// Extend the Person interface to include an optional property email.
// Implement a function updatePerson that takes a Person object and an object with updates to some of the person's properties. The function should return the updated person object.

// interface Person {
//   name: string;
//   age: number;
//   email?: string;
// }

// const updatePerson = (person: Person, updates: Partial<Person>): Person => {
//   return { ...person, ...updates };
// };

// Create an interface Circle with readonly properties centerX, centerY, and radius.
// Write a function moveCircle that attempts to modify the centerX and centerY properties of a Circle object. Observe the TypeScript error

interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}

const moveCircle = (circle: Circle, x: number, y: number): Circle => {
  return { ...circle, centerX: x, centerY: y };
};

// Extend the Animal class with a Dog class that overrides the move method.
// Create an instance of the Dog class and call its move method.

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  move(distanceInMeters: number = 5) {
    super.move(distanceInMeters);
  }
}

const dog = new Dog("Hachiko");

// Try to access the name property from outside the Person class and observe the TypeScript error.
// Add a public method to the Person class that returns the name property.

class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const person = new Person("John");
//console.log(person.getName());

// Use the identity function with different types and observe the inferred return type.
// Extend the identity function to log the type of arg using typeof.

function identity<T>(arg: T): T {
  console.log(typeof arg);
  return arg;
}

// Implement the GenericIdentityFn interface with a function that returns its argument.
// Create an interface GenericArray with a generic type that represents an array of that type.

interface GenericIdentityFn<T> {
  (arg: T): T;
}

const genericIdentity: GenericIdentityFn<number> = (arg: number): number => {
  return arg;
};

interface GenericArray<T> {
  items: T[];
}

//Create a numeric enum Response with values No = 0, Yes = 1, and use it in a function.

enum response {
  No = 0,
  Yes = 1,
}

const getResponse = (response: response): void => {
  console.log(response);
};
//getResponse(response.Yes);

// Define a string enum Message with values Success = "SUCCESS", Failure = "FAILURE" and use it to return function results.

enum Message {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

const getMessage = (message: Message): string => {
  return message;
};
// getMessage(Message.Success);

// Use the padLeft function with both a string and a number as the padding parameter.
function padLeft(value: string, padding: string | number) {
  // function body
}

padLeft("Hello", 4);
padLeft("Hello", "something");

// Create an object of type Customer and use it to call a function that requires a BusinessPartner and a Contact
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
  name: "John",
  credit: 1000,
  email: "test@test.com",
  phone: "123456789",
};

// Create a module stringUtils with a function capitalize that takes a string and returns it with the first letter capitalized.
// Import and use it in another file.

import { capitalize } from "./stringUtils";
capitalize("hello");

// Define a namespace Calculator with a class BasicCalculator and use it in another file without importing.
// const calc = new Calculator.BasicCalculator();
// calc.add(1, 2);
// calc.subtract(2, 1);

//Create a decorator @logged that logs whenever a new instance of a class is created.

// function logged(constructor: Function) {
//   console.log(`Creating a new instance of ${constructor}`);
// }

// @logged
// class Test {}

// Implement a method decorator @format that formats the return value of greet method as uppercase.

// function enumerable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

//////  TO UNDERSTAND //////

// function format(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function () {
//     const result = originalMethod.apply(this);
//     return result.toUpperCase();
//   };
// }

//////////////////////////

// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }

//   @enumerable(false)
//   @format
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// const greeter = new Greeter("world");
// console.log(greeter.greet());

// Use the Partial utility type to write a function that updates only certain fields of a Todo object.
// Apply the Readonly utility type to make a User object that should not be modified after creation.

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const updateTodo = (todo: Todo, updates: Partial<Todo>): Todo => {
  return { ...todo, ...updates };
};

type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "John",
  age: 30,
};
