import flatMap from './flatMap'
import chain from './chain'
import toIter from './toIter'
import toArray from './toArray'
const test = require('tape')

const m = (arr, fn) => chain(
    toIter(arr),
    flatMap(fn),
    toArray
)

test('flatMap', t => {
    const arr = [1, 2, 3, 4]
    t.deepEqual(m(arr, x => [x, x * 2]), [1, 2, 2, 4, 3, 6, 4, 8])
    t.deepEqual(m(arr, x => [[x * 2]]), [[2], [4], [6], [8]])
    t.end()
})
