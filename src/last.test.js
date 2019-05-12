import toIter from './toIter'
import last from './last'
import pipe from './pipe'
const test = require('tape')

const m = pipe(toIter, last)

test('last', t => {
    t.is(m([]), undefined)
    t.is(m([3]), 3)
    t.is(m([3, 5]), 5)
    t.is(m([1, 2, 3]), 3)
    t.end()
})
