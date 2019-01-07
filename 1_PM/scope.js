// Part 1:
//  - What will print and why?
// 1,2,undefined because a is never defined in the x() function
//  - What will change if we delete line 5? Why?
// it prints 1,2,1 because the a in x() is referring to the var in the global scope

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x(a) {
  console.log(a);
}

function y() {
  let a = 2;
  console.log(a);
  x(a);
}

let a = 1;
console.log(a);
y();
