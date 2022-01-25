
//Level 2

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

