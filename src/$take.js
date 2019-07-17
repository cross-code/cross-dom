import generator from './generator'

export default n => generator(iter => {
    let cnt = n
    return () => {
        let res
        while (!(res = iter.next()).done) {
            return cnt-- ? { value: res.value } : { done: true }
        }
        return { done: true }
    }
})
