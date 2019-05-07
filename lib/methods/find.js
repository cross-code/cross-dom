const flatMap = require('../helpers/flatMap')

/**
 * @param {selector} selector
 * @returns {($el: Element[]) => Element[]}
 */
module.exports = selector => flatMap(el => [...el.querySelectorAll(selector)])
