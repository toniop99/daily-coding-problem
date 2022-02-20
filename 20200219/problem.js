'use strict'

function existsSum (k, arr) {
  const values = new Map()

  let result = false

  arr.forEach(element => {
    if (values.has(k - element)) {
      result = true
    }

    values.set(element, 0)
  })

  return result
}

module.exports = { existsSum }
