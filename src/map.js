import generator from './generator'

export default mapper => generator(iter => {
    let i = 0
    return () => {
        const { done, value } = iter.next()
        return done ? { done } : { done, value: mapper(value, i++) }
    }
})
