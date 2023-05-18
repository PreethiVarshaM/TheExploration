// Variable declaration and type annotation
let message: string = "Hello, TypeScript!";

// Function declaration with type annotations for parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Array type annotation
let numbers: number[] = [1, 2, 3, 4, 5];

// Object type annotation
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// Class definition with properties and methods
class Animal {
  // Property declaration
  name: string;

  // Constructor function
  constructor(name: string) {
    this.name = name;
  }

  // Method definition
  speak(): void {
    console.log(`${this.name} is speaking.`);
  }
}

// Creating an instance of the Animal class
let cat = new Animal("Whiskers");
cat.speak();

// Type inference
let x = 10; // TypeScript infers x as type number

// Union type
let value: number | string;
value = 10; // Valid assignment
value = "Hello"; // Valid assignment

// Type aliases
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};

// Type assertion
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

// Optional properties
type Person = {
  name: string;
  age?: number; // Optional property
};

let alice: Person = { name: "Alice" };
let bob: Person = { name: "Bob", age: 30 };

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("Hello, generics!");


// Asynchronous code with Promises
function fetchData(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 2000);
  });
}

async function getData(): Promise<void> {
  const data = await fetchData();
  console.log(data);
}

getData();
