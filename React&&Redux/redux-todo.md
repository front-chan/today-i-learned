# Redux -v Todo List

![redux-todo](https://cdn.discordapp.com/attachments/1037267111585792020/1049542162561372250/IMB_vmcxp5.gif)

#### react 숙련 2주차 과제

기초 과정에서 진행한 Todo List를 Redux를 사용하고 Router로 연결해서 상세페이지로 이동할 수 있게 했다

#### Store, Reducer, Router

이번 주차는 특히 어려웠다
한 주만에 다 이해했는지도 사실 의문이긴 하다
종이접기하고 잘라서 붙여넣기 하듯이 자리 찾아주기를 반복하고 수정했다

강의에서 Redux로 Counter 만든 파일과 저번주 과제한 TodoList와 새로 만들 Redux -v TodoList를 켜놓고 작업을 했다

Router는 맨 마지막에 연결만 하면 되겠지 라는 안일한 생각으로 Router한테 한대 맞은 기분을 느꼈다

어디서 꼬였는지 진행이 안되서 새로 다시 Router만들고 Component 파일을 나누고 새로 만드는 작업을 했다
(근데 그래도 꼬이더라...^^)

#### 그렇게 초반부터 마주한 오류들..

처음 Router 새로 연결하기 전에 저번주에 작업한 Todo List를 Redux -v으로 만드는 것부터 빨간 오류들을 만나기 시작했다
빨간색을 진짜 좋아하는데 빨간색이 싫어졌다..

- Todo들을 추가하는 것부터 오류가 발생했다
  왜냐면 dispatch를 어디서 어떻게 사용하는지, useSelector가 어떻게 사용되는지 이해하지 못했다
  강의를 보고 큰 틀은 이해를 했지만 그 부분을 어디서 어떻게 사용해야 하는지 이해하지 못했다
  payload, action은 무슨 말인지는 알겠는데 어디서 어떻게 쓰는지 강의에 확실하게 나와있지 않았다
  나중에 계속 작업하다 이해한 부분을 정리해보자면 이렇다

  - dispatch(action-creator(payload))
    payload는 dispatch(action-creator)를 통해 넘어오는 데이터
  - action은 내가 어떤 것을 실행해 줄 것인지에 대한 action.type
  - useSelector는 Store와 modules에 연결되어 저장된 데이터 저장소에 있는 데이터를 가져오는 것
  - useDispatch는 setValue처럼 값을 변경할 때 실행시켜 주는 작업을 하는 것

- change 함수를 사용할 때 저번 주에 불변성의 규칙에 어긋나게 작성을 했었다
  그래서 일단 그 부분을 규칙에 맞게 새로 작성을 해놓고 코드 오려붙이기를 시작했다
  change함수에서 parameter값으로 payload를 넘겨줄 때 처음에 id값을 넘겨줬는데 숫자만 출력되서 어떻게 진행해야 할까 고민했다
  그래서 payload로 전체 배열을 가져왔더니 실행되었다 id값을 비교해야하고 Done값을 변경해야 해서 전체 배열을 받아왔다

- styled-component 처음 사용해보는데 처음에는 component로 나누는데 어떻게 같이 Div>를 사용할까 의문이었다
  근데 매니저님이랑 얘기하다보니 component를 나누고 그 안에서 styled를 적용하는 거라 StDiv로 주로 앞에 St를 붙여준다고 하셨다
  그 후에 생긴 의문이 사용할 때 같은 div에 다른 스타일을 적용하고 싶을 때 어떻게 사용해야 할 지가 고민이었는데 구글링해보니 해당 div에 app, section을 지정해주고 css값을 지정해준다

```
<StDiv app>
<StDiv section>

const StDiv = styled.div`
  ${(props) =>
    props.app &&
    css`
      max-width: 1200px;
      width: 95%;
      margin: 20px auto;
    `};
  ${(props) =>
    props.section &&
    css`
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
    `};
`;
```

- Router 연결은 어렵지 않을 것이라고 생각했다
  전혀 그렇지 않았고 많은 오류들을 만났다..
  Router는 1개만 들어가야 한다고 한다
  왜 강의에서는 그런 디테일한 부분은 알려주지 않는지.. 혼자 알아가면서 익혀야 하는 것인지..
  ![router-error](https://cdn.discordapp.com/attachments/1037267111585792020/1049622919199866920/2022-12-05_6.17.58.png)
  어디서 에러가 나는지 구글링해도 찾을 수가 없었다
  사진에 올린 에러뿐 아니라 useHref() 에러도 있었다
  ![router-error](https://velog.velcdn.com/cloudflare/pung8146/27215a1f-4dd8-451e-9e7f-b0a246ade2af/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202022-04-06%20095628.png)
  매니저님이랑 Router.js와 App.js 파일들을 확인했는데 해결이 안되었다가 List안에 Router를 한번더 넣어서 발생한 오류였다
  후... 어쨌든 해결은 되었고 아직도 어렵고 이해안되는 부분들이 있다
  계속 사용하다보면 익숙해지겠지
  주구장창 써야한다고 하니 자연스럽게 손에 익어지겠지 생각한다.
