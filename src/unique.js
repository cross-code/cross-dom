import generator from './generator'

export default generator(iter => {
    const prev = []
    return () => {
        for (let res = iter.next(); !res.done; res = iter.next()) {
            if (~prev.indexOf(res.value)) continue
            prev.push(res.value)
            return { done: false, value: res.value }
        }
        return { done: true }
    }
})
