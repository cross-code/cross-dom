import $take from './$take'
import pipe from './pipe'

export default pipe(
    $take(1),
    iter => iter.next().value
)
