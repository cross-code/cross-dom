import each from './each'

export default (...classes) => each(el => {
    if (el && el.classList) classes.forEach(cls => el.classList.add(cls))
})
