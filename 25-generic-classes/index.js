// You can do more than 1 generic type
function anotherFunction(valOne, ValTwo) {
    return { valOne, ValTwo };
}
anotherFunction(3, { connection: "12", username: "delon", password: "123" });
class Sellable {
    cart = [];
    addToCard(product) {
        this.cart.push(product);
    }
}
export {};
