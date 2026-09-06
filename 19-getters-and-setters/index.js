class User {
    email;
    name;
    _courseCount = 1;
    city = "Jakarta";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    // A method can also be private
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // A setter cant have a return type
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1 ");
        this._courseCount = courseNum;
    }
}
const delon = new User("delon@gmail.com", "delon");
export {};
