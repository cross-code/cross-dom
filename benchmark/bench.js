require('browser-env')()
const _ = require('../lib')
const bench = require('nanobench')

const iterChain = _.pipe(
    _.$find('div'),
    _.take(500),
    _.$addClass('test'),
    _.$removeClass('test')
)

const arrChain = _.pipe(
    selector => [...document.querySelectorAll(selector)],
    els => els.filter(el => el && el.querySelectorAll),
    els => els.flatMap(el => [...el.querySelectorAll('div')]),
    els => els.filter((el, i) => els.indexOf(el) === i),
    els => els.slice(0, 500),
    els => (els.forEach(el => el && el.classList && el.classList.add('test')), els),
    els => (els.forEach(el => el && el.classList && el.classList.remove('test')), els)
)

const prepare = cnt => {
    document.body.innerHTML = ''
    for (let i = 0; i < cnt; i++) document.write(`<div>${'<div>aa<span>bb</span>cc</div><div></div>'.repeat(10)}</div>`)
}

bench('arr#70', b => {
    prepare(70)
    b.start()
    for (let i = 0; i < 5; i++) arrChain('div')
    b.end()
})

bench('arr#150', b => {
    prepare(150)
    b.start()
    for (let i = 0; i < 5; i++) arrChain('div')
    b.end()
})

bench('iter#70', b => {
    prepare(70)
    b.start()
    for (let i = 0; i < 5; i++) iterChain(_.$('div'))
    b.end()
})

bench('iter#180', b => {
    prepare(180)
    b.start()
    for (let i = 0; i < 5; i++) iterChain(_.$('div'))
    b.end()
})
