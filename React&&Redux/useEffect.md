#useEffect

React Component가 렌더링이 될 때마다 특정 작업을 수행할 수 있게 하는 hook
어떤 화면이 그려지는 것을 렌더링이라고 하는데 어떤 Component가 화면을 보여줬을 때 무언가를 실행하고자 할 때 사용하게 된다

```
import React, {useEffect} from "react";
```

`useEffect`를 import 해야 사용할 수 있다

### useEffect 무한 렌더링

```
useEffect(() => {
  console.log("hello useEffect");
});

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
```

input에 값을 입력했을 때 console에 계속 렌더링이 되는 것을 확인할 수 있다
이유는 State가 변경이 되면 리렌더링이 일어난다
input에 값을 입력하면 value 즉 State가 변경 되었기 때문에 App Component가 리렌더링 된다
그렇기 때문에(리렌더링이 되었기 때문에) useEffect가 계속 작동하는 것이다

### 의존성 배열

useEffect를 제어할 수 있는 방법으로 의존성 배열이 있다
해당 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행하는 것이다

```
useEffect(() => {
  // 실행할 함수
}, [의존성배열])
```

- [빈 값] 비어있는 의존성 배열
  - useEffect는 처음에 한 번만 실행이 되고 다시 실행이 되지 않으려면 의존성 배열을 비어있는 [ ]을 입력해주면 된다
- [value] 값이 있는 경우
  - 최초 렌더링 뿐만 아니라 해당 값이 변할 때마다 useEffect 안에 있는 코드도 계속해서 실행이 된다
- cleanUp 활용

  - Component가 화면에서 사라졌을 때 무언가를 실행하고 싶을 때 사용

  ```
  useEffect(() => {
    // 화면에 Component가 나타났을 때(mount) 실행하려는 함수

    return () => {
      // 화면에서 Component가 사라졌을 때(unmount) 실행하려는 함수
    }
  }
  ```
