"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Variable declaration and type annotation
let message = "Hello, TypeScript!";
// Function declaration with type annotations for parameters and return type
function greet(name) {
    return `Hello, ${name}!`;
}
// Array type annotation
let numbers = [1, 2, 3, 4, 5];
// Object type annotation
let person = {
    name: "John",
    age: 30,
};
// Class definition with properties and methods
class Animal {
    // Constructor function
    constructor(name) {
        this.name = name;
    }
    // Method definition
    speak() {
        console.log(`${this.name} is speaking.`);
    }
}
// Creating an instance of the Animal class
let cat = new Animal("Whiskers");
cat.speak();
// Type inference
let x = 10; // TypeScript infers x as type number
// Union type
let value;
value = 10; // Valid assignment
value = "Hello"; // Valid assignment
let point = {
    x: 10,
    y: 20,
};
// Type assertion
let someValue = "This is a string";
let strLength = someValue.length;
let alice = { name: "Alice" };
let bob = { name: "Bob", age: 30 };
// Generics
function identity(arg) {
    return arg;
}
let result = identity("Hello, generics!");
// Asynchronous code with Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        console.log(data);
    });
}
getData();
//# sourceMappingURL=practice.js.map