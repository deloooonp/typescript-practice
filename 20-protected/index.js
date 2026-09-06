class User {
    email;
    name;
    // Using private only allows the data to be accessed in the class
    // But using protected it can be accessed by a class that extends this class. It still cant be accessed directly outside the class
    // private _courseCount = 1;
    _courseCount = 1;
    city = "Jakarta";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1 ");
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    isFamily = true;
    changeCourseCount() {
        // If the data is private this class cant access it, if the data is protected this class can since it extends the parent class
        this._courseCount = 4;
    }
}
const delon = new User("delon@gmail.com", "delon");
export {};
