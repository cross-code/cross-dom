import each from './each'
import toArray from './toArray'
import toIter from './toIter'
const test = require('tape')

test('each', t => {
    t.plan(4)
    const arr = [3, 2, 1]
    t.deepEqual(toArray(each((x, i) => t.is(x + i, 3))(toIter(arr))), arr)
    t.end()
})
