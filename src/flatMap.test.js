import flatMap from './flatMap'
const test = require('tape')

test('flatMap', t => {
    const arr = [1, 2, 3, 4]
    t.deepEqual(flatMap(x => [x, x * 2])(arr), [1, 2, 2, 4, 3, 6, 4, 8])
    t.deepEqual(flatMap(x => [[x * 2]])(arr), [[2], [4], [6], [8]])
    t.end()
})
