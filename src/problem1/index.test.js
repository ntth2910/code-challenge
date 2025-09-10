const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require("./index");

describe("sum_to_n functions", () => {
  const testCases = [
    [1, 1],
    [5, 15],
    [10, 55],
    [100, 5050],
  ];

  const funcs = { sum_to_n_a, sum_to_n_b, sum_to_n_c };

  testCases.forEach(([n, expected]) => {
    Object.entries(funcs).forEach(([name, fn]) => {
      test(`${name}(${n}) → ${expected}`, () => {
        expect(fn(n)).toBe(expected);
      });
    });
  });
});
