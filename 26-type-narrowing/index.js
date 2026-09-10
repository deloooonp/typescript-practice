function detectType(val) {
    // Cant use a string method because its unsure
    // return val.toLowerCase()
    // It must return a value too or else the val + 3 wont work
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 3;
}
// Cautious way just incase theres no id
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
export {};
