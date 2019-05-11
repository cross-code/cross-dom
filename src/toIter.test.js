import toIter from './toIter'
import SYMBOL_ITERATOR from './SYMBOL_ITERATOR'
const test = require('tape')

test('toIter', t => {
    const iter1 = toIter([1, 2, 3])
    t.deepEqual(iter1.next(), { done: false, value: 1 })
    t.deepEqual(iter1.next(), { done: false, value: 2 })
    t.deepEqual(iter1.next(), { done: false, value: 3 })
    t.deepEqual(iter1.next(), { done: true, value: undefined })
    t.end()
})

test('toIter - custom iterator', t => {
    const iter = toIter([1, 2, 3])
    iter[SYMBOL_ITERATOR] = undefined
    t.deepEqual(iter.next(), { done: false, value: 1 })
    t.deepEqual(iter.next(), { done: false, value: 2 })
    t.deepEqual(iter.next(), { done: false, value: 3 })
    t.deepEqual(iter.next(), { done: true, value: undefined })
    t.end()
})

test('toIter - arrayLike', t => {
    const iter = toIter({ 0: 1, 1: 2, 2: 3, length: 3 })
    t.deepEqual(iter.next(), { value: 1 })
    t.deepEqual(iter.next(), { value: 2 })
    t.deepEqual(iter.next(), { value: 3 })
    t.deepEqual(iter.next(), { done: true })
    t.end()
})
