# cross-dom ⚔️
> A functional DOM library for modern browsers.

## Install

## Example
### Class based
```js
import $ from 'cross-dom'

$('#content')
    .find('.child')
    .addClass('active')
```
### Functional based
```js
import {$, pipe} from 'cross-dom/fp'

pipe(
    find('.child'),
    addClass('active')
)($('#content'))

// or using a pipeline operator (https://github.com/tc39/proposal-pipeline-operator)
$('#content')
    |> find('.child')
    |> addClass('active')
```

## Motivation

## How to Contribute

## License
MIT
