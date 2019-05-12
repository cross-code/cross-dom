import $hasClass from './$hasClass'
import chain from './chain'
import toIter from './toIter'
const test = require('tape')

const m = (el, ...classes) => chain(
    toIter([el]),
    $hasClass(...classes)
)

test('$hasClass', t => {
    const div = document.createElement('div')
    div.className = 'aa bb cc'
    t.true(m(div, 'aa'))
    t.true(m(div, 'dd', 'cc'))
    t.false(m(div, 'dd'))
    t.end()
})
