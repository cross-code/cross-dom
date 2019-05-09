import each from './each'
const test = require('tape')

test('each', t => {
    t.plan(4)
    const arr = [3, 2, 1]
    t.equal(each((x, i) => t.is(x + i, 3))(arr), arr)
    t.end()
})
