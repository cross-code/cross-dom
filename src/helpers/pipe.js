export default (...fns) => fns.reduce((f1, f2) => (...args) => f2(f1(...args)))
