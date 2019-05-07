const test = require('tape')
const $ = require('./$')
const find = require('./find')

test('find', t => {
    document.body.innerHTML = `
        <div class="root">
            <div>
                <div></div>
                <span></span>
            </div>
            <div></div>
        </div>
    `
    const $root = $('.root')
    t.is(find('div')($root).length, 3)
    t.is(find('span')($root).length, 1)
    t.is(find('h1')($root).length, 0)
    t.end()
})