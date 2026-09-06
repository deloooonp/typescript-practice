class User {
  // The constructor types are differnt from the class types
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const delon = new User("d@gmail.com", "delon");

delon.city = "Jakarta";

export {};
