import { flatMap, pipe, unique } from '../helpers'

/**
 * @param {selector} selector
 * @returns {(elements: Element[]) => Element[]}
 */
export default selector => pipe(
    flatMap(el => [...el.querySelectorAll(selector)]),
    unique
)
