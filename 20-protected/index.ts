class User {
  // Using private only allows the data to be accessed in the class
  // But using protected it can be accessed by a class that extends this class. It still cant be accessed directly outside the class
  // private _courseCount = 1;
  protected _courseCount = 1;

  readonly city: string = "Jakarta";
  constructor(
    public email: string,
    public name: string,
  ) {}

  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1 ");

    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    // If the data is private this class cant access it, if the data is protected this class can since it extends the parent class
    this._courseCount = 4;
  }
}

const delon = new User("delon@gmail.com", "delon");

export {};
