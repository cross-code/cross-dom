import toIter from './toIter'
import first from './first'
import pipe from './pipe'
const test = require('tape')

const m = pipe(toIter, first)

test.only('first', t => {
    t.is(m([]), undefined)
    t.is(m([3]), 3)
    t.is(m([3, 5]), 3)
    t.is(m([1, 2, 3]), 1)
    t.end()
})
