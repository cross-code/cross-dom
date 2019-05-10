import toArray from './toArray'
import generator from './generator'

const $$symbol = Symbol && Symbol.iterator

const arrayToIter = generator(arr => {
    let i = 0
    return () => ({ done: i === arr.length, value: arr[i++] })
})

export default iterable => {
    if ($$symbol && iterable[$$symbol]) return iterable[$$symbol]()
    return arrayToIter(Array.isArray(iterable) ? iterable : toArray(iterable))
}
