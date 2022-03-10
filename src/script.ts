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
};

colors.push(false);
console.log(colors);
console.log(obj.country);

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

function printName(person: Person) {
  console.log(person.name);
}

printName(obj);
