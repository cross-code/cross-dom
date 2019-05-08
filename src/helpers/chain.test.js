import test from 'tape'
import chain from './chain'

test('chain', t => {
    const f1 = a => a ** a
    const f2 = b => b + 1
    t.is(chain(2, f1, f2), 5)
    t.is(chain(2, f2, f1), 27)

    const f3 = c => c * 2
    t.is(chain(2, f1, f2, f3), 10)
    t.is(chain(2, f3, f2, f1), 3125)

    t.end()
})
