const { existsSum } = require('./problem')

describe('Given a k number, find two elements that his sum is k', () => {
  test('[10, 15, 3, 7], k=17 should return true', () => {
    expect(existsSum(17, [10, 15, 3, 7])).toBe(true)
  })

  test('[10, 10, 3, 7], k=20 should return true', () => {
    expect(existsSum(20, [10, 10, 3, 7])).toBe(true)
  })

  test('[10, 1, 3, 7], k=20 should return false', () => {
    expect(existsSum(20, [10, 1, 3, 7])).toBe(false)
  })

  test('[10, 15, 3, 7], k=20 should return false', () => {
    expect(existsSum(20, [10, 15, 3, 7])).toBe(false)
  })
})
