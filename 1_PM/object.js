// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (let el of Object.values(obj)) {
    if (!el) { return true }
    else if (typeof el === 'object') 
    {
      return hasFalsyValue(el);
    }
  }
  return false;
};

const obj = {
  hi: "1",
  age: 16,
  hello: {
    oops: "boom"
  }
}

console.log(hasFalsyValue(obj));