import filter from './filter'
import toArray from './toArray'
import toIter from './toIter'
const test = require('tape')

test('filter', t => {
    const arr = [1, 2, 3, 4, 5]
    t.deepEqual(toArray(filter(x => x <= 3)(toIter(arr))), [1, 2, 3])
    t.deepEqual(toArray(filter(x => x > 5)(toIter(arr))), [])
    t.end()
})
