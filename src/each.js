import map from './map'

export default eacher => map((v, i) => (eacher(v, i), v))
