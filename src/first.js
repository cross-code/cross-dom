import take from './take'
import pipe from './pipe'
import toArray from './toArray'

export default pipe(
    take(1),
    toArray,
    arr => arr[0]
)
