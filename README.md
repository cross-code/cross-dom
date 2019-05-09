# cross-dom ⚔️
> A dom manipulation library, written in functional style.

## Install

## Example
```js
import {chain, $, $find, $addClass} from 'cross-dom'

chain(
    $('#content'),
    $find('.child'),
    $addClass('active')
)

// or using a pipeline operator (https://github.com/tc39/proposal-pipeline-operator)
$('#content')
    |> $find('.child')
    |> $addClass('active')
```

### Supports chain style
```js
import $ from 'cross-dom/chain'

$('#content')
    .$find('.child')
    .$addClass('active')
```

## Motivation
 DOM 조작을 위해선 많은 기능을 제공해야 합니다. 그러나 그 모든 기능이 필요하지 않을 때도 있습니다.
 한, 두 기능을 위해 라이브러리를 사용하는 것은 배보다 배꼽이 더 크다고 느끼게 됩니다.
 결국 필요한 DOM 코드만 다시 작성해 사용합니다.

[함수형 프로그래밍](https://en.wikipedia.org/wiki/Functional_programming)으로 DOM 라이브러리를 작성하면 이 문제를 해결할 수 있습니다.
필요한 함수만 import해서 번들러(webpack, parcel, rollup)가 [사용하지 않는 함수들을 제거(Tree shaking)](https://en.wikipedia.org/wiki/Tree_shaking)하기 때문입니다.

## How to Contribute

## License
MIT
