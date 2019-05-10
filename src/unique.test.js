import unique from './unique'
import toIter from './toIter'
import toArray from './toArray'
import pipe from './pipe'
const test = require('tape')

const m = pipe(
    toIter,
    unique,
    toArray
)

test('unique', t => {
    t.deepEqual(m([1, 2, 2, 3, 1]), [1, 2, 3])
    const o = {}
    t.deepEqual(m([o, o, o]), [o])
    t.end()
})
