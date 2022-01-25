// // level {1/2/3}
// ### level 2:
// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array:
// [1, 3, 4, 6, 7, 8]
// ```
// ```
// Output should be array: [1, 3, 7]
// ```
// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'
// ```
// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// ```
// ```
// Output should be a number: 8
// ```
// ​

// 1,
const removeEven = (items) => items.filter((item) => item % 2);

let array = [1, 3, 4, 6, 7, 8];

console.log(removeEven(array));

// 2,
const vowelise = (input) =>
  [...input].map((c) => (c.match(/[aeiou]/) && c.toUpperCase()) || c).join("");

console.log(vowelise("Elie"));

// 3,

const findMax = (input) =>
  input.reduce((result, i) => (i > result ? i : result));
console.log(findMax([1, 3, 4, 7, 2]));




const fibonacci = (n) => {
  if (n === 1) return [0, 1];
  else {
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

const summariseFibonacci = (n) => {
  const result = fibonacci(n);
  const sum = result.reduce((res, i) => res + i);

  console.log(result.join(" "));
  console.log(`Sum: ${sum}`);
};

summariseFibonacci(8);
