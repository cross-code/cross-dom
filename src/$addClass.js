import each from './each'
import pipe from './pipe'
import toArray from './toArray'
import toIter from './toIter'

export default (...classes) => pipe(
    each(el => {
        if (el && el.classList) el.classList.add(...classes)
    }),
    toArray,
    toIter
)
