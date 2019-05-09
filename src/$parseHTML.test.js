import $parseHTML from './$parseHTML'
const test = require('tape')

test('$parseHTML', t => {
    const nodes = $parseHTML(`<div>abc</div>def`)
    t.is(nodes.length, 2)
    t.true(nodes[0] instanceof HTMLDivElement)
    t.is(nodes[0].outerHTML, '<div>abc</div>')
    t.true(nodes[1] instanceof Text)
    t.is(nodes[1].textContent, 'def')
    t.end()
})
