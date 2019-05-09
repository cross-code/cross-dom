import $ from './$'
const test = require('tape')

test('$', t => {
    document.body.innerHTML = `
        <div></div>
        <div class="a"></div>
    `
    t.is($('div').length, 2)
    t.is($('.a').length, 1)
    t.true($('div')[0] instanceof HTMLDivElement)
    t.is($('div')[1].className, 'a')
    t.pass()
    t.end()
})
