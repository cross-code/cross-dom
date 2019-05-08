import test from 'tape'
import pipe from './pipe'

test('pipe', t => {
    const f1 = a => a ** a
    const f2 = b => b + 1
    t.is(pipe(f1, f2)(2), 2 ** 2 + 1)
    t.is(pipe(f2, f1)(2), 3 ** 3)

    const f3 = c => c * 2
    t.is(pipe(f1, f2, f3)(2), (2 ** 2 + 1) * 2)
    t.is(pipe(f3, f2, f1)(2), 5 ** 5)

    t.end()
})
