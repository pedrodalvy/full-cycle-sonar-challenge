const math = require("./math");

test("should sum 2 + 3 and return 5", () => {
  expect(math.add(2, 3)).toBe(5);
});

test("should subtract 2 - 3 and return -1", () => {
  expect(math.subtract(2, 3)).toBe(-1);
});

test("should multiply 2 * 3 and return 6", () => {
  expect(math.multiply(2, 3)).toBe(6);
});

test("should divide 9 / 3 and return 3", () => {
  expect(math.divide(9, 3)).toBe(3);
});
