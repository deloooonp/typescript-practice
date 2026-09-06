class User {
  private _courseCount = 1;

  readonly city: string = "Jakarta";
  constructor(
    public email: string,
    public name: string,
  ) {}

  // A method can also be private
  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // A setter cant have a return type
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1 ");

    this._courseCount = courseNum;
  }
}

const delon = new User("delon@gmail.com", "delon");

// delon.deleteToken();

export {};
