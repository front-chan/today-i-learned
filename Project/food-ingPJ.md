## Mini PJ Food-ing

#### PJ 후 일단 느낀점

1주일 안에 강의도 다 봐야하고 강의 내용 이해도 해야하고 프로젝트도 완성해야 했다

이번 주 강의가 그렇게 퀄리티가 있었던 것도 아니었다

저번주랑 저저번주에 비해 이해하는데 시간이 걸렸고 프로젝트 시작도 힘들었다

1주 끝나갈 때쯤 axios instance 방법을 알게 되고 난 후 그나마 순탄하게 흘러갔던 것 같다

역시 구글링...

이제 Thunk랑 연결해야 하는데 도저히 방법이 생각이 안난다ㅋㅋㅋㅋㅋㅋㅋㅋ

### Trouble Shooting

1. 처음 프로젝트 시작하면서 생긴 문제는 git이다
   두번째 협업이라 git이 일단 제일 문제다...
   master(or main) branch를 두고 dev를 생성해야 한다
   그리고 pull 을 받아오고 거기서 내 브런치를 생성해서 내 브런치에 올리고 dev와 merge작업을 하고
   다시 dev에서 pull 받아오고 내 브런치를 삭제하고 새로 생성하고...
   ㅎ... 말로도 이렇게 복잡한데
   막상 50번정도 merge하고 나니 익숙해 지긴 했다

```
git pull origin dev
git checkout -d "삭제할브런치"
git checkout -b "새로생성할브런치"
```

2. CSS 스타일 안 먹히는 text에 가끔 적용

```
word-break: break-all
```

3. axios instance
   이번에 구글링을 통해 찾았다
   instance를 사용하면 db의 baseURL을 지정하고 함수처럼 사용할 수 있다

4. 항상 추가하기를 하면 같은 페이지에서 바로 밑에 붙여졌는데
   이번에는 추가하면 다른 페이지로 넘어가게 진행했다

```
navigate('/경로')
```

5. 게시글 수정하는 페이지에서 input에 value값을 지정해줬을 때 변경이 되지 않았다
   구글링을 해보니 react에서는 value값은 read only라고 한다
   변경 하려면 defaultvaule로 지정해야 한다고 한다

6. 수정할 때 변경시 patch를 사용했는데 한개만 변경해도 "" 빈값이 들어갔다
   알고보니 초기값을 넘겨줄 때 title: ""으로 다 빈값을 넘겨줬다
   아에 {} 빈 것을 넘겨주니 변경한 값만 수정할 수 있었다

7. json-server에서 recipes에 reviews를 지정해줬더니 접근하기가 어려웠다
   그래서 추가했을 때 리뷰가 안에 들어가지 않았다
   매니저님께서 reviews를 따로 빼보라고 하셔서 따로 저장하고 review에 각각의 recipes id를 지정했다
   공식문서를 통해 ?recipeId={} 을 지정해서 접근하니 가능했다
