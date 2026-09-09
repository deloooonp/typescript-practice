// The function accepts products as an array. but returns a single data from the array
function getSearchProducts<T>(products: T[]): T {
  // some data base ops
  return products[3];
}

// Some codebases use <T,>
// They added a comma (it wont produce any error) to seperate it from a html tag
const getMoreSearchProducts = <T>(products: T[]): T => {
  // some data base ops
  return products[3];
};

export {};
