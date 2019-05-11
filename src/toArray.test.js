import toArray from './toArray'
import generator from './generator'
const test = require('tape')

const from = Array.from

test('toArray:before', t => {
    Array.from = undefined
    t.end()
})

test('toArray', t => {
    const arr = [1, 2, 3]
    t.deepEqual(toArray(arr), arr)
    t.notEqual(toArray(arr), arr)
    t.end()
})

test('toArray - arrayLike', t => {
    const arrLike = { 0: 2, 1: 3, 2: 5, length: 3 }
    t.true(Array.isArray(toArray(arrLike)))
    t.deepEqual(toArray(arrLike), [2, 3, 5])
    t.end()
})

test('toArray - iterable', t => {
    const gen = generator(arr => () => {
        if (arr.length === 0) return { done: true }
        return { value: arr.shift() }
    })
    t.deepEqual(toArray(gen([2, 3, 5])), [2, 3, 5])
    t.end()
})

test('toArray - An error occurs when an empty.', t => {
    t.throws(() => toArray())
    t.throws(() => toArray(null))
    t.end()
})

test('toArray:after', t => {
    Array.from = from
    t.end()
})
