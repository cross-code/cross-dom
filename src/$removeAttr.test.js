import chain from './chain'
import toIter from './toIter'
import $removeAttr from './$removeAttr'
const test = require('tape')

const m = (el, name) => chain(
    toIter([el]),
    $removeAttr(name)
)

test('$removeAttr', t => {
    const div = document.createElement('div')
    div.className = 'test'
    t.ok(div.className)
    m(div, 'class')
    t.notOk(div.className)
    t.end()
})
