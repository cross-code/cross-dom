import toArray from './toArray'
import generator from './generator'
import SYMBOL_ITERATOR from './SYMBOL_ITERATOR'

const arrayToIter = generator(arr => {
    let i = 0
    return () => i === arr.length ? { done: true } : { value: arr[i++] }
})

export default iterable => {
    if (iterable[SYMBOL_ITERATOR]) return iterable[SYMBOL_ITERATOR]()
    return arrayToIter(Array.isArray(iterable) ? iterable : toArray(iterable))
}
