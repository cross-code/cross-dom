import takeLast from './takeLast'
import pipe from './pipe'

export default pipe(
    takeLast(1),
    iter => iter.next().value
)
