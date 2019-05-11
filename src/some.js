export default tester => iter => {
    let i = 0
    let res
    while (!(res = iter.next()).done) {
        if (tester(res.value, i++)) return true
    }
    return false
}
