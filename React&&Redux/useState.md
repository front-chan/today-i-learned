# useState

`useState`는 가장 기본적인 hook이며 함수 `component`에서 가변적인 상태를 가지게 해준다

```
const [state, setState] = useState(initialState);
```

`State`가 원시 데이터 타입이 아닌 객체 데이터 타입인 경우에는 불변성을 유지해줘야 한다

### 일반 업데이트 방식

```
<button onClick={() => {
  setNumber(number + 1); // 첫번째 줄
  setNumber(number + 1); // 두번쨰 줄
  setNumber(number + 1); // 세번째 줄
  }}
  >버튼</button>
```

버튼을 누를 때 마다 1씩 증가한다
3번의 setNumber가 각각 실행되는 것이 아니라 batch로 처리가 된다
onClick을 했을 때 setNumber라는 명령을 3번 내리지만 React에서는 그 명령을 하나로 모아서 최종적으로 한번만 실행한다
그래서 10번이건 100번이건 총 1번만 실행하기 때문에 1씩 증가하는 것이다

### 함수형 업데이트 방식

```
<button onClick={() => {
  setNumber((previousState) => previousState + 1);
  setNumber((previousState) => previousState + 1);
  setNumber((previousState) => previousState + 1);
  }}
  >버튼</button>
```

버튼을 누를 때 마다 3씩 증가한다
3번의 명령이 동시에 모이면 그 명령을 모아서 순차적으로 각각 한 번씩 실행시킨다
0에 1을 더하고 1에 1을 더하고 2에 1을 더하는 방식이다
최종적으로 3씩 증가하는 것이다
