import map from './map'
import toArray from './toArray'
import toIter from './toIter'
const test = require('tape')

test('map', t => {
    const arr = [1, 2, 3]
    t.deepEqual(toArray(map(x => x * 2)(toIter(arr))), [2, 4, 6])
    t.deepEqual(toArray(map(x => [x * 2])(toIter(arr))), [[2], [4], [6]])
    t.end()
})
