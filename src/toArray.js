import SYMBOL_ITERATOR from './SYMBOL_ITERATOR'

const IS_BUILT_IN_SYMBOL = Boolean(Symbol && Symbol.iterator)

export default arrLike => {
    if (arrLike === undefined || arrLike === null) throw new TypeError('Cannot convert `undefined` or `null` to array')
    const isIterable = typeof arrLike[SYMBOL_ITERATOR] === 'function'
    if (Array.from && (!isIterable || (isIterable && IS_BUILT_IN_SYMBOL))) return Array.from(arrLike)
    if (Array.isArray(arrLike)) return [...arrLike]
    if (isIterable) return iterToArray(arrLike[SYMBOL_ITERATOR]())
    if (isArrayLike(arrLike)) return arrLikeToArray(arrLike)
    return []
}

function iterToArray (iter) {
    const arr = []
    let res
    while (!(res = iter.next()).done) arr.push(res.value)
    return arr
}

function isArrayLike (o) {
    return typeof o === 'object' && typeof o.length === 'number' && o.length % 1 === 0
}

function arrLikeToArray (arrLike) {
    let i = arrLike.length || 0
    const arr = Array(i)
    while (i--) arr[i] = arrLike[i]
    return arr
}
