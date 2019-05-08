export default (src, ...fns) => fns.reduce((f1, f2) => f2(f1), src)
