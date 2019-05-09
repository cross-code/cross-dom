const parser = new DOMParser()

export default str => [...parser.parseFromString(str, 'text/html').body.childNodes]
