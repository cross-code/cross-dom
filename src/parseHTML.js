import toIter from './toIter'

const parser = new DOMParser()

export default str => toIter(parser.parseFromString(str, 'text/html').body.childNodes)
