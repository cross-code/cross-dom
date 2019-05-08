import { each } from '../helpers'

/**
 * @param {string[]} classes
 * @returns {(elements: Element[]) => Element[]}
 */
export default (...classes) => each(el => el.classList.add(...classes))
