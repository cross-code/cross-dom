import flatMap from '../helpers/flatMap'

/**
 * @param {selector} selector
 * @returns {(elements: Element[]) => Element[]}
 */
export default selector => flatMap(el => [...el.querySelectorAll(selector)])
