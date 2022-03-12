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
