import filter from './filter'
const test = require('tape')

test('filter', t => {
    const arr = [1, 2, 3, 4, 5]
    t.deepEqual(filter(x => x <= 3)(arr), [1, 2, 3])
    t.deepEqual(filter(x => x > 5)(arr), [])
    t.end()
})
