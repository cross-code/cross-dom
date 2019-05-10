const $$symbol = Symbol && Symbol.iterator

export default v => {
    if (v === undefined || v === null) throw new TypeError('Cannot convert `undefined` or `null` to array')
    const isIter = v && typeof v.next === 'function'
    if (Array.from && (!isIter || ($$symbol && v[$$symbol]))) return Array.from(v)
    if (Array.isArray(v)) return [...v]
    if (isIter) return iterToArray(v)
    return arrLikeToArray(Object(v))
}

function iterToArray (iter) {
    const arr = []
    for (let res = iter.next(); !res.done; res = iter.next()) arr.push(res.value)
    return arr
}

function arrLikeToArray (arrLike) {
    let i = arrLike.length || 0
    const arr = Array(i)
    while (i--) arr[i] = arrLike[i]
    return arr
}
