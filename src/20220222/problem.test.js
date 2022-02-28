const { findNextLowestPositive } = require('./problem')

describe('Find the lowest positive integer that doesnt exists on the array', () => {
  test('[] should return 1', () => {
    expect(findNextLowestPositive([])).toBe(1)
  })

  test('[3, 2, 1] should 4', () => {
    expect(findNextLowestPositive([3, 2, 1])).toBe(4)
  })

  test('[-3, -5, -1] should 1', () => {
    expect(findNextLowestPositive([-3, -5, -1])).toBe(1)
  })

  test('[1, 4, 7, 9] should 2', () => {
    expect(findNextLowestPositive([1, 4, 7, 9])).toBe(2)
  })
})
