import pipe from './pipe'
import toArray from './toArray'
import toIter from './toIter'

export default eacher => pipe(
    toArray,
    arr => (arr.forEach(eacher), arr),
    toIter
)
