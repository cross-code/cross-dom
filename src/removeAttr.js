import each from './each'

export default name => each(el => el && el.removeAttribute && el.removeAttribute(name))
