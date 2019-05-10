import toArray from './toArray'
import toIter from './toIter'
const test = require('tape')

test('toArray', t => {
    const from = Array.from
    Array.from = undefined

    const arr = [1, 2, 3]
    t.deepEqual(toArray(arr), arr)
    t.notEqual(toArray(arr), arr)

    const arrLike = { 0: 2, 1: 3, 2: 5, length: 3 }
    t.true(Array.isArray(toArray(arrLike)))
    t.deepEqual(toArray(arrLike), [2, 3, 5])

    const iter = toIter(arrLike)
    t.deepEqual(toArray(iter), [2, 3, 5])

    Array.from = from
    t.end()
})
