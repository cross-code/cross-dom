import test from 'tape'
import each from './each'

test('each', t => {
    t.plan(4)
    const arr = [3, 2, 1]
    t.equal(each((x, i) => t.is(x + i, 3))(arr), arr)
    t.end()
})
