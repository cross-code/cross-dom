import addClass from './addClass'
const test = require('tape')

test('addClass', t => {
    const div = document.createElement('div')
    t.is(div.className, '')
    addClass('aa')([div])
    t.is(div.className, 'aa')
    addClass('bb')([div])
    t.is(div.className, 'aa bb')
    t.end()
})
