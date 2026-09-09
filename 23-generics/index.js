"use strict";
const score = [];
const names = [];
// Accepts val as boolean or number
function identityOne(val) {
    return val;
}
// Accepts val as ANY which just disables type checking
function identityTwo(val) {
    return val;
}
// Accepts any type, in this example if number is the input then the output will also be a number, basicaly every <Type> in this scenario will be of the same type
// This is different from "any" because any disables type checking but this accepts all types but stil has type checking
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("delon");
identityThree(true);
// Most people define it with just T
function identityFour(val) {
    return val;
}
// You can also pass the types into the function using generic types
identityFour({ brand: "Coke", type: 2 });
