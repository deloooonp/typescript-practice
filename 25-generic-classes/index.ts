interface Database {
  connection: string;
  username: string;
  password: string;
}

// You can do more than 1 generic type
function anotherFunction<T, U extends Database>(valOne: T, ValTwo: U): object {
  return { valOne, ValTwo };
}

anotherFunction(3, { connection: "12", username: "delon", password: "123" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T extends Course> {
  public cart: T[] = [];

  addToCard(product: T) {
    this.cart.push(product);
  }
}

export {};
