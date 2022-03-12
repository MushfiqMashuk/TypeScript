"use strict";
function printName(person) {
    console.log(person.name);
}
printName({ name: "Mashuk", age: 34 });
function printId(id) {
    console.log(id);
}
printId(45);
// Function signature
let calc;
calc = (a, b) => a + b;
console.log(calc(4, 5));
// This is a function blueprint hasn't defined yet but declared;
let authenticate;
//console.log(authenticate); // Gives us error. output: undefined
const user1 = {
    name: "Mashuk",
    id: "CSE 064 07578",
    age: 67,
};
authenticate = (id, user) => {
    return id === user.id;
};
console.log(authenticate("CSE 064 07578", user1));
