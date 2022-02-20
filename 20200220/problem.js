// O(n)
function multiplyArrExceptCurrentIndexWithDivision (arr) {
  const multiplyArr = arr.reduce((prev, current) => {
    return prev * current
  })

  return arr.map((element) => {
    return multiplyArr / element
  })
}

// O(n^2)
function multiplyArrExceptCurrentIndex (arr) {
  return arr.map((element, index) => {
    return arr.filter((el, i) => i !== index).reduce((prev, current) => {
      return prev * current
    })
  })
}

module.exports = { multiplyArrExceptCurrentIndexWithDivision, multiplyArrExceptCurrentIndex }
