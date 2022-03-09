"use strict";
class Nice {
  constructor() {
    console.log("Class");
  }
}
new Nice();
let a = 45;
function assignA(arg = {}) {
  console.log(arg);
}
assignA(a);
