class Nice {
  constructor() {
    console.log("Class");
  }
}

new Nice();

let a: string = 45;

function assignA(arg: object = {}) {
  console.log(arg);
}

assignA(a);
