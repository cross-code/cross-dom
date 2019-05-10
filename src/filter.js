import generator from './generator'

export default filterer => generator(iter => {
    let i = 0
    return () => {
        let res
        while (!(res = iter.next()).done) {
            if (filterer(res.value, i++)) return { value: res.value }
        }
        return { done: true }
    }
})
