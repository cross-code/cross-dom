import $ from './$'
import chain from './chain'
import toArray from './toArray'
const test = require('tape')

const m = selector => chain(
    $(selector),
    toArray
)

test('$', t => {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="a">
            <div class="b"></div>
            <div class="b" id="c"></div>
        </div>
    `)

    t.is(m('.a').length, 1)
    t.is(m('.a>.b').length, 2)
    t.true(m('.a')[0] instanceof HTMLDivElement)
    t.is(m('.a >.b')[1].id, 'c')

    m('.a')[0].remove()
    t.end()
})
