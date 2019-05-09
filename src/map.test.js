import map from './map'
const test = require('tape')

test('map', t => {
    const arr = [1, 2, 3]
    t.deepEqual(map(x => x * 2)(arr), [2, 4, 6])
    t.deepEqual(map(x => [x * 2])(arr), [[2], [4], [6]])
    t.end()
})
