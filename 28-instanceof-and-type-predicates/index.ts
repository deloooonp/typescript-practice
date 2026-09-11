function logValue(x: Date | string) {
  // instanceof keyword is similar to typeof
  // returns a true or false
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// The pet is fish saying if the function returns a true, then the argument is guaranteed of be type fish
function isFish(pet: Fish | Bird): pet is Fish {
  // This is similar to an if statement
  // returns true if a pet is fish
  return (pet as Fish).swim !== undefined;
}

// Because of the isFish function, it automatically narrows it down for this function
function getFood(pet: Fish | Bird) {
  // Type guard
  if (isFish(pet)) {
    // Pet is narrowed to fish
    pet;
    return "Fish Food";
  } else {
    // Pet is narrowed to bird
    pet;
    return "Bird Food";
  }
}

export {};
