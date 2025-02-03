function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values by returning 0
    //Alternatively, you can throw an error:  throw new Error('Null or undefined values are not allowed.'); 
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(5, undefined)); // Output: 0