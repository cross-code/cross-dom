import $find from './$find'
const test = require('tape')

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

    t.is($find('div')([div]).length, 4)
    t.is($find('span')([div]).length, 2)
    t.is($find('h1')([div]).length, 0)

    t.end()
})

test('$find - no duplicate child elements.', t => {
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

test('$find - If not Node, ignore it.', t => {
    t.doesNotThrow(() => $find('div')([1, 2]))

    const div = document.createElement('div')
    div.innerHTML = '<div></div>'
    const $divs = $find('div')([1, 2, div])
    t.is($divs.length, 1)
    t.true($divs[0] instanceof HTMLDivElement)

    t.end()
})
