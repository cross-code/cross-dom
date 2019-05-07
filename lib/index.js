const {
    $,
    find
} = require('./methods')

class DOM {
    /**
     * @param {Element[]} elements
     */
    constructor (elements) {
        Object.assign(this, elements)
        this.length = elements.length
    }

    /**
     * @returns {Element[]}
     */
    toArray () {
        return Array.from(this)
    }

    /**
     * @param {string} selector
     */
    find (selector) {
        return find(selector)(this)
    }
}

exports.default = exports.$ = selector => new DOM($(selector))
