import $map from './$map'
import toArray from './toArray'
import toIter from './toIter'
import chain from './chain'
const test = require('tape')

const m = (arr, fn) => chain(
    toIter(arr),
    $map(fn),
    toArray
)

test('$map', t => {
    const arr = [1, 2, 3]
    t.deepEqual(m(arr, x => x * 2), [2, 4, 6])
    t.deepEqual(m(arr, x => [x * 2]), [[2], [4], [6]])
    t.end()
})
