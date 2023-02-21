# 기술면접스터디 1일차

## 1. 웹페이지가 브라우저에 렌더링되는 과정

### 렌더링되는 과정?

1. 브라우저에서 요청받은 html 파일을 읽기 시작하면서 DOM트리를 구축하게 된다.
2. DOM트리 파싱을 완료하면 완성된 DOM트리와 HTML 파싱 하며 요청해 놓은 link 태그, style 태그를 결합하여 CSSOM트리를 생성한다.
3. script 태그를 만나면 JavaScript 코드를 실행한다.
4. 만들어진 DOM트리와 CSSOM트리가 만나서 렌더 트리가 생성하고 위치와 크기를 계산한다.
5. 마지막으로 렌더 트리를 그린 후 브라우저에서 보이게 된다.

### 렌더링 이후의 과정?

## 2. Restful API에 대해 설명 / GET,POST 외에 알고있는 메소드와 그 기준 / RESTful API 가 아닌 것?

### REST

-   정의
    Representational State Transfer<br />
    자원을 이름으로 구분해 해당 자원의 상태를 주고 받는 모든 것을 의미한다.<br />
    자원의 표현에 의한 상태 전달을 뜻한다.<br />
    1. 자원이란?
       문서, 그림, 데이터 등 해당 SW가 관리하는 모든 것<br />
    2. 표현이란?
       그 자원을 표현하기 위한 이름<br />
    3. 상태 전달?
       데이터가 요청되는 시점에 자원의 상태를 전달<br />
       네트워크 상의 Client와 Server 사이의 통신 방식 중 하나이다.
-   개념
    어떤 자원에 대해 CRUD(Create / Read / Update / Delete) 연산을 수행하기 위해 URI(resource)로 GET / POST 등의 방식(Method)를 사용하여 요청을 보내며, 요청을 위한 자원은 특정한 형태로 표현한다.<br />

    > 💡 URL : Uniform Resource Locator 로 인터넷 상 자원의 위치<br />
    > URI : Uniform Resource Identifier로 인터넷 상의 자원을 식별하기 위한 문자열의 구성

-   구성 요소
    1. 자원 - URI
       모든 자원에는 고유한 ID가 존재하고 이 자원은 Server에 존재한다.<br />
       Client는 URI를 이용해 자원을 지정하고 해당 자원의 상태에 대한 조작을 Server에 요청한다.<br />
    2. Method
       HTTP 프로토콜의 GET/POST/PUT/PATCH/DELETE를 사용한다.
    3. 표현 - Representation of Resource
       Client와 Server가 데이터를 주고받는 형태로 JSON/XML/TEXT/RSS 등이 있는데 JSON/XML을 일반적으로 사용한다.
-   특징
    -   Server - Client 구조
        : 자원이 있는 쪽 - 자원을 요청하는 쪽
    -   Stateless (무상태)
        : HTTP 프로토콜은 Stateless Protocol이므로 REST 역시 무상태성
    -   Cacheable (캐시 처리 기능)
    -   Layered Systen (계층 구조)
    -   Uniforn Interface (인터페이스 일관성)
    -   Self-Descriptiveness (자체 표현)

### REST API

-   정의
    REST의 특징을 기반으로 서비스 API를 구현한 것이다.
-   사용 가이드
    -   URI는 정보의 자원을 표현해야 한다.
        : ex) /user , /login 등
    -   자원에 대한 행위는 HTTP Method(GET/POST 등)으로 표현한다.
        : 행위는 URL에 포함하지 않는다
-   규칙
    1. URI는 명사를 사용한다.
       : ex) /getUsers (x) /createNewUser (x)
    2. 슬래시로 계층 관계를 표현한다.
       : ex) /review/comment
    3. URI를 마지막 문자로 슬래시를 포함하지 않는다.
    4. 밑줄 ( \_ )을 사용하지 않고 하이픈 ( - )을 사용한다.
    5. URI는 소문자로만 구성한다.
    6. HTTP 응답 상태 코드를 사용한다.
       : 클라이언트는 해당 요청에 대한 실패 처리완료, 잘못된 요청 등에 대한 피드백이 필요하다.<br />
       : ex) 200대는 성공 / 400대는 client error / 500대는 server error
    7. 파일 확장자는 URI에 포함하지 않는다.
       : ex) http://~~~.com/user/img.jpg (x)

### RESTful API

-   정의
    두 컴퓨터 시스템이 인터넷을 통해 정보를 안전하게 교환하기 위해 사용하는 인터페이스이다.<br />
    대부분의 비즈니스 애플리케이션은 다양한 태스크를 수행하기 위해 다른 내부 애플리케이션 및 서드 파티 애플리케이션과 통신해야 한다.<br />
    RESTful API는 안전하고 신뢰할 수 있으며 효율적인 소프트웨어 통신 표준을 따르므로 이러한 정보 교환을 지원한다.<br />
    쉽게 말하면 RESTful은 REST의 설계 규칙을 잘 지켜서 설계된 API을 뜻하며 REST의 원리를 잘 따르는 시스템을 지칭한다.

### Method

GET
→ Read : URI가 가진 정보를 검색하기 위해 서버에 요청한다.
<br />
POST
→ Create : 클라이언트에서 서버로 전달하려는 정보를 보낸다.
<br />
PUT
→ Update : 주로 내용을 업데이트하기 위해 사용하는데 전체 데이터를 업데이트할 때 사용한다.
<br />
PATCH
→ Update : PUT과 마찬가지로 내용을 업데이트하기 위해 사용하는데 차이점은 일부 데이터만 업데이트할 때 사용한다.
<br />
DELETE
→ Delete : 안전성 문제로 대부분 서버에서 비활성화한다. 정보를 삭제한다.
<br />

### RESTful API가 아닌 이유?

REST의 모든 것을 제공하지 않고 REST API라 칭하는 경우나 Web API / HTTP API라고 칭하는 경우
