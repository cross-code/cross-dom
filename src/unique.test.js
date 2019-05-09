import unique from './unique'
const test = require('tape')

test('unique', t => {
    t.deepEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3])
    t.end()
})
