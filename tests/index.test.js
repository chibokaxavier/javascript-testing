import { describe, expect, test, it } from "vitest";
import greater, { factorial } from "../src/index.js";
import { fizzBuzz } from "../src/index.js";

describe("greater", () => {
  it("should return the first argument if it is bigger", () => {
    expect(greater(2, 1)).toBe(2);
  });

  it("should return the second argument if bigger", () => {
    expect(greater(1, 2)).toBe(2);
  });
  it("should return the first argumemt if both are equal", () => {
    expect(greater(3, 3)).toBe(3);
  });
});

describe("fizzbuzz", () => {
  it("should return fizzbuzz if n is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
  it("should return fizz if n is divisible by 3 ", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });
  it("should return buzz if n is divisible by 5 ", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });
  it("should return n as a string if n is indivisible by 5 and 3 ", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("factorial", () => {
  it("should return the factorial of the number", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return the factorial of the number", () => {
    expect(factorial(1)).toBe(1);
  });
  it("should return the factorial of the number", () => {
    expect(factorial(3)).toBe(6);
  });
});
