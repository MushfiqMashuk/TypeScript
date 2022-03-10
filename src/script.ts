class Nice {
  constructor() {
    console.log("Class");
  }
}

new Nice();

let a: string = "";

function assignA(arg: object = {}) {
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

// TypeScript Interface

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

function printName(person: Person) {
  console.log(person.name);
}

printName(obj);

//Explicit typing and Enum typing

// Enum
enum UserResponse {
  Yes = 45,
  No,
  Maybe,
}

console.log(UserResponse);
console.log(UserResponse["Yes"]);

// Union

// Array typing
let x: (string | number)[];

x = [23, 344, "dfsdf"];

// Object typing

let arr: object;

arr = {
  name: "MAshuk",
};

arr = [2, 4, 54];

// Object typing

let arr2: {
  name: string;
  age: number;
};

arr2 = {
  name: "Mashuk",
  age: 24,
  country: "BD", // error
};

// Dynamic type or any type

let any: any;

any = 45;
any = "mash";

// any object type

let anyObject: {
  name: any;
  age: any;
};

anyObject = {
  name: "Mashuk",
  age: "21",
};

// any array

let anyArray: any[] = [];

anyArray.push(5);
anyArray.push(false);
