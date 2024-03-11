const add = (x: number, y: number, z?: number): number => {
  return x + y + (z || 0);
};

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 1 + 2 + 3 to equal 6", () => {
  expect(add(1, 2, 3)).toBe(6);
});
