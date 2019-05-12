import generator from './generator'

export default n => generator(iter => {
    let done = n <= 0
    let buf = []
    return () => {
        if (done) return buf.length > 0 ? { value: buf.shift() } : { done: true }
        let res
        while (!(res = iter.next()).done) buf = (n > 1 ? buf.slice(-n + 1) : []).concat(res.value)
        done = true
        return { value: buf.shift() }
    }
})
