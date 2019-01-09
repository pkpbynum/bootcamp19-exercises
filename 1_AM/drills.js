const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  return str.split("").reverse().join("");
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  let arr_ = arr;
  for (let i = 0; i < arr_.length; i++) {
    for (let j = i+1; j < arr_.length; j++) {
      if(arr_[i] === arr_[j]) {
        arr_.splice(j,1);
      }
    }
  }
  return arr_;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let fact = num;
  for (let i = num-1; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length !== arr2.length) { return -1; }
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [];
  let arr2 = [];
  for (let el of arr) {
    arr1.push(el[0]);
    arr2.push(el[1]);
  }
  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let len = str.length;
  return str.substring(len-(num%len)) + str.substring(0,len-(num%len));
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2019. It is eleven thirty-seven in the morning."
  let date = new Date();
  let hour = date.getHours();
  let ampm = "am";
  if (hour > 11) { ampm = "pm"; }
  if (hour === 0) { hour = 12 };
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `Today's date is ${months[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}. It is ${hour}:${date.getMinutes()} ${ampm}.`;
};

// Write tests here:
console.log(tokenize("Hello people."));
console.log(reverse("Hello people."));
console.log(uniqueOnes([1,1,2,3,4,4]));
console.log(factorial(4));
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
console.log(shiftRight("Hello", 3));
console.log(announceDate());