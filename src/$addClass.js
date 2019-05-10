import each from './each'

export default (...classes) => each(el => {
    if (el && el.classList) el.classList.add(...classes)
})
