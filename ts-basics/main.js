"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fortune_1 = require("./fortune");
console.log("Today's fortune : ", (0, fortune_1.getDailyFortune)());
// Type Explicit
var firstName;
firstName = "John Doe";
console.log("First Name : ", firstName);
// firstName = 101;
// firstName = true;
// Type Inference
var x = 201;
var y = "Hello World";
y = 201;
var ServerOne = {
    resourceId: 210,
    resourceName: "Server One",
};
var john = {
    name: "John Doe",
    email: "john@test.com",
};
var username = "Jenny Alice";
var greet = "Hello ".concat(username, "!");
console.log(greet);
