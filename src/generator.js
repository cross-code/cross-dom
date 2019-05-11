import SYMBOL_ITERATOR from './SYMBOL_ITERATOR'

export default fn => (...args) => {
    const iter = { next: fn(...args), [SYMBOL_ITERATOR]: () => iter }
    return iter
}
