import pipe from './pipe'
import $filter from './$filter'
import some from './some'

export default (...classes) => pipe(
    $filter(el => el && el.classList),
    some(el => classes.some(cls => el.classList.contains(cls)))
)
