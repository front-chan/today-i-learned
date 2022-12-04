# 이벤트 활용

### DOM 트리

웹 페이지의 모든 요소를 Document 객체가 관리한다
웹 페이지의 요소들을 관리하고 제어하기 위해서는 Document 객체가 웹 페이지 요소들을 잘 반영하는 자료구조를 가지고 있어야 한다
그래서 Document 객체 모델인 DOM은 트리 자료구조 형태를 가지고 있다
트리 자료 구조는 HTML 문서를 읽어들이고 제어하기 가장 좋은 자료구조이다

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>DOM 알아보기</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>DOM이란?</h1>
    <p><strong>Document Object Model</strong>의 줄임말입니다</p>
  </body>
</html>
```

DOM 트리 구조
<img src="https://miro.medium.com/max/640/1*NA2VKR09ECb8PEgYDteR3w.gif">

### console에 출력되는 window, document 구조

<img src="https://cdn.discordapp.com/attachments/1037267111585792020/1048876275705598012/2022-12-04_5.14.09.png">

### Event 활용

- 키보드 이벤트

  - keydown
    키가 눌릴 때 실행
    (꾹 누르고 있을 때도, 입력될 때도 실행)
  - keypress
    키가 입력되었을 때 실행
    delete나 shift, ctrl, alt 실행 안됨
    (아시아권 문자를 제대로 처리하지 못하는 문제가 있다)
  - keyup
    키보드에서 키가 떨어질 때 실행
    (키를 누르고 있을 때는 실행되지 않음)

- 마우스 이벤트
  - click
    해당 element를 클릭(버튼을 눌렀다가 떼었을 때) 실행
  - dblclick
    해당 element를 더블 클릭했을 때 발생
  - mousedown
    해당 element에서 마우스 버튼을 눌렀을 때 발생
  - mouseup
    해당 element에서 눌렀던 마우스 버튼을 떼었을 때 발생
  - mousemove
    해당 element에서 마우스를 움직였을 때 발생
  - mouseover
    마우스를 해당 element 밖에서 안으로 옮겼을 때 발생
  - mouseout
    마우스를 해당 element 안에서 밖으로 옮겼을 때 발생
  - mouseenter
    마우스를 해당 element 밖에서 안으로 옮겼을 때 발생
    (버블링이 발생하지 않는다)
  - mouseleave
    마우스를 해당 element 안에서 밖으로 옮겼을 때 발생
    (버블링이 발생하지 않는다)
  - contextmenu
    마우스 오른쪽 버튼을 눌렀을 때 발생
