import flatMap from '../helpers/flatMap'

/**
 * @param {selector} selector
 * @returns {($el: Element[]) => Element[]}
 */
export default selector => flatMap(el => [...el.querySelectorAll(selector)])
