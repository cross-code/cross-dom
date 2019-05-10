import pipe from './pipe'
import map from './map'
import flat from './flat'

export default mapper => pipe(
    map(mapper),
    flat()
)
