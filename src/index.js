const greater = (a, b) => {
  return a > b ? a : b;
};

export const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  if (n % 3 === 0) return "fizz";
  if (n % 5 === 0) return "buzz";
  return n.toString();
};

export const factorial = (n) => {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let index = n; index > 1; index--) {
    result *= index;
  }
  return result;
};

export default greater;
