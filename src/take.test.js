import chain from './chain'
import toIter from './toIter'
import take from './take'
import toArray from './toArray'
const test = require('tape')

const m = (arr, n) => chain(
    toIter(arr),
    take(n),
    toArray
)

test('take', t => {
    const arr = [...Array(5).keys()]
    t.deepEqual(m(arr, 0), [])
    t.deepEqual(m(arr, 1), [0])
    t.deepEqual(m(arr, 2), [0, 1])
    t.deepEqual(m(arr, 3), [0, 1, 2])
    t.end()
})
