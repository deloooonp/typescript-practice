class User {
    // The constructor types are differnt from the class types
    email;
    name;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const delon = new User("d@gmail.com", "delon");
delon.city = "Jakarta";
export {};
