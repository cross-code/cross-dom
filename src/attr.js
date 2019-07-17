import pipe from './pipe'
import first from './first'
import each from './each'

const getAttr = name => pipe(
    first,
    el => el && el.getAttribute && el.getAttribute(name)
)

const setAttr = (name, val) => each(el => el && el.setAttribute && el.setAttribute(name, val))

export default (name, val) => val === undefined ? getAttr(name) : setAttr(name, val)
