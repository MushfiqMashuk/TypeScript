export class Avenger {
    constructor(n, s, u, a) {
        this.name = n;
        this.superPower = s;
        this.universe = u;
        this.age = a;
    }
    // This will also work instead of every time using this keyword
    //   constructor(
    //     private name: string,
    //     protected superPower: string,
    //     readonly universe: string,
    //     public age: number
    //   ) {}
    getProperty() {
        return this.age;
    }
    superHero() {
        console.log(`${this.name} is a Superhero in ${this.universe} Universe`);
    }
}
function getSomething(props) {
    console.log(props);
}
getSomething({ name: 67 });
const apiresponse = {
    status: 200,
    message: "Ok",
    data: "nice",
};
console.log(apiresponse.data);
// Enums
var SuccessCodes;
(function (SuccessCodes) {
    SuccessCodes[SuccessCodes["Success"] = 200] = "Success";
    SuccessCodes[SuccessCodes["ServerError"] = 500] = "ServerError";
    SuccessCodes[SuccessCodes["UnAuthenticated"] = 401] = "UnAuthenticated";
})(SuccessCodes || (SuccessCodes = {}));
console.log(SuccessCodes.UnAuthenticated);
// Tupples
const mixedArray = [23, "abc", {}];
mixedArray.push(1);
console.log(mixedArray);
