# React Lifecycle

클래스 컴포넌트를 사용할 때 명확히 사용되는 부분인데 React 16.8 이후 함수형 컴포넌트(React Hook)의 개념이 등장하면서 이전처럼 명확하게 구분되어 사용되지 않는다.  
하지만 React에서 공식적으로 둘 다 지원하고 있고 이전에 작성된 코드들은 대부분 클래스 컴포넌트로 작성되어 있기 때문에 Lifecycle에 대해 알고 있어야 한다.  
각 컴포넌트에는 수명 주기가 존재하는데 보통 페이지에서 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝이 난다.  
크게 세 가지 유형으로 나눌 수 있는데 생성될 때(`마운트`), 업데이트될 때(`업데이트`), 제거할 때(`언마운트`)로 구분할 수 있다.  
`마운트`는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것이고 `언마운트`는 반대로 DOM에서 제거되는 것을 뜻한다.  
`업데이트`부분은 props가 바뀔 때, state가 변경될 때, 부모 컴포넌트가 리렌더링될 때, 강제로 렌더링을 트리거할 때이다.

<img src="https://cdn.discordapp.com/attachments/1037267111585792020/1088411117048569936/lifecycle.png" />