const sum_to_n_a = (n) => (n * (n + 1)) / 2;

const sum_to_n_b = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).reduce((sum, num) => sum + num, 0);

const sum_to_n_c = (n) => {
  const helper = (num, acc) => (num <= 0 ? acc : helper(num - 1, acc + num));
  return helper(n, 0);
};

module.exports = {
  sum_to_n_a,
  sum_to_n_b,
  sum_to_n_c,
};
