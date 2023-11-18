import { getDailyFortune } from "./fortune";

console.log("Today's fortune : ", getDailyFortune());

// Type Explicit
let firstName: string;

firstName = "John Doe";

console.log("First Name : ", firstName);

// firstName = 101;

// firstName = true;

// Type Inference
let x = 201;

// x = "";

// x = true;

// function sayHi(): string {
//     return "Hi there!";
// }

// sayHi()

// CUSTOM TYPES

// Type keyword
type MyType = string | number;

let y: MyType = "Hello World";

y = 201;

type ResourceType = {
  resourceId: number;
  resourceName: string;
};

let ServerOne: ResourceType = {
  resourceId: 210,
  resourceName: "Server One",
};

// Custom type with interface
interface PersonType {
  name: string;
  email: string;
}

let john: PersonType = {
  name: "John Doe",
  email: "john@test.com",
};

let username = "Jenny Alice";

let greet = `Hello ${username}!`;

console.log(greet);
