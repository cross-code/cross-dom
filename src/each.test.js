import each from './each'
import toArray from './toArray'
import toIter from './toIter'
import chain from './chain'
const test = require('tape')

const m = (arr, fn) => chain(
    toIter(arr),
    each(fn),
    toArray
)

test('each', t => {
    t.plan(4)
    const arr = [3, 2, 1]
    t.deepEqual(m(arr, (x, i) => t.is(x + i, 3)), arr)
    t.end()
})
