# REST API / RESTful API

빠질 수 없는 기술면접 질문 중 하나.<br />

---

<br />
HTTP 요청을 할 때 어떤 URI에 어떤 method를 사용할지에 대한 개발자들 사이에서 널리 사용되어지는 약속
<br />

-   GET  
     ID 중복 체크 조회  
     /api/user/id-check/{userId}
    <br />

-   POST  
     회원가입  
     /api/user/signup  
     로그인  
     /api/user/login
    <br />

-   PUT  
     비밀번호 재설정  
     /api/user/mypage/reset-pw
    <br />

-   DELETE  
     회원탈퇴  
     /api/user/mypage/deleteUser

## REST API와 RESTful API의 차이점은?

#### REST API란?

-   REST의 특징을 기반으로 서비스 API를 구현한 것
-   가장 큰 특징은 각 요청이 어떤 동작이나 정보를 위한 것인지를 그 요청의 모습 자체로 추론이 가능한 것
-   URI는 정보의 자원만 표현해야 하며 자원의 행위는 HTTP Method에 명시한다는 것
-   설계 규칙 - URI는 명사를 사용한다 - 슬래시 `/` 로 계층 관계를 표현한다 - URI 마지막 문자로 슬래시 `/` 를 포함하지 않는다 - 밑줄 `_` 을 사용하지 않고 하이픈 `-` 을 사용한다 - URI는 소문자로만 구성한다 - 파일 확장자는 URI에 포함하지 않는다 - HTTP 응답 상태 코드 사용<br />
    클라이언트는 해당 요청에 대한 실패, 처리완료 또는 잘못된 요청 등에 대한 피드백을 받아야 한다
    <br />

> 상태코드란?
> 클라이언트와 서버 간의 통신 상태를 나타내는 일련의 표준화된 코드 모음

<br />
1xx : 정보 응답 / 2xx : 성공 응답 / 3xx : 리다이렉트 / 4xx : 클라이언트 요청 오류 / 5xx : 서버 오류

#### RESTful API란?

-   REST의 설계 규칙을 잘 지켜서 설계된 API를 RESTful한 API라고 한다
-   REST의 원리를 잘 따르는 시스템을 RESTful이란 용어로 지칭한다
-   RESTful하게 만든 API는 요청을 보내는 주소만으로도 어떤 것을 요청하는지 파악이 가능하다
-   HTTP 요청을 할 때 어떤 URI에 어떤 method를 사용할지에 대한 개발자들 사이에서 널리 사용되어지는 약속
