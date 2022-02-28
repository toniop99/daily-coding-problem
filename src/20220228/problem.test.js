const { jobScheduler } = require('./problem')

describe('Execute function f after n milliseconds', () => {
  test('Should print hello world', () => {
    jobScheduler(() => { return 'hello world' }, 500).then(result => {
      expect(result).toBe('hello world')
    })
  })
})
