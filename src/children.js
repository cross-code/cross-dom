import pipe from './pipe'
import $filter from './$filter'
import $flatMap from './$flatMap'
import identity from './identity'
import $unique from './$unique'

export default selector => pipe(
    $filter(el => el && el.children),
    $flatMap(el => [...el.children]),
    selector ? $filter(el => el.matches(selector)) : identity,
    $unique
)
