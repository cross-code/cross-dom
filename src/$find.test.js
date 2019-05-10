import $find from './$find'
import chain from './chain'
import toIter from './toIter'
import toArray from './toArray'
const test = require('tape')

const m = (el, selector) => chain(
    toIter([].concat(el)),
    $find(selector),
    toArray
)

test('$find', t => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="root">
            <div>
                <div></div>
                <span></span>
            </div>
            <div></div>
            <span></span>
        </div>
    `

    t.is(m(div, 'div').length, 4)
    t.is(m(div, 'span').length, 2)
    t.is(m(div, 'h1').length, 0)

    t.end()
})

test.skip('$find - no duplicate child elements.', t => {
    const div1 = document.createElement('div')
    div1.innerHTML = '<div></div>'
    const div2 = document.createElement('div')
    div2.innerHTML = '<div></div><div></div>'

    t.is($find('div')([div1]).length, 1)
    t.is($find('div')([div1, div1]).length, 1)
    t.is($find('div')([div1, div1, div2]).length, 3)
    t.is($find('div')([div1, div1, div2, div2]).length, 3)

    t.end()
})

test.skip('$find - If not Node, ignore it.', t => {
    t.doesNotThrow(() => $find('div')([1, 2]))

    const div = document.createElement('div')
    div.innerHTML = '<div></div>'
    const $divs = $find('div')([1, 2, div])
    t.is($divs.length, 1)
    t.true($divs[0] instanceof HTMLDivElement)

    t.end()
})
