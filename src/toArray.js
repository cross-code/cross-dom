const $$symbol = Symbol && Symbol.iterator

export default v => {
    const isIter = typeof v.next === 'function'
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
    let len = arrLike.length || 0
    const arr = Array(len)
    while (len--) arr[len] = arrLike[len]
    return arr
}
