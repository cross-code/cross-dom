import test from 'tape'
import addClass from './addClass'

test('addClass', t => {
    const div = document.createElement('div')
    t.is(div.className, '')
    addClass('aa')([div])
    t.is(div.className, 'aa')
    addClass('bb')([div])
    t.is(div.className, 'aa bb')
    t.end()
})
