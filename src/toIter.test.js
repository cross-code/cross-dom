import toIter from './toIter'
const test = require('tape')

test('toIter', t => {
    const iter1 = toIter([1, 2, 3])
    t.deepEqual(iter1.next(), { done: false, value: 1 })
    t.deepEqual(iter1.next(), { done: false, value: 2 })
    t.deepEqual(iter1.next(), { done: false, value: 3 })
    t.deepEqual(iter1.next(), { done: true, value: undefined })

    const iter2 = toIter([1, 2, 3])
    iter2[Symbol.iterator] = undefined
    t.deepEqual(iter2.next(), { done: false, value: 1 })
    t.deepEqual(iter2.next(), { done: false, value: 2 })
    t.deepEqual(iter2.next(), { done: false, value: 3 })
    t.deepEqual(iter2.next(), { done: true, value: undefined })

    const iter3 = toIter({ 0: 1, 1: 2, 2: 3, length: 3 })
    t.deepEqual(iter3.next(), { done: false, value: 1 })
    t.deepEqual(iter3.next(), { done: false, value: 2 })
    t.deepEqual(iter3.next(), { done: false, value: 3 })
    t.deepEqual(iter3.next(), { done: true, value: undefined })
    t.end()
})
