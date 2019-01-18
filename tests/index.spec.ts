const mergeSort = require('../src/index');

describe('MergeSort', () => {
  test('is a function', () => {
    expect(typeof mergeSort).toBe('function');
  });

  test('returns an array', () => {
    expect(Array.isArray(mergeSort())).toBe(true);
  });

  test('sorts an array', () => {
    const unsortedNums = [5, 2, 1, 9, 4, 10, 7];
    const sortedNums = unsortedNums.slice();
    sortedNums.sort((a, b) => a - b);

    expect(mergeSort(unsortedNums)).toEqual(sortedNums);
  });
});
