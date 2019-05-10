import generator from './generator'

export default filterer => generator(iter => {
    let i = 0
    return () => {
        let done, value
        while ({ done, value } = iter.next(), !done) {
            if (filterer(value, i++)) return { done: false, value }
        }
        return { done: true }
    }
})
