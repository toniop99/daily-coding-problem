
function jobScheduler (f, n) {
  if (isNaN(n)) {
    return 0
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(f()), n)
  })
}

module.exports = { jobScheduler }
