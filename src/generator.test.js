import generator from './generator'
const test = require('tape')

test('generator', t => {
    const iter = generator(arr => {
        let i = 0
        return () => ({ done: i === arr.length, value: arr[i++] })
    })([2, 3, 5])

    t.deepEqual(iter.next(), { done: false, value: 2 })
    t.deepEqual(iter.next(), { done: false, value: 3 })
    t.deepEqual(iter.next(), { done: false, value: 5 })
    t.deepEqual(iter.next(), { done: true, value: undefined })

    t.end()
})
