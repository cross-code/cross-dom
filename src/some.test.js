import toIter from './toIter'
import chain from './chain'
import some from './some'
const test = require('tape')

const m = (arr, fn) => chain(
    toIter(arr),
    some(fn)
)

test('some', t => {
    const arr = [1, 2, 3, 4, 5]
    t.true(m(arr, x => x === 3))
    t.true(m(arr, x => x > 3))
    t.false(m(arr, x => x > 5))
    t.false(m(arr, x => x < 0))
    t.end()
})
