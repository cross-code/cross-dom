import generator from './generator'

export default (depth = 1) => generator(iter => {
    const queue = []
    return () => {
        if (queue.length > 0) return { value: queue.shift() }

        let res
        while (!(res = iter.next()).done) {
            if (!Array.isArray(res.value)) return { value: res.value }
            if (res.value.length === 0) continue

            const arr = flat(res.value, depth - 1)
            queue.push(...arr.slice(1))

            return { value: arr[0] }
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
