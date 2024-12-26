# JavaScript Type Coercion in Addition

This repository demonstrates a common error in JavaScript: unexpected type coercion when using the addition operator (+).  JavaScript's loose typing can lead to unexpected string concatenation instead of numerical addition when working with mixed data types (numbers and strings). 

The `bug.js` file showcases the issue.  The `bugSolution.js` file provides a solution to prevent this type of error.  Always explicitly check your data types using `typeof` before performing arithmetic operations. Consider using `parseInt()` or `parseFloat()` to convert strings to numbers when necessary.  For more robust type checking, TypeScript is a strong alternative.
