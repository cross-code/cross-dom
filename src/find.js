import pipe from './pipe'
import flatMap from './flatMap'
import unique from './unique'

/**
 * @param {selector} selector
 * @returns {(elements: Element[]) => Element[]}
 */
export default selector => pipe(
    flatMap(el => [...el.querySelectorAll(selector)]),
    unique
)
