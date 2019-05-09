import each from './each'

/**
 * @param {string[]} classes
 * @returns {(elements: Element[]) => Element[]}
 */
export default (...classes) => each(el => el.classList.add(...classes))
