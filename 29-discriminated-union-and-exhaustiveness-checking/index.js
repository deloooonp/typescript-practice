// In the future there will be more types added to Shape, when you do the function will cause an error
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
// However the switch will be fine and the codebase will not give you any warnings, then just put another case on it
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        // Using type never is exhaustiveness checking so it will give you a warning when you add another type in. The code will never run
        // When all the shapes are here, the code below will stop giving errors
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
export {};
