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

function getSomething<Type extends { name: string }>(props: Type) {
  console.log(props);
}

getSomething({ name: 67 });

interface APIResponse<Type> {
  status: number;
  message: string;
  data: Type;
}

const apiresponse: APIResponse<string> = {
  status: 200,
  message: "Ok",
  data: "nice",
};

console.log(apiresponse.data);

// Enums

enum SuccessCodes {
  Success = 200,
  ServerError = 500,
  UnAuthenticated = 401,
}

console.log(SuccessCodes.UnAuthenticated);


// Tupples

const mixedArray:[number, string, object] = [23, "abc", {}];

mixedArray.push(1);

console.log(mixedArray);

