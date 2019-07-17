import attr from './attr'
import chain from './chain'
import toIter from './toIter'
const test = require('tape')

const m = (el, name, val) => chain(
    toIter([el]),
    attr(name, val)
)

test('attr', t => {
    const div = document.createElement('div')
    t.notOk(m(div, 'class'))
    m(div, 'class', 'test')
    t.is(m(div, 'class'), 'test')
    t.doesNotThrow(() => m(3, 'class'))
    t.end()
})
