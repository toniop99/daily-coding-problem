const { multiplyArrExceptCurrentIndex, multiplyArrExceptCurrentIndexWithDivision } = require('./problem')

describe('Multiply all elements on an array except the element of current index', () => {
  describe('multiplyArrExceptCurrentIndexWithDivision', () => {
    test('[1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24]', () => {
      expect(multiplyArrExceptCurrentIndexWithDivision([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
    })

    test('[3, 2, 1] should return [2, 3, 6]', () => {
      expect(multiplyArrExceptCurrentIndexWithDivision([3, 2, 1])).toEqual([2, 3, 6])
    })
  })

  describe('multiplyArrExceptCurrentIndex', () => {
    test('[1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24]', () => {
      expect(multiplyArrExceptCurrentIndex([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
    })

    test('[3, 2, 1] should return [2, 3, 6]', () => {
      expect(multiplyArrExceptCurrentIndex([3, 2, 1])).toEqual([2, 3, 6])
    })
  })
})
