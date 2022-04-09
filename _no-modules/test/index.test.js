const { App } = require('../src/index');

describe('should resturn a string', () => {
  test.each([
    {
      input: { array: [1, 2, 3, 4, 5], pivot: 4 },
      expected: { lower: [1, 2, 3], upper: [5] },
    },
  ])('quickSort($input)', ({ input, expected }) => {
    const { array, pivot } = input;
    const result = partition(array, pivot);

    expect(result).toEqual(expected);
  });
});