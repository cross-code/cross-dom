import generator from './generator'

export default n => generator(iter => {
    let done = n <= 0
    let buf = []
    return () => {
        if (done) return buf.length > 0 ? { value: buf.shift() } : { done: true }
        let res
        while (!(res = iter.next()).done) {
            if (n > 1) buf = buf.slice(-n + 1).concat(res.value)
            if (n === 1) buf = [res.value]
        }
        done = true
        return n > 0 ? { value: buf.shift() } : { done: true }
    }
})
