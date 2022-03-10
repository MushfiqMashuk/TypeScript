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
    isStudent: true,
};
colors.push(false);
console.log(colors);
console.log(obj.country);
function printName(person) {
    console.log(person.name);
}
printName(obj);
//Explicit typing and Enum typing
// Enum
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["Yes"] = 45] = "Yes";
    UserResponse[UserResponse["No"] = 46] = "No";
    UserResponse[UserResponse["Maybe"] = 47] = "Maybe";
})(UserResponse || (UserResponse = {}));
console.log(UserResponse);
console.log(UserResponse["Yes"]);
// Union
// Array typing
let x;
x = [23, 344, "dfsdf"];
// Object typing
let arr;
arr = {
    name: "MAshuk",
};
arr = [2, 4, 54];
// Object typing
let arr2;
arr2 = {
    name: "Mashuk",
    age: 24,
    country: "BD", // error
};
// Dynamic type or any type
let any;
any = 45;
any = "mash";
// any object type
let anyObject;
anyObject = {
    name: "Mashuk",
    age: "21",
};
// any array
let anyArray = [];
anyArray.push(5);
anyArray.push(false);
