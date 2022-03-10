"use strict";
class Nice {
    constructor() {
        console.log("Class");
    }
}
new Nice();
let a = "";
function assignA(arg = {}) {
    console.log(arg);
}
assignA(a);
const colors = ["red", "blue", "green", 34];
const obj = {
    name: "mash",
    age: 34,
};
colors.push(false);
console.log(colors);
console.log(obj.country);
function printName(person) {
    console.log(person.name);
}
printName(obj);
