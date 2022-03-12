import { Avenger } from "./classes/Avenger.js";
class SubAvenger extends Avenger {
    //   constructor(n: string, s: string, u: string, a: number) {
    //     super(n, s, u, a);
    //   }
    print() {
        console.log("nice " + this.superPower);
        console.log("Universe " + this.universe);
    }
}
const IronMan = new Avenger("Tony Stark", "Billionaire", "Marvel", 35);
const SpiderMan = new SubAvenger("Spider Man", "Spider Sense", "Marvel", 23);
IronMan.superHero();
IronMan.universe = "Milkyway"; // readonly property - cannot be modified
console.log(IronMan.superPower); // protected property
console.log(SpiderMan.print());
const avengers = [];
avengers.push(IronMan);
avengers.push(SpiderMan);
console.log(IronMan.universe);
let createCube;
createCube = (cubeParams) => cubeParams.width * cubeParams.height * cubeParams.length;
console.log(createCube({ width: 34, length: 4, height: 6 }));
