import toArray from './toArray'
import generator from './generator'
import SYMBOL_ITERATOR from './SYMBOL_ITERATOR'

const arrayToIter = generator(arr => {
    let i = 0
    return () => ({ done: i === arr.length, value: arr[i++] })
})

export default iterable => {
    if (iterable[SYMBOL_ITERATOR]) return iterable[SYMBOL_ITERATOR]()
    return arrayToIter(Array.isArray(iterable) ? iterable : toArray(iterable))
}
