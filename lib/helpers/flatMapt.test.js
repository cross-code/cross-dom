const test = require('tape')
const flatMap = require('./flatMap')

test('flatMap', t => {
    const stub = [1, 2, 3, 4]
    t.deepEqual(flatMap(x => [x, x * 2])(stub), [1, 2, 2, 4, 3, 6, 4, 8])
    t.deepEqual(flatMap(x => [[x * 2]])(stub), [[2], [4], [6], [8]])
    t.end()
})