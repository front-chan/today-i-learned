#TIL - 2022.12.03

<!-- ## 배운 내용

styled-components, useEffect, useSelector, useDispatch, store, action, payload -->

## Styled-Components

기존에는 파일을 생성하고 그 안에서 css를 사용해서 component를 꾸몄다
방법이 나쁘지 않지만 불편했다
좀 더 간편하게 React에서 CSS-in-JS 방식으로 component를 꾸밀 수 있게 도와준다

1. yarn add styled-components
2. vscode 확장팩 설치
   (vscode-styled-components : 자동 적용)

꾸미고자 하는 component을 styled-components 방식대로 먼저 만들고 그 안에 style 코드를 작성하는 방식이다

- styled 코드 작성

```
import styled from "styled-components"

const StBox = styled.div` // html태그를 styled.'div, p, h1, ...etc'
// 스타일 코드 작성 (CSS와 동일함)
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;
```

- component에 사용

```
function App () {
  return <StBox>박스</StBox>
}
```

조건부 스타일링을 하기가 쉽다
className을 사용하면 조건부 스타일링을 사용하기 까다롭다
style을 작성할 때 if문, switch문, 3항 연산자를 사용할 수 있다면
그것을 구현하기 위해서 쓰이는 것이다

```
function App () {
  return (
    <div>
      <StBox borderColor="red">Red Box</StBox>
      <StBox borderColor="green">Green Box</StBox>
      <StBox borderColor="blue">Bule Box</StBox>
    </div>
  );
};
```

props를 통해 borderColor를 전달해 줄 수 있다
같은 박스여도 red, green, blue를 지정해줄 수 있다

```
const StBox = styled.div`
  border: 1px solid ${(props) => props.borderColor};
`;
```

border에 JSX구문으로 사용하기 위해 {}를 사용하고 ``처럼 template Literals ${} 구문으로 작성한다

- map을 사용하여 작성

```
  const boxList = ["red", "green", "blue"];

  // 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default:
        return "검정 박스";
    }
  };

  function App () {
    return (
      <div>
        {boxList.map((box) =>
          <StBox borderColor={box}>{getBoxName(box)}</StBox>
        )}>
      </div>
    );
  };
```
