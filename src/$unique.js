import generator from './generator'

export default generator(iter => {
    const prev = []
    return () => {
        let res
        while (!(res = iter.next()).done) {
            if (~prev.indexOf(res.value)) continue
            prev.push(res.value)
            return { value: res.value }
        }
        return { done: true }
    }
})
