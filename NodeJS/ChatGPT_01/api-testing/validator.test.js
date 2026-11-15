const isValidName = require("./validator");

test("valid name should return true", () => {
  expect(isValidName("Rahul")).toBe(true);
});

test("empty name should return false", () => {
  expect(isValidName("")).toBe(false);
});

test("number should return false", () => {
  expect(isValidName(123)).toBe(false);
});