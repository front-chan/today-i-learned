# git 작업 명령어

### github?

1. 소스코드를 올릴 수 있다
2. 버전관리
3. 소스코드 공유
4. 협업 가능

### 초기작업

```
git config --global user.name "my_user_name"
```

초기 user_name 도 지정해준다

```
git config --global user.email "my_user_email"
```

초기 user_email 도 지정해준다

```
git config --list
```

설정이 잘되었는지 확인할 수 있다

---

### 내 컴퓨터와 github를 연결하는 법

1. github.com에서 NEW repository를 생성한다
2. VSCODE에서 터미널을 연다

```
git init
```

제일 처음에 한번만 진행하면 된다

```
git add .
```

폴더 안의 모든 파일을 git에 업데이트 한다

```
git add "파일명"
```

만약 필요한 파일만 업데이트 하려면 필요한 파일명을 입력하면 된다

```
git status
```

현재 상태를 확인할 수 있다(생략 가능)<br>
지금 현재 git add를 하지 않아서 추적하지 않는다

![status예시](https://cdn.discordapp.com/attachments/1037267111585792020/1051001819943415838/2022-12-10_2.05.44.png)

```
git commit -m "commit message"
```

commit 메세지를 작성한다<br>
내 소스코드의 History 라고 생각하면 이해가 쉽다

```
git remote add origin git@github.com:"생성 repository 주소"
```

github Repository 주소와 내 local Repository 파일을 연결시켜 준다

```
git remote -v
```

잘 연결되었는지 확인할 수 있다(생략 가능)

```
git push origin "branch_name"
```

원하는 branch로 push한다

---

더 알게 되는 내용들은 아래에 더 추가할 예정

```
git checkout "merge할 branch"
```

merge가 될 branch로 이동한다

```
git merge "branch_name"
```

merge할 branch이름을 입력한다

```
git checkout "branch_name"
```

merge한 후 다시 작업할 branch로 이동한다
