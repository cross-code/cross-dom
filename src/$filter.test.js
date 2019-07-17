import $filter from './$filter'
import toArray from './toArray'
import toIter from './toIter'
import chain from './chain'
const test = require('tape')

const m = (arr, fn) => chain(
    toIter(arr),
    $filter(fn),
    toArray
)

test('$filter', t => {
    const arr = [1, 2, 3, 4, 5]
    t.deepEqual(m(arr, x => x <= 3), [1, 2, 3])
    t.deepEqual(m(arr, x => x > 5), [])
    t.end()
})
