import children from './children'
import chain from './chain'
import toIter from './toIter'
import toArray from './toArray'
const test = require('tape')

const m = (el, selector) => chain(
    toIter([].concat(el)),
    children(selector),
    toArray
)

test('children', t => {
    const div = document.createElement('div')
    div.innerHTML = '<div></div><span></span><h1></h1><div></div>'

    t.is(m(div).length, 4)
    t.is(m(div, 'div').length, 2)
    t.is(m(div, 'h5').length, 0)

    t.end()
})
