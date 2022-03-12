import { AvengerInterface } from "../interfaces/AvengerInterface";

export class Avenger implements AvengerInterface {
  public name: string;
  superPower: string;
  readonly universe: string; // this property can not even reassigned inside this class
  private age: number;

  constructor(n: string, s: string, u: string, a: number) {
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

  getProperty(): number {
    return this.age;
  }

  superHero(): void {
    console.log(`${this.name} is a Superhero in ${this.universe} Universe`);
  }
}
