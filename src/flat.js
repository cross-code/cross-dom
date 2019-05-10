import generator from './generator'

export default (depth = 1) => generator(iter => {
    const acc = []
    return () => {
        if (acc.length > 0) return { done: false, value: acc.shift() }

        let done, value
        while ({ done, value } = iter.next(), !done) {
            if (!Array.isArray(value)) return { done: false, value }
            if (value.length === 0) continue

            const arr = flat(value, depth - 1)
            acc.push(...arr.slice(1))

            return { done: false, value: arr[0] }
        }

        return { done: true }
    }
})

function flat (arr, depth) {
    if (arr.flat) return arr.flat(depth)

    const len = arr.length
    const res = []

    for (let i = 0; i < len; i++) {
        const val = arr[i]
        if (Array.isArray(val) && depth > 0) {
            res.push(...flat(val, depth - 1))
        } else {
            res.push(val)
        }
    }

    return res
}
