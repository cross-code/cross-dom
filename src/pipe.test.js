import pipe from './pipe'
const test = require('tape')

test('pipe', t => {
    const f1 = a => a ** a
    const f2 = b => b + 1
    t.is(pipe(f1, f2)(2), 5)
    t.is(pipe(f2, f1)(2), 27)

    const f3 = c => c * 2
    t.is(pipe(f1, f2, f3)(2), 10)
    t.is(pipe(f3, f2, f1)(2), 3125)

    t.end()
})
