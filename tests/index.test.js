import { describe, expect, test, it } from "vitest";
import greater from "../src/index.js";
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


