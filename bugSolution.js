function add(a, b) {
  // Type checking and explicit conversion
  if (typeof a === 'string' || typeof b === 'string') {
    a = parseFloat(a);
    b = parseFloat(b);
    if(isNaN(a) || isNaN(b)){
      return "Invalid input";
    }
  }

  return a + b;
}

console.log(add("1", 1)); // Output: 2

console.log(add(1, "1")); // Output: 2

console.log(add("a", 1)); //Output: Invalid input