// Custom type
type personType = { name: string; age: number };

function printName(person: personType) {
  console.log(person.name);
}

printName({ name: "Mashuk", age: 34 });

type numberOrString = number | string;

function printId(id: numberOrString) {
  console.log(id);
}

printId(45);

// Function signature

let calc: (a: number, b: number) => number;

calc = (a, b) => a + b;
console.log(calc(4, 5));

type userType = { name: string; id: number | string };

// This is a function blueprint hasn't defined yet but declared;
let authenticate: (id: number | string, user: userType) => boolean;

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

