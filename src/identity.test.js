import identity from './identity'
const test = require('tape')

test('identity', t => {
    const o = {}
    t.is(identity(o), o)
    t.end()
})
