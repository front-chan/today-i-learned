# Export / Export Default / Import

### export, export default 차이점

- export 방식

```
// test1.js
export const test = "test"

// test2.js
import { test } form "test1.js"
```

export는 {}를 이용해서 export 해오기 때문에 이름을 무조건 같게 해야 한다
만약 다른 이름을 사용하고 싶으면 as를 붙여주면 된다
해당 파일에 여러가지를 export 해오고 싶으면 \*를 사용하면 된다

```
// test1.js
export const test1 = 1
export const test2 = 2
export const test3 = 3
export const test4 = 4
export const test5 = 5

// test2.js
import { * as test } from "test1.js"

console.log(test.test1)
// 1 출력
```

- export default 방식

```
// test1.js
const test = "test"

export default test;

// test2.js
import a from "test1.js"
```

export default는 파일에서 하나밖에 보내지 못한다
그래서 {}도 적용하지 않고 이름도 아무거나 해도 된다
딱 test 하나만 보내지기 때문이다
