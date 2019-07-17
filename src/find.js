import pipe from './pipe'
import $flatMap from './$flatMap'
import $unique from './$unique'
import $filter from './$filter'

/**
 * @param {selector} selector
 * @returns {(elements: Element[]) => Element[]}
 */
export default selector => pipe(
    $filter(el => el && el.querySelectorAll),
    $flatMap(el => [...el.querySelectorAll(selector)]),
    $unique
)
