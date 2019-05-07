module.exports = (...fns) => fns.reduceRight((prev, curr) => (...args) => prev(curr(...args)))
