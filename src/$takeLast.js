import generator from './generator'

export default n => generator(iter => {
    let len = n
    let done = len <= 0
    let buf = Array(len)
    let i = 0
    let j = 0

    return () => {
        if (done) {
            return (j < len) ? { value: buf[(i + (++j)) % len] } : { done: true }
        }

        let res
        while (!(res = iter.next()).done) buf[i++ % len] = res.value
        done = true

        if (buf.length > i) buf.length = len = i

        return len > 0 ? { value: buf[((--i) + (++j)) % len] } : { done: true }
    }
})
