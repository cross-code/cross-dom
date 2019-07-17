/* eslint-disable no-extend-native */
import $flat from './$flat'
import toIter from './toIter'
import toArray from './toArray'
import chain from './chain'
const test = require('tape')

const orgFlat = Array.prototype.flat

test('$flat:before', t => {
    Array.prototype.flat = undefined
    t.end()
})

const m = (arr, depth) => chain(
    toIter(arr),
    $flat(depth),
    toArray
)

test('$flat', t => {
    t.deepEqual(m([1, 2, [], [3, 4]]), [1, 2, 3, 4])
    t.deepEqual(m([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, [5, 6]])
    t.deepEqual(m([1, 2, [3, [], 4, [5, 6]]], 2), [1, 2, 3, 4, 5, 6])
    t.end()
})

test('$flat:after', t => {
    Array.prototype.flat = orgFlat
    t.end()
})
