const score: Array<number> = [];
const names: Array<string> = [];

// Accepts val as boolean or number
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Accepts val as ANY which just disables type checking
function identityTwo(val: any): any {
  return val;
}

// Accepts any type, in this example if number is the input then the output will also be a number, basicaly every <Type> in this scenario will be of the same type
// This is different from "any" because any disables type checking but this accepts all types but stil has type checking
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("delon");
identityThree(true);

// Most people define it with just T
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// You can also pass the types into the function using generic types
identityFour<Bottle>({ brand: "Coke", type: 2 });
