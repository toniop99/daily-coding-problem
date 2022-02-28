
function findNextLowestPositive (arr) {
  if (arr.length === 0) {
    return 1
  }

  const seen = []
  const max = Infinity
  let smallestMissingInt = 1

  arr.forEach((num) => {
    if (num > 0 && num <= max) {
      seen[num] = -1
    }
  })

  for (let i = 1; i < seen.length; i++) {
    if (seen[i] !== -1) {
      smallestMissingInt = i
      break
    }

    smallestMissingInt = i + 1 <= max ? i + 1 : false
  }

  return smallestMissingInt
}

module.exports = { findNextLowestPositive }
