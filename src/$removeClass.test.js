import $removeClass from './$removeClass'
import chain from './chain'
import toIter from './toIter'
const test = require('tape')

const m = (el, ...classes) => chain(
    toIter([].concat(el)),
    $removeClass(...classes)
)

test('$addClass', t => {
    const div = document.createElement('div')
    div.className = 'aa bb cc dd'
    m(div, 'aa')
    t.is(div.className, 'bb cc dd')
    m(div, 'bb', 'dd')
    t.is(div.className, 'cc')
    t.doesNotThrow(() => m([1, 2, 3]))
    t.end()
})
