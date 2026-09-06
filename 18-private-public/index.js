// class User {
//   // You dont have to mark it public because its public by default if you dont mark it
//   public email: string;
//   name: string;
//   // By adding "private" you are not allownig anyone to access the data not just modifying it
//   // Using hash "#" also works but thats javascript
//   private readonly city: string = "Jakarta";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     // You still can access it if its private because its stil in the scope
//     // this.city;
//   }
// }
// A simpler way to write it down
class User {
    email;
    name;
    userId;
    city = "Jakarta";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
}
const delon = new User("delon@gmail.com", "delon", "22");
export {};
