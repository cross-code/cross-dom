export default (src, ...fns) => fns.reduce((prev, fn) => fn(prev), src)
