const greater = (a, b) => {
  return a > b ? a : b;
};

export const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  if (n % 3 === 0) return "fizz";
  if (n % 5 === 0) return "buzz";
  return n.toString();
};

export default greater;
