import chain from './chain'
import toIter from './toIter'
import $takeLast from './$takeLast'
import toArray from './toArray'
const test = require('tape')

const m = (arr, n) => chain(
    toIter(arr),
    $takeLast(n),
    toArray
)

test('$takeLast', t => {
    const arr = [...Array(5).keys()]
    t.deepEqual(m(arr, 0), [])
    t.deepEqual(m(arr, 1), [4])
    t.deepEqual(m(arr, 2), [3, 4])
    t.deepEqual(m(arr, 3), [2, 3, 4])
    t.deepEqual(m(arr, 4), [1, 2, 3, 4])
    t.deepEqual(m(arr, 5), [0, 1, 2, 3, 4])
    t.deepEqual(m(arr, 6), [0, 1, 2, 3, 4])
    t.end()
})
