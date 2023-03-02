## position 사용법

`Position`은 2차원과 3차원을 결정짓는 요소이다.

1차원은 선, 2차원은 평면, 3차원은 공간인데 CSS에는 부모-자식 간에 발생하는 마진 병합 현상유무가 2차원에 존재하고 3차원에는 존재하지 않는다.

top, left, right, bottom을 3차원 영역에서 존재하고 2차원 영역에서 자식의 높이 값이 부모의 높이 값에 영향을 준다.

기본적으로 position의 속성에는 static / relative / absolute / fixed / sticky 가 있다.

-   static : 2차원 영역이고 기본값이다. top, left, right, bottom 속성은 적용되지 않는다.
-   relative : 2, 3차원 영역이고 상대적인 위치에 배치하며 위치는 top, left, right, bottom 속성에 의해 지정된다.
-   absolute: 3차원 영역이고 절대적인 위치에 배치하며 위치는 top, left, right, bottom 속성에 의해 지정된다.
    부모의 position 상태에 따라서 기준점이 달라지며 부모를 찾아 올라가면서 아무것도 설정되어 있지 않으면 브라우저 왼쪽 최상단을 기준으로 좌표가 설정된다.
    부모의 position이 relative면 부모가 좌표의 기준점으로 설정된다.
    ![스크린샷 2023-02-24 오후 1.59.35.png](https://cdn.discordapp.com/attachments/1037267111585792020/1080447315908763658/2023-03-01_8.11.47.png)
-   fixed : 3차원 영역이고 고정적인 위치에 배치한다. top, left, right, bottom을 사용하면 브라우저 왼쪽 최상단을 기준으로 좌표 기준점이 설정되며 고정되기 때문에 쇼핑몰 배너를 고정시킬 때 많이 사용한다.
-   sticky : 3차원 영역이고 평소에는 static 상태와 같이 동작하다가 지정한 스크롤 위치에 도달했을 때 fixed 상태로 동작한다.
    부모 요소를 기준으로 움직이기 때문에 반드시 부모 컨테이너가 존재해야 하며 top, left, right, bottom 속성이 필수이다.

## this 동작 원리와 용법 / 평소 코드 중에서는 어떤 부분에서 가장 큰 차이가 생기나요?

대부분의 경우 this 값은 함수를 호출한 방법에 의해 결정된다. 실행중에는 할당으로 설정할 수 없고 함수를 호출할 때마다 다를 수 있다.

화살표 함수에는 this의 바인딩이 제공되지 않는다.

```jsx
const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};

console.log(test.func());
// 42 출력
```

실행 컨텍스트의 프로퍼티는 비엄격 모드에서 항상 객체를 참조하며 엄격모드에서는 어떠한 값이든 될 수 있다.

-   전역 실행에서 this는 엄격 모드 여부에 관계 없이 전역 객체를 참조한다.

```jsx
// 웹 브라우저에서는 window 객체가 전역 객체
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // MDN
console.log(b); // MDN
```

-   함수 내부에서 this의 값은 함수를 호출한 방법에 의해 좌우된다.

    -   비엄격 모드에서는 this 값이 호출에 의해 설정되지 않으므로 기본값으로 브라우저에서 window인 전역 객체를 참조한다.

        ```jsx
        function f1() {
            return this;
        }

        // 브라우저
        f1() === window; // true

        // node.js
        f1() === global; // true
        ```

    -   엄격 모드에서 this 값은 실행 문맥에 진입하며 설정되는 값을 유지하므로 this는 undefined로 남아있다.

        ```jsx
        function f2() {
            "use strict"; // 엄격 모드
            return this;
        }

        f2() === undefined; // true
        ```
