import test from 'tape'
import unique from './unique'

test('unique', t => {
    t.deepEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3])
    t.end()
})
