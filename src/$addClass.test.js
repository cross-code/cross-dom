import $addClass from './$addClass'
import chain from './chain'
import toIter from './toIter'
const test = require('tape')

const m = (el, ...classes) => chain(
    toIter([].concat(el)),
    $addClass(...classes)
)

test('$addClass', t => {
    const div = document.createElement('div')
    t.is(div.className, '')
    m(div, 'aa')
    t.is(div.className, 'aa')
    m(div, 'bb')
    t.is(div.className, 'aa bb')
    m(div, 'cc', 'dd')
    t.is(div.className, 'aa bb cc dd')
    t.doesNotThrow(() => m([1, 2, 3]))
    t.end()
})
