import $children from './$children'
const test = require('tape')

test('$children', t => {
    const div = document.createElement('div')
    div.innerHTML = '<div></div> <span></span> <h1></h1>'
    const children = $children()([div])
    t.is(children.length, 3)
    t.end()
})

// @todo needs other cases
